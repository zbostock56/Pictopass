const express = require("express");
const router = express.Router();

/*
    Parameters:
        canvas - offscreen html canvas
        img - offscreen html img
        dataUrl - image data string
*/
router.post("/newFile", (req, res) => {
    let canvas = req.body.canvas;
    let image = req.body.image;
    const imgData = req.body.dataUrl;

    image.src = imgData;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.addEventListener("load", () => {
        //Generate Pixel data
    });
});

router.post("/test", (req, res) => {
    res.send(req.body.canvas);
});

module.exports = router;