;(function($) {

    $.fn.jPacman = function(method) {

        var defaults = {
            height: 16,
            width: 16,
            initialX:14,
            initialY:23,
            time:282,
            lives:3,
            score:0,
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
        /******************************************** ******* ********************************************/
        var stepping = [];
        var step=0;
        var clearTime;
        var clearTimeMove;
        var isTakeTime;
        var clearRepeat;
        var GamePlay = true;
        var OriginalMap;
        var CoinsMap;
        var change=0;
        var win=0;
        var modo;
        /******************************************** ******* ********************************************/
        var element
        var settings = {}

        var methods = {

            init : function(options) {
                return this.each(function() {
                    settings = $.extend({}, defaults, options)
                    element = $(this);
                    OriginalMap=jQuery.extend(true,[], settings.map);
                    CoinsMap=jQuery.extend(true,[], settings.map);
                    helpers.game('play');


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

                for (var i = 0; i < CoinsMap.length; i++) {
                    for (var j = 0; j < CoinsMap[i].length; j++){
                        if(CoinsMap[i][j]=='.'){
                            var x = element.offset().left + (j*settings.width);
                            var y = element.offset().top  + (i*settings.height);
                            element.append('<i class="box coin" style="top:'+y+'px; left: '+x+'px;" id="'+j+'_'+i+'"></i>');
                        }

                    }
                }
            },
            draw2:function(dummie){
                var id="";
                 switch(dummie.initial){
                    case 'P':
                        id='#Pacman';
                    break;
                    case 'B':
                        id='#Blinky';
                    break;
                    case 'K':
                        id='#Pinky';
                    break;
                    case 'I':
                        id='#Inky';
                    break;
                    case 'C':
                        id='#Clyde';
                    break;
                }
                var x = element.offset().left + (dummie.x*settings.width);
                var y = element.offset().top  + (dummie.y*settings.height);

                $(id).animate({"left": x,"top": y},262,'linear');
            },
            game:function(status){
                if (status=='play'){
                    modo='play'
                    $('#score').html(settings.score);
                    $('#lives').html(settings.lives);
                    settings.map=jQuery.extend(true,[],OriginalMap);
                    pacman=new Pacman(settings.initialX,settings.initialY,'P');
                    pacman.autoX=-1;
                    pacman.autoY=0;
                    blinky=new Pacman(14,11,'B');
                    inky=new Pacman(13,14,'I');
                    pinky=new Pacman(14,14,'K');
                    clyde=new Pacman(15,14,'C');

                    helpers.draw();

                    helpers.put(pacman.x,pacman.y,pacman.initial);
                    helpers.put(blinky.x,blinky.y,blinky.initial);
                    helpers.put(pinky.x,pinky.y,pinky.initial);
                    helpers.put(inky.x,inky.y,inky.initial);
                    helpers.put(clyde.x,clyde.y,clyde.initial);

                    helpers.draw2(pacman);
                    helpers.draw2(blinky);
                    helpers.draw2(pinky);
                    helpers.draw2(inky);
                    helpers.draw2(clyde);

                    helpers.listen();

                    helpers.resolve(blinky.x,blinky.y,jQuery.extend(true,[],settings.map))
                    isTakeTime=setInterval( helpers.isTake,40);
                    clearTimeMove=setInterval( helpers.autoMove,settings.time);
                    clearTime=setInterval( helpers.hunt,settings.time);
                    clearRepeat=setInterval(helpers.animatioPacman,70);
                }else if(status=='stop'){
                    settings.lives--;
                    clearInterval(isTakeTime);
                    clearInterval(clearTimeMove);
                    clearInterval(clearTime);
                    clearInterval(clearRepeat);
                }else if(status=='pause'){
                     var x = element.offset().left + (10*settings.width);
                    var y = element.offset().top  + (17*settings.height);
                    element.append('<i id="gameOver" style="top:'+y+'px; left: '+x+'px;">Game Paused.</i>')
                    clearInterval(isTakeTime);
                    clearInterval(clearTimeMove);
                    clearInterval(clearTime);
                    clearInterval(clearRepeat);
                    modo='pause';
                }else if(status=='continue'){
                    $('#gameOver').remove();
                    isTakeTime=setInterval( helpers.isTake,40);
                    clearTimeMove=setInterval( helpers.autoMove,settings.time);
                    clearTime=setInterval( helpers.hunt,settings.time);
                    clearRepeat=setInterval(helpers.animatioPacman,70);
                    modo='play';
                }else if(status=='win'){
                    clearInterval(isTakeTime);
                    clearInterval(clearTimeMove);
                    clearInterval(clearTime);
                    clearInterval(clearRepeat);
                    var x = element.offset().left + (10*settings.width);
                    var y = element.offset().top  + (17*settings.height);
                    element.append('<i id="gameOver" style="top:'+y+'px; left: '+x+'px;">You Win :)</i>')
                }
                if (settings.lives==0){
                    $('#lives').html(" Game Over :(");
                    var x = element.offset().left + (10*settings.width);
                    var y = element.offset().top  + (17*settings.height);
                    element.append('<i id="gameOver" style="top:'+y+'px; left: '+x+'px;">Game Over :(</i>')
                }else if(status == 'stop'){
                    helpers.game('play');
                }
            },
            isTake:function(){
                if(settings.map[pacman.y][pacman.x] == settings.map[blinky.y][blinky.x]){
                    helpers.game('stop');
                }else if(win==300){
                    helpers.game('win');
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

                element.append('<i class="box dummie" id="'+id+'"></i>')

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
                            case 87://up
                            case 38:
                                x=0;y=-1;
                                e.preventDefault();
                            break;
                            case 83://down (s)
                            case 40:
                                x=0;y=1;
                                e.preventDefault();
                            break;
                            case 65://izquierda (a)
                            case 37:
                                x=-1;y=0;
                                e.preventDefault();
                            break;
                            case 68://drecja(d)
                            case 39:
                                x=1;y=0;
                                e.preventDefault();
                            break;
                            case 80:
                                e.preventDefault();
                                if(modo=='play'){
                                    helpers.game('pause');
                                }else{
                                     helpers.game('continue');
                                }
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
                    pacman.sw=true;
                }else{
                    pacman.sw=false;
                }
                helpers.draw2(pacman);
                if(CoinsMap[pacman.y][pacman.x]=='.'){
                    $('#'+pacman.x+'_'+pacman.y).addClass('hidden');
                    CoinsMap[pacman.y][pacman.x]='-';
                    $('#score').html(settings.score+=10);
                    win++;
                }


            },
            hunt:function(){
                step--;
                if(step>0){
                    if(blinky.x == stepping[step].x && blinky.y-1==stepping[step].y){//arriva
                        blinky.autoX=0;  blinky.autoY=-1;
                    }else if(blinky.x == stepping[step].x && blinky.y+1==stepping[step].y){//abajo
                        blinky.autoX=0;  blinky.autoY=1;
                    }else if(blinky.x-1 == stepping[step].x && blinky.y==stepping[step].y){//izquiweda
                       blinky.autoX=-1;  blinky.autoY=0;
                    }else if(blinky.x+1 == stepping[step].x && blinky.y==stepping[step].y){ //Derecha
                        blinky.autoX=1;  blinky.autoY=0;
                    }
                    settings.map[blinky.y][blinky.x]='.';
                    blinky.x=stepping[step].x;blinky.y=stepping[step].y;
                    settings.map[blinky.y][blinky.x]=blinky.initial;
                    helpers.draw2(blinky);
                    helpers.animotion(blinky);
                }else{
                    stepping=[];
                    step=0;
                    helpers.resolve(blinky.x,blinky.y,jQuery.extend(true,[], settings.map));
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

            },
            animotion:function(dummie){
                var x=0,y=-82;
                switch(dummie.initial){
                    case 'P':
                        id='#Pacman';
                    break;
                    case 'B':
                        id='#Blinky';
                        y=-82;
                    break;
                    case 'K':
                        id='#Pinky';
                        y=-102;
                    break;
                    case 'I':
                        id='#Inky';
                        y=-122;
                    break;
                    case 'C':
                        id='#Clyde';
                        y=-142;
                    break;
                }

                if(dummie.autoX == 0 && dummie.autoY==-1){//arriva
                   x=-2;
                }else if(dummie.autoX == 0 && dummie.autoY==1){//abajo
                   x=-42;
                }else if(dummie.autoX == -1 && dummie.autoY==0){//izquiweda
                   x=-82;
                }else if(dummie.autoX == 1 && dummie.autoY==0){ //Derecha
                   x=-122;
                }
                if((dummie.x+dummie.y)%2==0)
                    $(id).css('background-position' , x+'px '+ y+'px' );
                else
                    $(id).css('background-position' , (x-20)+'px '+ y+'px' );
            },
            animatioPacman:function(){

                var x=-22,y=0;
                if(pacman.autoX == 0 && pacman.autoY==-1){//arriva
                    y=-42;x=-22;
                }else if(pacman.autoX == 0 && pacman.autoY==1){//abajo
                    y=-62;x=-22;
                }else if(pacman.autoX == -1 && pacman.autoY==0){//izquiweda
                    y=-2;x=-22;
                }else if(pacman.autoX == 1 && pacman.autoY==0){ //Derecha
                    y=-22;x=-22;
                }
                if(pacman.sw){
                    if( change ==0){
                        $('#Pacman').css({'background-position-x': (x+'px'), 'background-position-y':  (y+'px') });
                        change=1;
                    }else if(change ==1){
                        $('#Pacman').css({'background-position-x': (0+'px'), 'background-position-y':  (y+'px') });
                        change=2;
                    }else{
                        $('#Pacman').css({'background-position-x': (-42+'px'), 'background-position-y':  (-2+'px') });
                        change=0;
                    }
                }else{
                    $('#Pacman').css({'background-position-x': (x+'px'), 'background-position-y':  (y+'px') });
                }
            }

        }
        function Pacman(x,y,initial){
            this.x=x;
            this.y=y;
            this.autoX;
            this.autoY;
            this.initial=initial;
            this.sw=true;
        }
        function Point(x,y){
            this.x=x;
            this.y=y;
        }
        /*Object.prototype.clone= function() {
          var newObj = (this instanceof Array) ? [] : {};
          for (i in this) {
            if (i == 'clone') continue;
            if (this[i] && typeof this[i] == "object") {
              newObj[i] = this[i].clone();
            } else newObj[i] = this[i]
          } return newObj;
           return this.slice(0);
           return this;
        };*/

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in jPacman plugin!');
        }

    }

})(jQuery);