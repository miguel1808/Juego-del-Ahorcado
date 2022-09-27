const pantallaPrincipal = document.querySelector('.pantalla-inicio')
const pantallaJuego = document.querySelector('.pantalla-juego')
const pantallaAgregar = document.querySelector('#pantallaAgregar')
const contenedorPalabra = document.querySelector('#palabraSecreta')
const guardarErrores = document.querySelector('.errores');
const teclado = document.querySelector('.teclado');
const palabraVisible = document.querySelector('#palabraSecreta')
const pista = document.querySelector('#pista');
const musica = document.querySelector('#music');

//btn extra
const btnStart = document.querySelector('#btnStart');
const btnJuego = document.querySelector('.btnJuego');
const btnAgregar = document.querySelector('#btnAgregar');
//juego
const btnReinicio = document.querySelector('#btnReiniciar')
const btnDesistir = document.querySelector('#btnDesistir')
//agregar
const btnGuardar = document.querySelector('#btnGuardar')
const btnCancelar = document.querySelector('#btnCancelar')

//
const intentosPosibles = 6;
let contadorIntentos = 0;
let aciertos = [];
let palabraSecreta = "";
let palabraMostrar = [];

//

pantallaJuego.style.display = 'none';
btnJuego.style.display = 'none';
teclado.style.display = 'none';
pantallaAgregar.style.display = 'none';

//abrir juego
btnStart.addEventListener('click', () => {
  pantallaJuego.style.display = 'block';
  pantallaPrincipal.style.display = 'none';
  btnJuego.style.display = 'block';
  teclado.style.display = 'block';
  palabraVisible.style.display = 'block';
  iniciarJuego();
  pulsarTecla()
});

//btn - Nuevo juego
btnReinicio.addEventListener('click', () =>{
  iniciarJuego();
  dibujarLinea();
  
})


//palabra secreta 
function iniciarJuego(){
  contadorIntentos = 0;
  aciertos = [];
  let posicionAleatoria = Math.floor(Math.random()*palabras.length);
  if(posicionAleatoria % 2 != 0){
    posicionAleatoria -= 1;
  }
  palabraSecreta = palabras[posicionAleatoria].toUpperCase();
  
  for (let i = 0; i < palabraSecreta.length; i++) {
    aciertos.push(" ");
  }
  
  resetBtnes();
  dibujarCanvas();
  dibujarLinea();
  palabraVisible.innerHTML = " "
  pista.textContent = palabras[posicionAleatoria + 1]
  
}


//seleccionar teclas
function accederTeclas(letra){

  let seleccionarTecla = document.querySelector(`#tecla${letra}`)
  
//

  if(palabraSecreta.includes(letra)){
    seleccionarTecla.classList.add('btnTrue');
    seleccionarTecla.disabled = true;
    for( let i = 0; i < palabraSecreta.length;i++){
      if(palabraSecreta[i] == letra ){
        
        aciertos[i] = letra;
        
      }

    }
  }else {
    seleccionarTecla.classList.add("disableBtn");
    seleccionarTecla.disabled = true;
    contadorIntentos++;
  }
  controlJuego()
  dibujarLinea();
  contadorAhorcado()
  console.log(letra, palabraSecreta, contadorIntentos, aciertos)

}

function resetBtnes() {
  let buttons = document.querySelectorAll(".teclado  button");
    buttons.forEach((button) => {
    button.classList.remove("disableBtn", "btnTrue");
    button.classList.remove("teclaDeshabilitada");
    button.classList.add("btnTeclado");
    button.disabled = false;

  });
}
//contador de juego
function controlJuego(){
  if(contadorIntentos == intentosPosibles){
    aciertos = aciertos.toString
    pista.textContent = `Perdiste, la palabra era: ${palabraSecreta}`
    estadoPartida();

  }else{
    if(aciertos.every((item) => item != " ") ) {
      contadorIntentos = 0
      estadoPartida();
      pista.textContent = 'Felicidades Ganaste!'
    }
  }
  
};

//bloquear todas las teclas
function estadoPartida(){ 
    if (!palabraSecreta.includes("_")) {
      bloquearTodasTeclas();

  }
//  =
  function bloquearTodasTeclas() {
    let teclas = document.querySelectorAll('button.btnTeclado');
    for (let i = 0; i < teclas.length; i++) {
      document.getElementById(teclas[i].id).className = "teclaDeshabilitada";
      teclas[i].disabled = true;

    }
  }
}
//

//nueva palabra
const palabraNueva = document.querySelector('#newPalabra');
const pistaNueva = document.querySelector('#newPista');

function agregarPalabra(e){
  const palabraAgregar = palabraNueva.value.toUpperCase();
  const pistaAgregar = pistaNueva.value;
  if (/^[A-Z]{3,8}$/g.test(palabraAgregar)) {
    palabraNueva.value = "";
    palabras.push(palabraAgregar);
  } else {
    palabraNueva.value = "";
  }
  //
  
  if (/^[a-zA-ZÁ_\u00c0-\u00d1]+(\s*[a-zA-ZÁ_\u00c0-\u00d1])+$/g.test(pistaAgregar)) {
    pistaNueva.value = "";
    palabras.push(pistaAgregar);

  } else {
    pistaNueva.value = "";
  }


}

btnAgregar.addEventListener('click', () =>{
  pantallaAgregar.style.display = 'block';
  pantallaPrincipal.style.display = 'none';
})

btnGuardar.addEventListener('click', () =>{
  pantallaAgregar.style.display = 'none';
  pantallaJuego.style.display = 'block';
  pantallaPrincipal.style.display = 'none';
  btnJuego.style.display = 'block';
  teclado.style.display = 'block';
  agregarPalabra()
  iniciarJuego();
});

btnCancelar.addEventListener('click', () =>{
  pantallaAgregar.style.display = 'none';
  pantallaJuego.style.display = 'none';
  pantallaPrincipal.style.display = 'block';
  btnJuego.style.display = 'none';
  teclado.style.display = 'none';
});



btnDesistir.addEventListener('click', () => {
  pantallaJuego.style.display = 'none';
  pantallaPrincipal.style.display = 'block';
  btnJuego.style.display = 'none';
  teclado.style.display = 'none';
  palabraVisible.style.display = 'none';
  iniciarJuego()
  
});




function pulsarTecla(){
  window.addEventListener(
    "keydown",
    function (e) {
      letra = e.key.toUpperCase();
      code = e.keyCode;
      
      accederTeclas(letra)
      console.log(code)
    },
    false
    );
}

///musica

  let sonido = document.createElement("audio");
  
    sonido.setAttribute("src","/audio/luffy.mp3");
    sonido.setAttribute('autoplay', 'autoplay');
    sonido.setAttribute("loop","loop");
    musica.appendChild(sonido);


    document.querySelector("#play").addEventListener("click", function() {
      // hacemos play
      document.querySelector(".fa-play").style.display = 'none'
      document.querySelector(".fa-stop").style.display = 'block'
      sonido.play()
    });
    


  document.querySelector("#pause").addEventListener("click", function() {
    // hacemos pausa
    document.querySelector(".fa-stop").style.display = 'none'
    document.querySelector(".fa-play").style.display = 'block'
    sonido.pause();
  });
  
  
  
  
  