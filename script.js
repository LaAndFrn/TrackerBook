let textoEntrada;
let textoResultado;

document.getElementById('cifrarButton').addEventListener('click', function() {
    let textoEntrada = document.getElementById('areaTextoInput').value;
    if (noTieneMayusculasOAcentos(textoEntrada)){
        let textoResultado = cifrarTexto(textoEntrada); 
        document.getElementById('resultadoTexto').innerText = textoResultado;
        document.getElementById('copiarButton').style.display = 'block';
    }else{
        alert("El texto ingresado contiene Mayúsculas o acentos y este encriptador no los acepta, por favor cambia las letras con estas condiciones")
    }
});

document.getElementById('descifrarButton').addEventListener('click', function() {
    let textoEntrada = document.getElementById('areaTextoInput').value;
    if (noTieneMayusculasOAcentos(textoEntrada)){
        let textoResultado = descifrarTexto(textoEntrada); 
        document.getElementById('resultadoTexto').innerText = textoResultado;
        document.getElementById('copiarButton').style.display = 'block';
    }else{
        alert("El texto ingresado contiene Mayúsculas o acentos y este encriptador no los acepta, por favor cambia las letras con estas condiciones")
    }
    
});


function cifrarTexto(texto) {
    let textoCifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        textoCifrado += String.fromCharCode(charCode + 3);
    }
    return textoCifrado;
}

function descifrarTexto(texto) {
    let textoDecifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        textoDecifrado += String.fromCharCode(charCode - 3);
    }
    return textoDecifrado;
}


function noTieneMayusculasOAcentos(texto) {
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(texto);
    if (tieneMayusculas || tieneAcentos){
        return false;
    }else{
        return true;
    }
}

document.getElementById('copiarButton').addEventListener('click', function() {
    let textoResultado = document.getElementById('resultadoTexto').innerText;
    navigator.clipboard.writeText(textoResultado);
    alert("Texto copiado")
});

