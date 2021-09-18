const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/router"));

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);
});