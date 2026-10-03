Simulador de BlackJack (Pre-entrega 3) 
Se modifica el juego de la pre-entrega-2 encapsulando todo en funciones
1. funcion flecha, generaCarta
2. funcion con return y parametros  = validaApuesta(apuestaIngresada, saldoActual)
3. funcion que imprimer resultados =  (resultado, puntosJugador, puntosDealer, saldoActual)
4. funcion que engloba el juego = iniciarJuegoBlackjack() 

Readme.md anterior: 
Simulador de BlackJack (Pre-entrega 2)
funcionamiento:
1.Se basa en un juego de blackjack donde se simulan las cartas con un puntaje del 1 al 10
2.para el calculo aleatorio de usa la libreria nativa Math
3.No se implementa la logica del AS que puede valer 1 punto o 11 puntos. para no complicar el codigo
4.Se usa Confirm para manejar el juego, Aceptar = pedir , y cancelar = PLANTARSE
5. Se usa prompt para solicitar el valor de la apuesta , se parte de un saldo de $ 100 000 para cada partida. La apuesta debe ser mayor a 0 y menor al saldo
6. Se reparten dos cartas al jugador y al dealer al inicio.
7. Inicia el turno el jugador , pide cartas hasta plantarse o pasarse de 21
8. el turno del dealer pide carta siempre, con 16 o menos debe seguir pidiendo.
9. se define el ganador , y se actualiza el saldo
10. se pregunta si quiere seguir jugando o sale.

