var operacion = '';
var num1 = '';
var num2 = '';
var decimal = 0;
let bol = false;
function guardarValor(valor) {
    decimal = valor == '.' ? decimal++ : decimal++;
    if(bol){
        reset();
        document.getElementById('labelResultado').value =' ';
        bol = false;
    }
    if (decimal > 1 && valor == '.') valor = ''
    operacion == '' ? num1 += valor : num2 += valor;
    document.getElementById('labelResultado').value = parseFloat(operacion == '' ? num1 : num2);

}

function igual() {
    bol = true
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
    operacion = op;
}

function reset(){
    operacion = '';
    num1=0
    num2=0
}

