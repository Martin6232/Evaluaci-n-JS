// lo que hace esta funcion es imprimir los numeros impares
function impares() {
    let array = []; 
    for(let n = 1; n <= 200; n++){ //genera un bucle que llega hasta 200
        if(n % 2 == 1){ 
            array.push(n);  
        } 
    }
    alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
} 