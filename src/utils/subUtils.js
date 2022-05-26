function subUtils(valueBin1, valueBin2) {
    let valueDec1 = parseInt(valueBin1, 2)
    let valueDec2 = parseInt(valueBin2, 2)

    let sub = valueDec1 - valueDec2;

    console.log(`${valueDec1} - ${valueDec2} = ${sub}`)

    sub = sub>0? sub : 0;

    let subBin = Number(sub).toString(2)

    return subBin;
}

export default subUtils;