function impares() {
    let array = []; // un array para guardad los numero impares
    for(let n = 1; n <= 200; n++){ // crea una var con valor 1, la condicion es que n sea menor o igual a num y cada que se completa una ves el bucle se suma uno mas al num
        if(n % 2 == 1){ // es una condicion para filtrar lus numeros impares
            array.push(n);  // guarda los numeros un el array
        } 
    }
    alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
}