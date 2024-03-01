import express from "express";
import homepageRouter from './homepageRouter.js';
import { Server } from 'socket.io';
import MAX31865 from "max31865";
import { Gpio } from "pigpio";

const port = process.env.PORT || 3000;

const app = express(); 

const pinLight = 17;
const pinDrum = 27;
const pinHeat = 22;
const pinHeatPWM = 0;

//Init pins
const Light = new Gpio(pinLight, {mode: Gpio.OUTPUT});
const Drum = new Gpio(pinDrum, {mode: Gpio.OUTPUT});
const Heat = new Gpio(pinHeat, {mode: Gpio.OUTPUT});
const HeatPWM = new Gpio(pinHeatPWM, {mode: Gpio.OUTPUT});


//Init temp probe
let tempPoll;
const tempPollInterval = 1000;
let tempLastValue = 0;
const tempProbe = new MAX31865(0,0, {
    rtdNominal: 100,
    refResistor: 430,
    wires: 3,
}) // /dev/spidev0.0
await tempProbe.init();


app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.use(homepageRouter);

const serverInstance = app.listen(port, () => {
    console.log("Server listening on port", port);
});

const io = new Server(serverInstance, {
    cors: {
        origin: '*',
        methods: ['get', 'post']
    }
});

function readTempContinuously() {
    tempPoll = setInterval(() => {
        try {
            tempProbe.getTemperature()
            .then((tempC) => {
                const tempF = ((tempC * 9.0/5.0) + 32).toFixed(1);
                console.log(tempF);
                io.emit('temperature-updated', tempF);
            });
        } catch(e) {
            console.error(e.message);
        }
      }, tempPollInterval); // Adjust the polling interval as needed
}

io.on('connection', (socket) => {
    console.log('Browser connected');
    //Start temperature reading
    readTempContinuously();

    socket.on('disconnect', () => {
        console.log('Browser disconnected');
        clearInterval(tempPoll);
    });


    // Debugger Listeners
    socket.on('debug-lightOff', () => {
        console.warn('debug-lightOff hit');
        Light.digitalWrite(0);
    });

    socket.on('debug-lightOn', () => {
        console.warn('debug-lightOn hit');
        Light.digitalWrite(1);
    });

    socket.on('debug-drumOff', () => {
        Drum.digitalWrite(0);
    });

    socket.on('debug-drumOn', () => {
        Drum.digitalWrite(1);
    });
    socket.on('debug-heatOff', () => {
        Heat.digitalWrite(0);
    });

    socket.on('debug-heatOn', () => {
        Heat.digitalWrite(1);
    });

    socket.on('debug-heatPWMOff', () => {
        HeatPWM.digitalWrite(0);
    });

    socket.on('debug-heatPWMOn', (dutyCycle) => {
        HeatPWM.pwmWrite(dutyCycle);
        console.log(`Wrote ${dutyCycle} to HeatPWM`);
        // HeatPWM.digitalWrite(1);
    });
});
  