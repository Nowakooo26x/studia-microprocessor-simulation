function changeShortBinToBin ( shortBin ){

    let bin = ""

    if(shortBin.length < 9) {
        let addStr = "";
        for(let i = 0; i < 8 - shortBin.length; i++ ){
          addStr += "0";
        }

        bin = addStr + shortBin;
    }

    return bin;
}

export default changeShortBinToBin;