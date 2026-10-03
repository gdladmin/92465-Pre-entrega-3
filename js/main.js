// SE DECLARAN TODAS LAS FUNCIONES AL INICIO PARA MAYOR CLARIDAD.

// FUNCION FLECHA
const generarCarta = () => Math.floor(Math.random() * 10) + 1;

// FUNCION CON RETURN 
function validaApuesta(apuestaIngresada, saldoActual) {
  let apuestaConvertida = parseInt(apuestaIngresada);
  if (isNaN(apuestaConvertida) || apuestaConvertida <= 0 || apuestaConvertida > saldoActual) {
    alert("Apuesta inválida. Debes ingresar un número mayor a 0 y menor o igual a tu saldo actual.");
    return 0; 
  }
  return apuestaConvertida; 
}

// FUNCION QUE MUESTRA RESULTADOS 
function mostrarResumenPartida(resultado, puntosJugador, puntosDealer, saldoActual) {
  alert(resultado + "\n\nTus puntos: " + puntosJugador + " | Dealer: " + puntosDealer + "\nSaldo: $" + saldoActual);
}
// ********************************************************************
// FUNCIÓN PRINCIPAL QUE ENCAPSULA TODO EL JUEGO
// *******************************************************************
function iniciarJuegoBlackjack() {
  let jugarBlackJack = window.confirm("¿Quieres jugar BlackJack?");
  let saldo = 100000;

  while (jugarBlackJack) {
    if (saldo <= 0) {
      alert("Te has quedado sin saldo. Fin del juego.");
      break;
    }

    let entradaApuesta = prompt("Tu saldo actual es: $" + saldo + "\n¿Cuánto dinero apuestas?");
    let apuesta = validaApuesta(entradaApuesta, saldo);

    if (apuesta === 0) {
      continue;
    }

  // *****************************************************************************************
  // INICIO: Se reparten dos cartas al jugador y al dealer (del 1 al 10)
  // *****************************************************************************************


    let jugadorCarta1 = generarCarta();
    let jugadorCarta2 = generarCarta();
    let puntosJugador = jugadorCarta1 + jugadorCarta2;

    let dealerCarta1 = generarCarta();
    let dealerCarta2 = generarCarta();
    let puntosDealer = dealerCarta1 + dealerCarta2;

  // Muestra inicio de partida
  // NOTA: no se implementa logica del AS (que valga 1 o 11) , para no complicar el codigo. 

    alert("Apuesta en juego: $" + apuesta + "\n\n" +
    "Tus cartas: " + puntosJugador + " (" + jugadorCarta1 + " y " + jugadorCarta2 + ")\n" +
    "Primera carta del Dealer: " + dealerCarta1
  );
  // *****************************************************************************************
  // INICIA TURNO JUGADOR 
  // ***************************************************************************************** 
    let turnoJugador = true;
     let mensajeTurno = "Tus puntos actuales: " + puntosJugador;
    let mensajeResultado = ""; 

    while (turnoJugador && puntosJugador < 21) {
      let pedirCarta = window.confirm(
      mensajeTurno +
      "\n\n¿Quieres otra carta?\n• Pulsa 'Aceptar' para PEDIR.\n• Pulsa 'Cancelar' para PLANTARSE."
    );


      if (pedirCarta) {
        let nuevaCarta = generarCarta();
        puntosJugador = puntosJugador + nuevaCarta;

        if (puntosJugador > 21) {
          saldo  = saldo - apuesta; 
          mensajeResultado = "Te salió un " + nuevaCarta + ".\nTe pasaste de 21 !!! Perdiste esta mano.\nPerdiste: $" + apuesta;
          alert(mensajeResultado);
          turnoJugador = false;
  }
      } else { 
        turnoJugador = false;
      }
    }
 // *****************************************************************************************
  // INICIA TURNO DEALER  
  // ***************************************************************************************** 
  
  // El dealer solo juega si el jugador NO se pasó de 21

    if (puntosJugador <= 21) {
      alert("Turno del Dealer.\nSu segunda carta es: (" + dealerCarta2 + "). Puntos totales: " + puntosDealer);

      while (puntosDealer < 17) {
        let cartaExtraDealer = generarCarta();
        puntosDealer = puntosDealer + cartaExtraDealer;
        alert("El dealer pide carta y le sale un " +
          cartaExtraDealer +
          ". Puntos actuales del dealer: " +
          puntosDealer);
      }
// *****************************************************************************************
  // SE DETERMINA EL GANADOR   
  // ***************************************************************************************** 
     
  if (puntosDealer > 21) {
      saldo += apuesta;
      mensajeResultado = "La banca se pasa, !!!!! GANASTE !!!! \nGanaste: $" + apuesta;
    } else if (puntosJugador > puntosDealer) {
      saldo += apuesta;
      mensajeResultado = "!!! Ganaste la mano!!! \nGanaste: $" + apuesta;
    } else if (puntosJugador < puntosDealer) {
      saldo -= apuesta;
      mensajeResultado = "Perdiste esta mano.\nPerdiste: $" + apuesta;
    } else {
      mensajeResultado = " **** EMPATE ***** Recuperas tu apuesta.";
    }
  }

    mostrarResumenPartida(mensajeResultado, puntosJugador, puntosDealer, saldo);

    if (saldo > 0) {
      jugarBlackJack = window.confirm("¿Quieres otra partida?");
    } else {
      jugarBlackJack = false;
    }
  }

  alert("¡Gracias por jugar al Blackjack! Tu saldo final fue de: $" + saldo);
}

// *****************************************************************
//  LLAMADA A LA FUNCION PRINCIPAL 
// *****************************************************************
// 
iniciarJuegoBlackjack();