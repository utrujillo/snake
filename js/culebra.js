// http://keycode.info/
$(function(){
  
  incrementar = 10;
  snakeFood = [];

  //Identificando tecla presionada
  function callkeydownhandler( evt ) {
    var ev   = (evt) ? evt : event;
    var code = (ev.which) ? ev.which : event.keyCode;

      switch( code ){
        case 37: { methods.moverIzquierda(); } break;
        case 38: { methods.moverArriba(); } break;
        case 39: { methods.moverDerecha();} break;
        case 40: { methods.moverAbajo(); } break;
      }
     
  }

  // Escuchando tecla presionada
  if (window.document.addEventListener) {
    window.document.addEventListener( "keydown", callkeydownhandler, false );
  } else {
    window.document.attachEvent( "onkeydown" , callkeydownhandler);
  }

  methods = {
    moverIzquierda: function(){
      posX    = this.getPosition('x');
      newPosX = posX - incrementar;
      $culebra.css('left', newPosX);

      this.verifyLimits('x');
      this.colision();
    },
    moverArriba: function(){ 
      posY    = this.getPosition('y');
      newPosY = posY - incrementar;
      $culebra.css('top', newPosY);
      
      this.verifyLimits('y');
      this.colision();
    },
    moverDerecha: function(){ 
      posX    = this.getPosition('x');
      newPosX = posX + incrementar;
      $culebra.css('left', newPosX);

      this.verifyLimits('x');
      this.colision();
    },
    moverAbajo: function(){ 
      posY    = this.getPosition('y');
      newPosY = posY + incrementar;
      $culebra.css('top', newPosY);

      this.verifyLimits('y');
      this.colision();
    },
    getPosition: function(axis){
      $culebra = $( "#culebra" );
      if (axis == 'x'){
        return $culebra.position().left;
      } else {
        return $culebra.position().top;
      }
    },
    verifyLimits: function(axis){
      $culebra = $('#culebra');
      $areaGame = $('#areaGame');
      limitValid = true;

      if (axis == 'x'){
        posX       = this.getPosition('x');
        withArea = $areaGame.width();
        limitValid = (posX >= 0 && posX <= 490)?true:false;
      } else {
        posY       = this.getPosition('y');
        heightArea = $areaGame.height();
        limitValid = (posY >= 0 && posY <= 390)?true:false;
      }

      if (!limitValid){ $culebra.hide( "explode" ); }
    },
    setInitFood: function(){
      
      // Posiciones de las comidas
      for (var i = 0; i < 10; i++) {
        posX = this.rangoRandom( 25, 490 );
        posY = this.rangoRandom( 25, 390 );
        snakeFood.push( [posX, posY] );
      }

      // Dibujando comidas
      $.each( snakeFood, function( key, item ){
        $div = $("<div>", {class: "comidaCulebra"} );
        $div.css({ left: item[0], top: item[1] });

        $('#areaGame').append( $div );
      });

    },
    rangoRandom: function( min, max ){ 
      // return Math.floor(Math.random() * (max - min + 1)) + min;
      return Math.round((Math.random()*(max-min)+min)/incrementar)*incrementar; 
    },
    colision: function(){
      posX = this.getPosition('x');
      posY = this.getPosition('y');

      $.each( $('.comidaCulebra'), function( item ){
        $item = $( this ) ;
        
        if( $item.position().left == posX && $item.position().top == posY ){
          $item.hide('explode', 1500);
          methods.deleteSnakeFood( posX, posY );
        }
      });
    },
    deleteSnakeFood: function(posX, posY){
      $.each( snakeFood, function(key, item){
        if( item[0] == posX && item[1] == posY ){
          snakeFood = jQuery.grep(snakeFood, function(value) {
            return value != snakeFood[key];
          });
        }
      });
    }

  }

  // Poniendo comida de forma random
  methods.setInitFood();

});
