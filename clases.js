/*Define Clase Calculadora */
class Calculadora{
	constructor(){
    }
    sumar(x, y){
        return x+y;
    }

    restar(x, y){
        return x-y;
    }

    multiplicar(x, y){
        return x*y;
    }

    dividir(x, y){
        if(y != 0)
        return parseFloat(x)/y;
    }
}