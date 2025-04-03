function impares() {
    let array = []; 
    for(let n = 1; n <= 200; n++){ 
        if(n % 2 == 1){ 
            array.push(n);  
        } 
    }
    alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
}