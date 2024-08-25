const express = require("express");
const SerialPort = require("serialport");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json()); 

// const port = new SerialPort('COM3', { baudRate: 9600 });
// port.on('error', (err) => {
//     console.error('Error: ', err.message);
//   });

app.post("/led/:state", (req, res) => {
    const state = req.params.state;

    if (state === 'on') {
        port.write('1'); 
        res.send({ status: "success", message: "LED turned ON" });
    } else if (state === 'off') {
        port.write('0'); 
        res.send({ status: "success", message: "LED turned OFF" });
    } else {
        res.status(400).send({ status: "error", message: "Invalid state" });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
