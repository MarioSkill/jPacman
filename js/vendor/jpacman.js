// remember to change every instance of "jPacman"
// to the name of your plugin!
;(function($) {

    // here it goes!
    $.fn.jPacman = function(method) {

        // plugin's default options
        var defaults = {

            foo: 'bar',
            bar: 'foo',
            height: 16,
            width: 16,
            point:[],
            dummies : ['.pacman','.Gred','.pink'],
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
                ['X','X','X','X','X','X','.','X','X','.','X','X','X','-','-','X','X','X','.','X','X','.','X','X','X','X','X','X'],
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
                ],
            solucion : [],
            i:0,
            time:0,
            free:[],
            tecla: new Punto(1,0)
        }

        // this will hold the merged default and user-provided properties
        // you will have to access the plugin's properties through this object!
        // settings.propertyName
        var settings = {}

        // public methods
        // to keep the $.fn namespace uncluttered, collect all
        // of the plugin's methods in an object literal and call
        // them by passing the string name of the method to the plugin
        //
        // public methods can be called as
        // $(selector).jPacman('methodName', arg1, arg2, ... argn)
        // where "jPacman" is the name of your plugin and "methodName"
        //is the name of a function available in
        // the "methods" object below;
        // arg1 ... argn are arguments to be passed to the method
        //
        // or, from within the plugin itself, as
        // methods.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available
        // in the "methods" object below
        var methods = {

            // this the constructor method that gets called when
            // the object is created
            init : function(options) {

                // iterate through all the DOM elements we are
                // attaching the plugin to
                return this.each(function() {

                    // the plugin's final properties are the merged default
                    // and user-provided properties (if any)
                    // this has the advantage of not polluting the defaults,
                    // making the same instace re-usable with
                    // new options; thanks to Steven Black for suggesting this
                    settings = $.extend({}, defaults, options)

                    // "element" holds the jQuery object of the current DOM element
                    var element = $(this);

                    // code goes here
                    helpers.dibujar(element);
                    helpers.colocar(element,1,29,0);//pacman
                    helpers.colocar(element,13,12,1);//fantasma rojo
                    helpers.listen(element);
                    //var aux = settings.map;
                    if(helpers.resolve(13,12)){
                        settings.i=settings.solucion.length-1;
                        helpers.reset();
                        helpers.cazar(element);
                        settings.time= setInterval( helpers.repetir,150);
                        setInterval(helpers.listen,200);
                    }else
                        alert('no')
                });

            },

            // a public method. for demonstration purposes only - remove it!
            public: function() {
               helpers.dibujar(element);
            }

        }

        // private methods
        // these methods can be called only from within the plugin
        //
        // private methods can be called as
        // helpers.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in
        // the "helpers" object below; arg1 ... argn are arguments to
        // be passed to the method
        var helpers = {
            repetir : function(e){
                helpers.cazar($('#tablero'));
            },
            cazar:function(element){
                    if(settings.i>=0){
                        var x = settings.solucion[settings.i].x;
                        var y = settings.solucion[settings.i].y;
                        if(y==settings.point[0].y &&  x == settings.point[0].x){
                            //alert('Perdistes')
                            window.clearInterval(settings.time)
                        }else{
                            settings.map[settings.point[1].y][settings.point[1].x]='.'
                            helpers.colocar(element,x,y,1);
                            settings.i--;
                        }

                    }else{
                        window.clearInterval(settings.time)
                        settings.solucion=[];
                        settings.i=0;
                        helpers.resolve(settings.point[1].x,settings.point[1].y);
                        helpers.reset();
                        settings.i=settings.solucion.length-1;
                        helpers.cazar(element);
                        settings.time= setInterval( helpers.repetir,200);
                    }


            },
            dibujarArray: function(element){
                element.html('');
                for (var i = 0; i < settings.map.length; i++) {
                    for (var j = 0; j < settings.map[i].length; j++) {

                        element.append('<i class="ficha">'+settings.map[i][j]+'</i>');
                    }
                }
            },
            reset :function(){
                for (var i = 0; i < settings.map.length; i++) {
                    for (var j = 0; j < settings.map[i].length; j++) {
                        if(settings.map[i][j]=="o")
                            settings.map[i][j]='.'
                        else if (settings.map[i][j]=='-'){
                            settings.map[i][j]='.';
                        }
                    }
                }
            },
            dibujar: function(element) {
                var tipe="";
                var coin='';
                for (var i = 0; i < settings.map.length; i++) {
                    for (var j = 0; j < settings.map[i].length; j++) {
                        switch(settings.map[i][j]){
                            case '.':
                                tipe ='road';
                            break
                            case 'X':
                                tipe ='wall';
                            break;
                            case 'o':
                                tipe='no'
                                settings.solucion[settings.i]=new Punto(j,i);
                                settings.i++;
                            break
                            default:
                                tipe ='default';
                        }
                        if (tipe=="road")
                            coin="<i class='coin'></i>";
                        else
                            coin ="";

                        element.append('<i class="ficha '+tipe+'">'+coin+'</i>');
                    };
                };
            },

            colocar: function(element,x,y,i){
                settings.free[i]=false;
                settings.map[y][x]=settings.dummies[i].substring(1,2);
                settings.point[i]=new Punto(x,y);
                x = element.offset().left + (x*settings.width);
                y = element.offset().top  + (y*settings.height);
                $(settings.dummies[i]).animate({
                    'left': x +'px',
                    'top':  y +'px'
                },{duration:250});
                settings.free[i]=true;
            },
            mover:function(element,x,y,i){
                x += settings.point[i].x;
                y += settings.point[i].y;
                if(x==-1 && y == 14){
                    x=27;
                }else if(x==28 && y ==14){
                    x=0;
                }
                if(settings.map[y][x]=='.'){
                    settings.map[settings.point[i].y][settings.point[i].x]='.'
                    helpers.colocar(element,x,y,i);
                }

            },
            resolve: function(x,y){
                 if(x==-1 && y == 14){
                        x=27;
                    }else if(x==28 && y ==14){
                        x=0;
                    }
                if (settings.map[y][x] =="p" ){
                    settings.solucion[settings.i]=new Punto(x,y);
                    settings.i++;
                    return true;
                }


                if(settings.map[y][x] != '.' && settings.map[y][x] != 'G'  && settings.map[y][x] != 'p') {
                    return false;
                }
                else if(x == -1 || x == 28) {
                    settings.solucion[settings.i]=new Punto(x,y);
                    settings.i++;
                    settings.map[y][x] = 'o';
                    return true;
                }
                settings.map[y][x] = '-';
                if( helpers.resolve(x, y-1)) {
                    settings.map[y-1][x] = 'o';
                    settings.solucion[settings.i]=new Punto(x,y-1);
                    settings.i++;
                    return true;
                }
                if( helpers.resolve(x, y+1)) {
                    settings.map[y+1][x] = 'o';
                    settings.solucion[settings.i]=new Punto(x,y+1);
                    settings.i++;
                    return true;
                }
                if( helpers.resolve(x-1, y)) {
                    settings.map[y][x-1] = 'o';
                    settings.solucion[settings.i]=new Punto(x-1,y);
                    settings.i++;
                    return true;
                }

                if( helpers.resolve(x+1, y)) {
                    settings.map[y][x+1] = 'o';
                    settings.solucion[settings.i]=new Punto(x+1,y);
                    settings.i++;
                    return true;
                }
                settings.map[y][x] = '.';
                return false;

            },
            listen: function(element){
                var  aux=new Punto(settings.tecla.x,settings.tecla.y);
                $(document).bind('keydown',function(e){

                        switch(parseInt(e.which)){
                            case 87://adelante (w)
                                aux=new Punto(0,-1);
                               // helpers.mover(element,0,-1,0);
                            break;
                            case 83://atras (s)
                                //helpers.mover(element,0,1,0);
                                aux=new Punto(0,1);
                            break;
                            case 65://izquierda (a)
                                aux=new Punto(-1,0);
                                //helpers.mover(element,-1,0,0);
                            break;
                            case 68://drecja(d)
                                aux=new Punto(1,0);
                                //helpers.mover(element,1,0,0);
                            break;
                        }
                });

                 if(settings.map[aux.y][aux.x]=='.'){
                    settings.tecla=new Punto(aux.x,aux.y);
                }

                helpers.mover($('#tablero'),settings.tecla.x,settings.tecla.y,0);

            }


        }
        function Punto(x,y) {
            this.x=x;
            this.y=y;
        }
        // if a method as the given argument exists
        if (methods[method]) {

            // call the respective method
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        // if an object is given as method OR nothing is given as argument
        } else if (typeof method === 'object' || !method) {

            // call the initialization method
            return methods.init.apply(this, arguments);

        // otherwise
        } else {

            // trigger an error
            $.error( 'Method "' +  method + '" does not exist in jPacman plugin!');

        }

    }

})(jQuery);