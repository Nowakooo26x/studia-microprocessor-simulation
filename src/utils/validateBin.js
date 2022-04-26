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

  /*
  let result = true;
    if(value.length == 0){
        result = false
    }
    else if(value.length <= 8 ){
        for (const item of value) {
            if(item == "1" || item == "0"){
                result = false;
            }
        }
        return result;
    }else{
        return result = true;
    }*/