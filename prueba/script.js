function impares() {
    let num = 100;// crea una variable con un valor de 100
    let array = [];// un array para guardad los numero impares
    for(let n = 1; n <= num; n++){// crea una var con valor 1 y la condicion es que 
        if(n % 2 == 1){
            array.push(n);
        } else if(n >= num){
            alert(`Los impares del numero 100 son:\n ${array.join(" - ")}`);
        }
    }
}