const express = require("express");
const router = express.Router();
const Jimp = require("jimp");

let length = 8;
/*
    Parameters:
        canvas - offscreen html canvas
        img - offscreen html img
        dataUrl - image data string
*/
router.post("/newImage", (req, res) => {
    let pixData = [];
    let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
    Jimp.read(buffer).then( (image) => {
        for(let i = 0; i < image.bitmap.width; i++){
            for(let j = 0; j < image.bitmap.height; j++){
                pixData.push(Jimp.intToRGBA(image.getPixelColor(i, j)));
            }
        }
        let passwordPool = genPasswordPool(pixData);
        let password = genIdeal(passwordPool, length, image.bitmap.width, image.bitmap.height)
        res.send({
            status: 200,
            password: password
        });
    }).catch(err => {
        res.send({
            status: 500,
            message: "Input is not an image"
        });
    });
});

router.post("/updateLength", (req, res) => {
    length = req.body.length != null ? req.body.length : 8;
    res.send(length);
});

const genPasswordPool = (pixData) => {
    const GOLDEN_NUMBER = 17.09;
    let bound = 80;

    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "(", ")", ".", "?", "[", "]", "-", "`", "~", ";", ":", "@", "#", "$", "%",
                 "^", "&", "*", "+", "="];
    let hash = [];
    let passwordPool = [];

    for(let pos = 0; pos <= bound + 1; pos++){
        if(pos > bound){
            chars.splice(Math.floor(Math.random() * bound), 1);
            bound--;
            pos = 0;
        }
        hash.push(chars[pos]);
    }

    for(let i = 0; i < pixData.length; i++){
        pixVal = ((pixData[i].r / GOLDEN_NUMBER) * (pixData[i].b / GOLDEN_NUMBER) * (pixData[i].g / GOLDEN_NUMBER));
        passwordPool.push(hash[Math.trunc(pixVal)]);
    }
    return passwordPool;
}

const genPassword = (passwordPool, length, imgWidth, imgHeight) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        let x = Math.floor(Math.random() * imgWidth);
        let y = Math.floor(Math.random() * imgHeight);
        password += passwordPool[x * y];
    }
    return password;
}

const genIdeal = (passwordPool, length, imgWidth, imgHeight) => {
    let idealScore = 0;
    let ideal = "";
    for(let i = 0; i < 1000; i++){
        let score = 10;
        let numSymbols = 0;
        let repeats = 0;
        let password = genPassword(passwordPool, length, imgWidth, imgHeight);
        for(let k = 0; k < password.length; k++){
            const char = password.charAt(k);
            if (char == "!" || char == "(" || char == ")" || char == "." || char == "?" || char == "[" 
             || char == "]" || char == "-" || char == "`" || char == "~" || char == ";" || char == ":" 
             || char == "@" || char == "#" || char == "$" || char == "%" || char == "^" || char == "&" 
             || char == "*" || char == "+" || char ==  "="){
                numSymbols++;
            }
        }
        for(let k = 0; k < password.length; k++){
            if(k != 0 && password.charAt(k) == password.charAt(k - 1)){
                repeats++;
            }
        }
        score += (numSymbols/(password.length - numSymbols)) * (7.5);
        score *= 1 - (repeats * 0.05);
        if(score > idealScore){
            idealScore = score;
            ideal = password;
        }
    }
    return ideal;
}

module.exports = router;