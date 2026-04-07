const ArrayVacio ) = [];

const ArrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumerosPares = [2, 4, 6, 8];

const ArrayBiDimiensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

function suma (a, b) {
  return a + b;
  }
function potenciacion (a, b) {

return a ** b;
  }
function separarPalabras(str) {
  return str.split(" ");
  }

function repetirString(str, num) {
  let StringSumada = "";
  for (let i = 0; i < num; i++) {
    StringSumada += str;
    }
    return stringSumada;
  }

function EsPrimo(num) {
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      return false;
      }
    }
  return true;
  }

function OrdenarArray(arr) {
  return arr.sort(function(a, b) {
    return a - b;
      });
  }

function ObenerPares(arr) {
  return arr.filter((number) => number % 2 === 0);
  }
function PintarArray(arr) {
  let resultado - array[0].toString();

  for (let i = 0; i < array.length; i++) {
  resultado += ", " + array[i].toString()
  }
  return "[" + resultado + "]";
  }

  pintarArray([0, 1, 2]);

function arrayMapi(array, funcion) {
  let arrayFuncion = [];
  for (let i = 0; array.length; i++) {
    arrayFuncion[i] = funcion(array[i]);
    }
  return arrayFuncion;
  }

function eliminarDuplicados(array){
  let NuevoArray = [];
  for (i = 0; array.length; i++) {
    if (!NuevoArray.includes(array[i])) {
      NuevoArray.push(array[i]));
      }
    }
    return NuevoArray;
  }

const  ArrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const HolaMundo = ["Hola" + "mundo."];

const LoGuradoTodo = ["Hola" + "que" + 23 + 42.33 + "tal?"];

const ArraydeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "dirección"],
  ];

function multiplicacion(a,b) {
  return a * b;
  }
function division(a,b) 
  return a / b;
}

function EsPar(num) {
  if (num % 2 == 0) {
    return true;
    } else {
    return false;
    }
  }

function Resta(a,b) {
  return a - b;
  }
arrayFunciones = [suma, resta, multiplicacion];

function OrdenarArray2(arr) {
  return arr.sort(function (a , b) {
    return b - a;
    }),
  }
function OrdenarImpares(arr) {
  return arr.filter((number) => number % 2 !== 0);
  }

function SumarArray(arr) {
  let SumaTotal = 0;
  for (i = 0; i < arr.length; i++) {
    Sumatoal += arr[i]
    }
    return SumaTotal;
  }

function MultiplicacionArray(arr) {
  let MultiplicacionTotal = 1;
  for (i = 0; i < arr.length; i++) {
    MultipicacionTotal *= arr[i]
    }
    return MultiplicacionTotal;
  }
