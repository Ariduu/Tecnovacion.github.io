
/*function mostrarMensaje(){
    alert('/♪');
}

var nombre = "Jose";
var edad = "20";
var claro = "123123";


//ejercicio 1
document.getElementById('ejercicio').innerHTML="Persona adulta";

var _numero1 = 10;
var $numero2 = 8;
var $resultado = _numero1 + $numero2;


function mostrarMensaje(){

    if($resultado >= 16){
            alert(" La Persona es adulta" );   
    }

    else{
            alert("persona menor" );
    }
}
*/


//ejercicio2

/*
var text = 'hola mundo'
var caract = 9

document.getElementById('texto32').innerHTML="son" + " " + caract + " " + 'caracteres ';

function mostrarMensaje(){
    if(caract = 9)
    alert('los caracteres son 9')
    else{
        alert(false)
    } 

}

*/

/*function nombre123()

{
    document.getElementById('nombre2').innerHTML="TECNOVACIONNNNNN";

}   



var n1 = 8
var n2 = 10

var re = n1 - n2 
var re2 = n1 + n2*/

/*function mostrarMensaje(){
    if(re = 2) 
        alert('la resta es ' + re)
    else(re2 = 18)
        alert("la suma es " + re2)
  
}
*/



/*  1. 
- definir variable tipo numero = 18
- condicional si en caso es mayor a 16, debe mostrar un mensaje que es una persona adulta
*/
/*
document.getElementById('ejercicio').innerHTML="Persona adulta";

var _numero1 = 10;
var $numero2 = 8;
var $resultado = _numero1 + $numero2;


function mostrarMensaje(){

    if($resultado >= 16){
            alert(" La Persona es adulta" );   
    }

    else{
            alert("persona menor" );
    }
}*/

/*
2.
- definir una varaible tipo texto
- condicional si la var tipo texto tiene mas de 20 caracteres debe mostrar mensaje "cant caracteres" */

/*mostrar cant num
let nmero = parseInt(prompt("introduzca un numero"));
let contador = 0;
while(nmero >= 1){
        contador = contador +1;
        nmero = nmero / 10
}
document.write("el texto tiene" + contador + " caracteres")

*/



/*
3.
- crear un boton (input)
- al hacer clic en el boton debe llamar a una fución 1*/





/*
4. 
- definir variable tipo dni. Ejm: 43726263
- mostrar un mensaje donde me indique el numero mayor
- indicar si hay numeros repetidos
*/
/*
var dni = [7,1,2,5,4,3,8,4]

function mayormenor(){
    if(7 >= 1,2,5,4,3,8)
    alert("el numero mayor es " )
    else(20 <= 1,2,5,4,3,8)
    alert("el numero es menor que")


}

*/


/*
5.
- ingresar don numeros a una caja texto. 10 y 2
- botones: suma resta multiplicación división (+) (-) (*) (/)
- mostrar suma resta multiplicación división 12 8 20 5 (debe ser en la misma página)
*/
/*
function pintar(color){
    document.getElementById('cuadrado').style.backgroundColor = color;

}

/*
var numer1 = 10
var numer2 = 2
var resul3 = numer1 + numer2
function suma()

{
    document.getElementById('suma').innerHTML=resul3;

}   

var numer1 = 10
var numer2 = 2
var resul4 = numer1 - numer2
function resta()

{
    document.getElementById('resta').innerHTML=resul4;

}   



var numer1 = 10
var numer2 = 2
var resul5 = numer1 * numer2
function multiplicacion()

{
    document.getElementById('multiplicacion').innerHTML=resul5;

}   


var numer1 = 10
var numer2 = 2
var resul6 = numer1 / numer2
function division()

{
    document.getElementById('division').innerHTML=resul6;

}   

*/

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'),{
        slidesToShow: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.atras',
            next: '.siguiente',
        }
    });

});



 /*
btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})


setInterval(function(){
    Next();

},5000);
*/






















