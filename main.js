const textArea = document.querySelector('.ingresar-texto');
const mensaje = document.querySelector('.mensaje');
const image = document.querySelector('.container-der');
const parrafo = document.querySelector('.contenedor-parrafo');

function encriptarLetras(texto){
    let matrizCodigo = [["e", "enter"], ["a", "ai"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto;
}

function btnEncriptar() {
    const textoEncriptado = encriptarLetras(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value ="";
    image.style.backgroundImage = "none";
    parrafo.style.display = "none";
    document.getElementById('btn-copiar').style.display = 'block';
}

function desencriptarLetras(texto){
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptarLetras(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value ="";
    image.style.backgroundImage = "none";
    parrafo.style.display = "none";
    document.getElementById('btn-copiar').style.display = 'block';
}

function btnCopiar() {
    mensaje.select();
    
    navigator.clipboard.writeText(mensaje.value).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
}
