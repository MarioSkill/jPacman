;(function($) {

    $.fn.jPacman = function(method) {

        var defaults = {
            height: 16,
            width: 16,
            initialX:14,
            initialY:23,
            time:250,
            map:[
                ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
                ['X','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','X'],
                ['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
                ['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
                ['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
                ['X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X'],
                ['X','.','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','.','X'],
                ['X','.','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','.','X'],
                ['X','.','.','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','.','.','X'],
                ['X','X','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','.','.','.','.','.','.','.','.','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','X','X','X','h','h','X','X','X','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','X','h','h','h','h','h','h','X','.','X','X','.','X','X','X','X','X','X'],
                ['.','.','.','.','.','.','.','.','.','.','X','h','h','h','h','h','h','X','.','.','.','.','.','.','.','.','.','.'],
                ['X','X','X','X','X','X','.','X','X','.','X','h','h','h','h','h','h','X','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','.','.','.','.','.','.','.','.','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
                ['X','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','X'],
                ['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
                ['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
                ['X','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','X'],
                ['X','X','X','.','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','.','X','X','X'],
                ['X','X','X','.','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','.','X','X','X'],
                ['X','.','.','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','.','.','X'],
                ['X','.','X','X','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','X','X','.','X'],
                ['X','.','X','X','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','X','X','.','X'],
                ['X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X'],
                ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
                ]
        }
        /******************************************** Dummies ********************************************/
        var pacman; //Yellow Pacman
        var blinky; //Red Ghost
        var pinky;  //Pink Ghost
        var inky;   //Cyan Ghost
        var clyde;  //Orange Ghost
        /******************************************** ******* ********************************************/
        /******************************************** Dummies ********************************************/
        var stepping = [];
        var step=0;
        /******************************************** ******* ********************************************/
        var element
        var settings = {}

        var methods = {

            init : function(options) {
                return this.each(function() {
                    settings = $.extend({}, defaults, options)
                    element = $(this);
                    pacman=new Pacman(settings.initialX,settings.initialY,'P');
                    pacman.autoX=-1;
                    pacman.autoY=0;
                    blinky=new Pacman(14,11,'B');
                    pinky=new Pacman(14,14,'K');
                    inky=new Pacman(12,14,'I');
                    clyde=new Pacman(16,14,'C');

                    helpers.put(pacman.x,pacman.y,pacman.initial);

                    helpers.put(blinky.x,blinky.y,blinky.initial);
                    helpers.put(pinky.x,pinky.y,pinky.initial);
                    helpers.put(inky.x,inky.y,inky.initial);
                    helpers.put(clyde.x,clyde.y,clyde.initial);

                    helpers.listen();
                    helpers.draw();
                    if( helpers.resolve(blinky.x,blinky.y,settings.map.clone() ) ){
                        alert(1);
                    }else
                        alert(2);
                    setInterval( helpers.autoMove,settings.time);
                    setInterval( helpers.hunt,settings.time);
                });

            },

            foo_public_method: function() {
                // code goes here
            }

        }
        //Private Methods...
        var helpers = {
            /*
            * Draw the map inside of element
            */
            draw: function() {
                element.html('');
                for (var i = 0; i < settings.map.length; i++) {
                    for (var j = 0; j < settings.map[i].length; j++) {
                        element.append('<i class="box">'+settings.map[i][j]+'</i>');
                    }
                }
            },
            put: function(x,y,dummie){
                settings.map[y][x]=dummie;
                var id ='';
                switch(dummie){
                    case 'P':
                        id='Pacman';
                    break;
                    case 'B':
                        id='Blinky';
                    break;
                    case 'K':
                        id='Pinky';
                    break;
                    case 'I':
                        id='Inky';
                    break;
                    case 'C':
                        id='Clyde';
                    break;
                }

                element.append('<i class="box p" id="'+id+'"></i>')

            },
            move: function(x,y){
                var sw=false;
                if(x==28){
                    x=0;
                }else if(x==-1){
                    x=27;
                }
                if (settings.map[y][x] != 'X'){
                    sw=true;
                }
                return sw;
            },
            listen:function(){
                var x=0,y=0;
                $(document).bind('keydown',function(e){
                        switch(parseInt(e.which)){
                            case 87://adelante (w)
                                x=0;y=-1;
                               // helpers.mover(element,0,-1,0);
                            break;
                            case 83://atras (s)
                                //helpers.mover(element,0,1,0);
                                x=0;y=1;
                            break;
                            case 65://izquierda (a)
                                x=-1;y=0;
                                //helpers.mover(element,-1,0,0);
                            break;
                            case 68://drecja(d)
                                x=1;y=0;
                                //helpers.mover(element,1,0,0);
                            break;
                        }
                        if(helpers.move(pacman.x+x,pacman.y+y,pacman.initial)){
                            pacman.autoX=x;
                            pacman.autoY=y;
                        }

                });

            },
            autoMove:function(){
                var x=pacman.autoX,y=pacman.autoY;
                if(helpers.move(pacman.x+x,pacman.y+y,pacman.initial)){
                    settings.map[pacman.y][pacman.x]='.';
                    if(pacman.x+x==28){
                        pacman.x=0;
                        x=0;
                    }else if(pacman.x+x==-1){
                        pacman.x=27;
                        x=0;
                    }
                    pacman.x+=x;pacman.y+=y;
                    settings.map[pacman.y][pacman.x]=pacman.initial;
                    helpers.draw();
                }
            },
            hunt:function(){
                step--;
                if(step>0){
                    settings.map[blinky.y][blinky.x]='.';
                    blinky.x=stepping[step].x;blinky.y=stepping[step].y;
                    settings.map[blinky.y][blinky.x]=blinky.initial;
                    helpers.draw();
                }else{
                    stepping=[];
                    step=0;
                    helpers.resolve(blinky.x,blinky.y,settings.map.clone());
                }

            },
            resolve:function(x,y,lab){
                 if(x==-1 && y == 14){
                        x=27;
                    }else if(x==28 && y ==14){
                        x=0;
                    }
                if (lab[y][x] =="P" ){
                    stepping[step]=new Point(x,y);
                    step++;
                    return true;
                }


                if(lab[y][x] != '.' && lab[y][x] != 'B'  && lab[y][x] != 'P') {
                    return false;
                }
                else if(x == -1 || x == 28) {
                    stepping[step]=new Point(x,y);
                    step++;
                    lab[y][x] = 'o';
                    return true;
                }
                lab[y][x] = '-';
                if( helpers.resolve(x, y-1,lab,lab)) {
                    lab[y-1][x] = 'o';
                    stepping[step]=new Point(x,y-1);
                    step++;
                    return true;
                }
                if( helpers.resolve(x, y+1,lab)) {
                    lab[y+1][x] = 'o';
                    stepping[step]=new Point(x,y+1);
                    step++;
                    return true;
                }
                if( helpers.resolve(x-1, y,lab)) {
                    lab[y][x-1] = 'o';
                    stepping[step]=new Point(x-1,y);
                    step++;
                    return true;
                }

                if( helpers.resolve(x+1, y,lab)) {
                    lab[y][x+1] = 'o';
                    stepping[step]=new Point(x+1,y);
                    step++;
                    return true;
                }
                lab[y][x] = '.';
                return false;

            }

        }
        function Pacman(x,y,initial){
            this.x=x;
            this.y=y;
            this.autoX;
            this.autoY;
            this.initial=initial;
        }
        function Point(x,y){
            this.x=x;
            this.y=y;
        }
        Object.prototype.clone = function() {
          var newObj = (this instanceof Array) ? [] : {};
          for (i in this) {
            if (i == 'clone') continue;
            if (this[i] && typeof this[i] == "object") {
              newObj[i] = this[i].clone();
            } else newObj[i] = this[i]
          } return newObj;
        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in jPacman plugin!');
        }

    }

})(jQuery);