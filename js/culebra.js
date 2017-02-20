$(function(){

});


//Identificando tecla presionada
function callkeydownhandler( evt ) {
  var ev  = (evt) ? evt : event;
  var code = (ev.which) ? ev.which : event.keyCode;

    switch( code ){
      case 37: { /*methods.moverIzquierda();*/ } break;
      case 38: { /*methods.moverArriba();*/ } break;
      case 39: { /*methods.moverDerecha();*/ } break;
      case 40: { /*methods.moverAbajo();*/ } break;
    }
   
}
