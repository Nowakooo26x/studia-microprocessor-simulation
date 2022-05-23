function validateBin( value ) {
    if(value.length >= 9){
        return true;
    }
    for (const item of value) {
        if(item !== "1" && item !== "0"){
            return true;
        }
    }
    
    return false;
  }
  
  export default validateBin;