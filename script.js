function decimalToBinary(num) {
  //Write you code here
	if(num === 0){
        return "0"
    }
    let res = "";
    while(num > 0){
        let bin = num % 2;
        res = bin + res;
        num = Math.floor(num / 2);
    }
    return res;
  
}

window.decimalToBinary = decimalToBinary;
