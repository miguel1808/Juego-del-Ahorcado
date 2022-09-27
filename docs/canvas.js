const tablero = document.querySelector('#ahorcado').getContext('2d');

function dibujarCanvas(){ 
    tablero.lineWidth = 10;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#8ec5fc';
    tablero.strokeStyle = 'black';
    tablero.fillRect(0,0,300, 400);
    tablero.beginPath();
    tablero.moveTo(50,50);
    tablero.lineTo(50, 280);
    tablero.stroke();
    tablero.closePath();
    //parte baja
    tablero.beginPath();
    tablero.moveTo(20,285);
    tablero.lineTo(120, 285);
    tablero.stroke();
    tablero.closePath();
    //parte alta
    tablero.beginPath();
    tablero.moveTo(50,50);
    tablero.lineTo(150,50);
    tablero.stroke();
    tablero.closePath();
    //union cabeza/horca
    tablero.beginPath();
    tablero.moveTo(150,50);
    tablero.lineTo(150,80);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLinea (){
    tablero.lineWidth = 2;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#F7F5F6';
    tablero.strokeStyle = 'black';

    let anchura = 250 / palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(30 + (anchura*i), 340);
        tablero.lineTo(40 + (anchura*i), 340);
        if(palabraSecreta.length == aciertos.length){
            tablero.fillStyle="red"; //color de relleno
            tablero.font="bold 17px arial"; //estilo de texto
            tablero.fillText(aciertos[i],29+ (anchura*i), 335)
        }
    }
    tablero.stroke();
    tablero.closePath();

}


//

function contadorAhorcado(){
    if(contadorIntentos == 1){
        tablero.beginPath();
      // Grosor de línea
      tablero.lineWidth = 5;
      tablero.arc(150, 110, 26, 0, 2 * Math.PI);
      tablero.stroke();
    } else if( contadorIntentos == 2){
      
        //cuerpo
      tablero.beginPath();
      
      tablero.lineWidth = 5;
      tablero.moveTo(150, 135);
      tablero.lineTo(150, 220);
      tablero.stroke();
    }else if( contadorIntentos == 3){
        //brazoDerecho
      tablero.beginPath();
      tablero.lineWidth = 5;
      tablero.moveTo(150, 145);
      tablero.lineTo(120, 180);
      tablero.stroke();
    }else if( contadorIntentos == 4){
        //brazoIzquierdo
      tablero.beginPath();
      tablero.lineWidth = 5;
      tablero.moveTo(150, 145);
      tablero.lineTo(190, 180);
      tablero.stroke();
    }else if( contadorIntentos == 5){
        //brazoIzquierdo
      tablero.beginPath();
      tablero.lineWidth = 5;
      tablero.moveTo(150, 220);
      tablero.lineTo(125, 260);
      tablero.stroke();
    }else if( contadorIntentos == 6){
        //brazoIzquierdo
      tablero.beginPath();
      tablero.lineWidth = 5;
      tablero.moveTo(150, 220);
      tablero.lineTo(180, 260);
      tablero.stroke();
    }
    
}
