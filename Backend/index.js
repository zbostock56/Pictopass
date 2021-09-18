const express = require("express");
const app = express();

app.use("/", require("./routes/router"));

const PORT = 3000
app.listen(3000, () => {
    console.log(`Server Started on port: ${PORT}`);
});