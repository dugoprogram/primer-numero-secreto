//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maximoIntentos = 6;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //es verdadera la condicion
        alert(`De pana! era el : ${numeroUsuario} y fue en ${intentos} ${intentos == 1 ? 'intento': 'intentos'}, que me deci?`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }
        else{
            alert('El numero secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        intentos++;
        //palabraIntentos = 'intentos';
        if (intentos > maximoIntentos){
            alert(`Lo siento, has agotado tus ${maximoIntentos} intentos`);
            break;
        }

        //la condicion no se cumplio
        //alert('no acertaste el numero');
    }
}


