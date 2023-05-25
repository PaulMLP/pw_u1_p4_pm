function convertir(idCampo) {
    return parseInt(document.getElementById(idCampo).value);
}

function sumar(num1, num2) {
    return num1 + num2;
}

function sumarNumeros() {
    document.getElementById('labelResultado').innerHTML = "Resultado " + sumar(convertir('idNum1'), convertir('idNum2'));
}

function restarNumeros() {
    document.getElementById('labelResultado').innerHTML = "Resultado " + (convertir('idNum1') - convertir('idNum2'));
}

function multiplicarNumeros() {
    document.getElementById('labelResultado').innerHTML = "Resultado " + (convertir('idNum1') * convertir('idNum2'));
}

function dividirNumeros() {
    document.getElementById('labelResultado').innerHTML =
        "Resultado " + (convertir('idNum2') != 0 ? (convertir('idNum1') / convertir('idNum2')) : 'indefinido');
}

function eliminarElemento() {
    document.getElementById('ideliminar').remove;
}

function insertarElemento() {
    document.getElementById("elemento").innerHTML = '<strong> Importante! </strong>';
}