/**
 * Created by gcuevas on 12-05-2018.
 */
/*
var int = 10;
var str = "abc";
var bool = true;
var und;

console.log(typeof int);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und);
*/

/*var num1 = 10;
var num2 = 20;
console.log("sum", num1 + num2);
console.log("res", num1 - num2);
console.log("mul", num1 * num2);
console.log("div", num1 / num2);*/

/*
var num = 1;
console.log(num);
var num2 = ++num;
console.log(num2);*/
/*
var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2);
console.log(bool1 !== bool2);
console.log(bool1 !== bool1);
console.log(bool2 === bool2);
*/
/*
var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
*/

/*
var num1 = 10;
var num2 = 20;

console.log(num1 < num2 && num2 > num1);
console.log(num1 < num2 && num2 >= num1);
console.log(num1 > num2 && num2 > num1);
console.log(num1 > num2 && num2 < num1);
*/

/* OR
var num1 = 10;
var num2 = 20;

console.log(num1 < num2 || num2 > num1);
console.log(num1 < num2 || num2 >= num1);
console.log(num1 > num2 || num2 > num1);
console.log(num1 > num2 || num2 < num1);
*/

// Condicionales
var num1 = 10;
var num2 = 20;

//console.log(num1 < num2 ? 'si es verdadero' : 'no es falso');
//console.log(num1 > num2 ? 'si es verdadero' : 'no es falso');

//Sentencia IF
/*
if(num1 < num2 || num1 < num2){
    console.log("se ejecuta")
}
*/
//Sentencia IF/Else
/*
if(num1 < num2 && num1 < num2){
    console.log("se ejecuta")
} else {
    console.log(" no se ejecuta")
}
*/
/*
//Sentencia IF/Else IF

if(num1 < num2 && num1 < num2){
    console.log("se ejecuta");
} else if {num1 < num2 || num1 < num2){
    console.log(" se ejecuta el if else if");
}else{
    console.log("no se ejecuta");
}
*/
//Sentencia Switch
/*
var num1 = 10;
var num2 = 20;

switch (num1 + num2){
    case 10:
        console.log("es igual a 10");
        break;
    case 20:
        console.log("es igual a 20");
        break;
    case 30:
        console.log("es igual a 30");
        break;
    default:
        console.log("es otro valor")
}
*/
//Funciones
/*
function nombreCompleto(nombre,apellido) {
    console.log(nombre + " " + apellido);
}

nombreCompleto("Gonzalo","Cuevas");
*/
//Crear una funcion que devuelva la edad, según la fecha de nacimiento

function edad(anioNac) {
    return 2018 - anioNac;
}

console.log(edad(2010));

if (edad(2010) >= 18){
    console.log("eres mayor de edad");
}else {
       console.log("eres menor de edad");

    }

/*
 if(num1 < num2 && num1 < num2){
 console.log("se ejecuta")
 } else {
 console.log(" no se ejecuta")
 }
 */

