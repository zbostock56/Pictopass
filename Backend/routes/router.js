const express = require("express");
const router = express.Router();

/*
    Parameters:
        canvas - offscreen html canvas
        img - offscreen html img
        dataUrl - image data string
*/
router.post("/newImage", (req, res) => {
    let canvas = req.body.canvas;
    let image = req.body.image;
    const imgData = req.body.dataUrl;
    let pixData = []

    image.src = imgData;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.addEventListener("load", () => {
        const imageData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < imageData.length / 4; i++){
            pixData.push([0, 0, 0, 0]);
        }
        for(let j = 0; j < pixData.length; j++){
            for(let k = 0; k < 4; k++){
                pixData[j][k] = imageData[((4 * j) + k)];
            }
        }
    });
    res.send(pixData);
});

router.post("/test", (req, res) => {
    res.send(req.body.canvas);
});

router.post("/hello", (req, res) => {
    res.send(`Hello: ${req.body.name}`);
});

module.exports = router;