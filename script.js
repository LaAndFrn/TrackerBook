let textoEntrada;
let textoResultado;

document.getElementById('cifrarButton').addEventListener('click', function() {
    let textoEntrada = document.getElementById('areaTextoInput').value;
    let textoResultado = cifrarTexto(textoEntrada); 
    document.getElementById('resultadoTexto').innerText = textoResultado;
    document.getElementById('copiarButton').style.display = 'block';
});

document.getElementById('descifrarButton').addEventListener('click', function() {
    let textoEntrada = document.getElementById('areaTextoInput').value;
    let textoResultado = descifrarTexto(textoEntrada); 
    document.getElementById('resultadoTexto').innerText = textoResultado;
    document.getElementById('copiarButton').style.display = 'block';
});


function cifrarTexto(texto) {
    return texto; 
}

function descifrarTexto(texto) {
    return texto;
}


document.getElementById('copiarButton').addEventListener('click', function() {
    let textoResultado = document.getElementById('resultadoTexto').innerText;
    navigator.clipboard.writeText(textoResultado);
    alert("Texto copiado")
});

