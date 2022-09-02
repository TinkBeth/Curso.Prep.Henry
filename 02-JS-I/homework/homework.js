// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const saludoinformal = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 18;

// Crea una variable booleana:
const aprobaréHenryChallenge= true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: 
  var saludofinal =('nos.vemos');

}
  


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código: var suma=x+y;
  return adición;
  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código: var diferencia =x-y;
  return diferencia;
  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código: var producto =x*y;
  return producto;
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código: var división =x/y;
  return cociente;
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (x===y) {
  return true;
} 
  return false; 

}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (longitudstr1===str2) {
  return true; 
} 
  return false;

}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (num<90) {
  return true;
} 
  return false;
  
}



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (num>50) {
  return true;
}
  else {
  return false;
  }

}
  


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código: 
  var obtenerResto =x%y;
    return resto
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (anynumesPar) { 
    return true;
}  
    return false;  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (anynumesImpar) {
    return true
  }
  return false 
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var Math,pow =(number,2); {
    return potencia
  }
  
  }
    


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var Math,pow =(number,3); {
    return potencia
  }
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var Math,pow =(number,exponent); {
    return potencia
  }
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var Math,round =(number,5); {
    return redondeado
  }
  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var Math,ceil =(num); {
    return redondeado
  }
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var get,Random =(0,1); {
    return Math.random
  }
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (esPositivo =(number>0)); {
    return 'Es positivo'
  } if (esNegativo =(number<0)); {
    return 'Es negativo';     
  } if (numCero =(num===0)); {
    return 'False'
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var let, saludo =add('Queonda')+'!'; {
    return 'Que-onda'+'!'
  }
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var let, nombre =('nombre');
  var let, apellido =('apellido'); {
    return ('nombre'+'apellido')    
  }
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo ='Hola';
  var nombre ='Martin'; {
    return ('Hola,'+nombre)
  }
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var AreaRectangulo =(alto*ancho); {
    return producto
  }
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var PerimetroDelCuadrado =(lado*4); {
    producto
  }

}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areaDelTriangulo =(base*altura); {
  return producto
}

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var EuroaDolar =(1*1.2); {
    return producto
  }
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length>1); {
    return 'Dato incorrecto'
  }
  if (letra==='a'|| letra==='e'|| letra==='i'|| letra==='0'|| letra==='u'); {
    return 'Es vocal'
  } {
    return 'Dato incorrecto'
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
