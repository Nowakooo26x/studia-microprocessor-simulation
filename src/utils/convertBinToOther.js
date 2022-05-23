function convertBinToOther( bin ){

    let dec, oct, hex;
    console.log(`convertBinToDec bin: ${bin}`)

    if(bin !== ""){
        dec = parseInt(bin, 2) || "0";
        oct = dec.toString(8) || "0"
        hex = dec.toString(16).toUpperCase()
    }

    return {
        bin: bin,
        dec: dec,
        oct: oct,
        hex: hex
    }
}

export default convertBinToOther;

