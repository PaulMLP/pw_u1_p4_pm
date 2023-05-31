var operacion = '';
var num1 = '';
var num2 = '';
var decimal = 0;

function guardarValor(valor) {
    decimal = valor == '.' ? decimal++ : decimal++;

    if (decimal > 1 && valor == '.') valor = ''
    operacion == '' ? num1 += valor : num2 += valor;
    document.getElementById('labelResultado').value = parseFloat(operacion == '' ? num1 : num2);

}

function igual() {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch (operacion) {
        case '/': {
            document.getElementById('labelResultado').value = (num1 / num2);
            break;
        }
        case 'x': {
            document.getElementById('labelResultado').value = (num1 * num2);
            break;
        }
        case '-': {
            document.getElementById('labelResultado').value = (num1 - num2);
            break;
        }
        case '+': {
            document.getElementById('labelResultado').value = (num1 + num2);
            break;
        }
    }
}

function guardarOperacion(op) {
    operacion = op
}

