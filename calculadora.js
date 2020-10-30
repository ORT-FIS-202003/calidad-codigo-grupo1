window.addEventListener("load",inicio); //cuando carga la página se crea la calculadora;
    
function inicio(){
    document.getElementById("button").addEventListener("click", realizarOperacion)
}

function getCheckedRadioValue(name) {
    let elements = document.getElementsByName(name);
    let len=elements.length
    for (let i=0, ; i<len; ++i){
        if (elements[i].checked){
            return elements[i].value;
        } 
    }
}


function realizarOperacion(){
    let calculadora = new Calculadora();
    let func = getCheckedRadioValue("func"); //lee la selección de operación
    let x = parseInt(document.getElementById("textIdIzq").value) //lee los valores a operar
    let y = parseInt(document.getElementById("textIdDer").value)
    let out = 0
    switch (func){
        case "multiplicación":
            out = calculadora.multiplicar(x,y) 
            break;
        case "suma":
            out = calculadora.sumar(x,y)
            break;
        case "resta":
            out = calculadora.restar(x,y)
            break;
        case "division":
            out = calculadora.dividir(x,y)
            break;
    }

    document.getElementById("imprimirResultado").innerHTML = out;
    document.getElementById("imprimirResultado").classList.add('animate__animated', 'animate__bounceOut');


    
}