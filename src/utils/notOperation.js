function notOperation ( bin ){
    let newBin = ""
    for(let i = 0; i < bin.length; i++){
        if(bin[i] === "1"){
            newBin += "0"
        }else{
            newBin += "1"
        }
    }

    return `${newBin}`
}

export default notOperation;