function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomBin() {
    let bin = "";
    for(let i = 0; i < 8; i++){
        bin += getRandomInt(0, 2);
    }

    return bin;
}

export default randomBin;