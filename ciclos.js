// punto 1
var limite = parseInt(document.getElementById("Limite"));
var suma = 0;
for(var i = 1; i <= limite; i++){
    suma += i;
}
document.getElementById("Resultado") = "La suma de los primeros " + Limite + " números naturales es: " + suma;

// punto 2
var nombre = document.getElementById("Nombre");
var cantidadNotas = parseInt(document.getElementById("cantidadNotas"));
var sumaNotas = 0;
for(var i = 1; i <= cantidadNotas; i++){
    var nota = parseFloat(prompt("Ingrese la nota: " + i));
    sumaNotas += nota;
}
var promedio = sumaNotas / cantidadNotas;
var resultado = document.getElementById("Resultado");
if (promedio >= 3){
    resultado = "El estudiante" + nombre + "Aprobado con un promedio de: " + promedio; 
}else{
    resultado = "El estudiante" + nombre + "Reprobado con un promedio de: " + promedio;
}

// punto 3
var numerosInput = document.getElementById("numeros");
var resultado = document.getElementById("resultado");
var suma = 0;
var cantidad = 0;
for (var control = true; control;) {
  var numero = numerosInput;
  if (numero.toUpperCase() === "FIN") {
    control = false;
  } else {
    var numeroEntero = parseInt(numero);
    if (!isNaN(numeroEntero)) {
      suma += numeroEntero;
      cantidad++;
    }
  }
  numerosInput = ""; 
}
resultado = "Cantidad de números ingresados: " + cantidad + ", Suma total: " + suma;

// punto 4
var numero = prompt("Digita un Numero: ");
var rango = 30;
var i = 1;

while (i <= rango) {
  var producto = numero * i;
  console.log(numero + " multiplicado por " + i + " es igual a " + producto);
  i++;
}

// punto 5
var numero = parseInt(document.getElementById("numero"));
var resultado = "";
var multiplicador = 10;

if (numero < 1) {
  resultado = "Por favor, ingrese un número válido mayor que 0.";
} else {
  while (multiplicador >= 1) {
    resultado += multiplicador + " x " + numero + " = " + (numero * multiplicador) + "\n";
    multiplicador--;
  }
}
alert(resultado);

// punto 6
var numero = parseInt(prompt("Ingrese un número: "));
var contador = 1;

while (contador <= 30) {
  document.write(contador + " ");
  contador += numero;
}

// punto 7
var numero = parseInt(prompt("Ingrese un número: "));

while (numero > 0) {
  document.write(numero + " ");
  numero--;
}
