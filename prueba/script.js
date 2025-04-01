function impares() {
    let num = 100;
    let array = [];
    for(let n = 1; n <= num; n++){
        if(n % 2 == 1){
            array.push(n);
        } else if(n >= num){
            alert(`Los impares del numero 100 son:\n ${array.join(" - ")}`);
        }
    }
}