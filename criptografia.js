function letraParaNumeroCript(letra) {
    let numero =  (((letra.charCodeAt(0) - 65 + 3)) % 26) + 65
    return numero;
  }

  function numeroParaLetra(numero) {
    let letra = String.fromCharCode(numero);
    return letra;
}

function encriptarTexto(texto) {
    let textoEncriptado = "";

    for (i = 0; i < texto.length; i ++) {

        let numeroAtual = texto.charCodeAt(i);
        let letraAtual = numeroParaLetra(numeroAtual);

        if (numeroAtual == 32) {

        textoEncriptado = textoEncriptado + " ";

        } else {
        
        textoEncriptado =  textoEncriptado + numeroParaLetra(letraParaNumeroCript(letraAtual));

        }
        
    }
    console.log(textoEncriptado);
}

encriptarTexto("");
