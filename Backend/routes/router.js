const express = require("express");
const router = express.Router();
const Jimp = require("jimp");

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
        res.send(pixData);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;