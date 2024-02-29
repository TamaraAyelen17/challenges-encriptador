const textArea = document.querySelector('.ingresar-texto');
const mensaje = document.querySelector('.mensaje');
const image = document.querySelector('.container-der');
const parrafo = document.querySelector('.contenedor-parrafo');

function encriptarLetras(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
}