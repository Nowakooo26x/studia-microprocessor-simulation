function addUtils(valueBin1, valueBin2) {
    let valueDec1 = parseInt(valueBin1, 2)
    let valueDec2 = parseInt(valueBin2, 2)
    
    let sum = valueDec1 + valueDec2;

    sum = sum<=255? sum : 255;

    let sumBin = Number(sum).toString(2)

    return sumBin;
}

export default addUtils;