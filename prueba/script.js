function impares() {
    let array = []; // un array para guardad los numero impares
    for(let n = 1; n <= 200; n++){ // crea una var con valor 1, la condicion es que n sea menor o igual a 200 proque la mitad de los numeros son par y la otra impar, cada que se completa una ves el bucle se suma uno mas al n
        if(n % 2 == 1){ // es una condicion para filtrar lus numeros impares
            array.push(n);  // con .push los numeros filtrados se guardaran en el array pt
        } 
    }
    alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
}