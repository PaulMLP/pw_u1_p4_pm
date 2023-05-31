const sumar = (num1, num2) => num1 + num2;

const convertir = (idCampo) => {
  console.log("Convertir " + idCampo);
  return parseInt(document.getElementById(idCampo).value);
};

const sumarNumeros = () => {
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + sumar(convertir("idNum1"), convertir("idNum2"));
};

const restarNumeros = () => {
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + (convertir("idNum1") - convertir("idNum2"));
};

const multiplicarNumeros = () => {
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + convertir("idNum1") * convertir("idNum2");
};

const dividirNumeros = () => {
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " +
    (convertir("idNum2") != 0
      ? convertir("idNum1") / convertir("idNum2")
      : "indefinido");
};

const eliminarElemento = () => {
  document.getElementById("ideliminar").remove();
  console.log(document.getElementById("ideliminar"));
  console.log("test");
};

const insertarElemento = () => {
  document.getElementById("elemento").innerHTML =
    "<strong> Importante! </strong>";
};

const conceptosJS = () => {
  //var (ya no es comunmente utilizada)
  //let
  //const (declarar constante)

  var variable1 = "Paúl";
  var variable2 = 1;

  let variable3 = "Erick";
  let variable4 = 8;

  const variable5 = "Polck";
  const variable6 = 9;

  console.log(variable4);

  //Declaración de Arreglos

  const diasSemana = ["Lunes", "Martes", "Miércoles"];
  console.log(diasSemana);

  console.log(diasSemana[0]);
  diasSemana.push("Jueves");
  diasSemana.push("Viernes");

  console.log(diasSemana);

  const diasFinSemana = ["Sábado", "Domingo"];

  const diaCompleto = diasSemana.concat(diasFinSemana);

  console.log(diasSemana.pop());

  console.log(diasSemana);


  for (const dia of diaCompleto) {
    console.log(dia);
  }

  //Declaracion de Objetos
  const persona = {
    nombre: "Erick",
    apellido: "Pol",
    edad: 23,
    ciudad: "Quito",
  };

  console.log(persona);

  const persona2 = {
    nombre: "Erick",
    apellido: "Pol",
    edad: 23,
    ciudad: "Quito",
    vehiculo: {
      anio: 2015,
      modelo: "EcoSport",
      marca: "Ford",
    }
  };

  console.log(persona2);

  //Desestructuracion de Arreglos

  const dias2 = ['Lunes', 'Martes','Miércoles','Jueves','Viernes'];
  const [dia1,dia2,dia3,dia4] = dias2;

  console.log(dia2);
  console.log(dia4);

  const [d1,d2,d3,d4,d5] = ['Lunes', 'Martes','Miércoles','Jueves','Viernes'];
  console.log(d1);
  console.log(d5);

  //Desestructuracion de un objeto
  const persona3 = {
    nombre: "Erick",
    apellido: "Pol",
    edad: 23,
    ciudad: "Quito",
  };

  const{nombre,ciudad} = persona3;
  console.log(nombre);
  console.log(ciudad);

  const persona4 = {
    nombre: "Erick",
    apellido: "Pol",
    edad: 23,
    ciudad: "Quito",
    vehiculo: {
      anio: 2015,
      modelo: "EcoSport",
      marca: "Ford",
    }
  };

  const{vehiculo} = persona4;

  console.log(vehiculo);

  const{marca,modelo} = vehiculo;
  console.log(marca);
  console.log(modelo);

  console.log(persona.nombre);
  console.log(persona.apellido);
};