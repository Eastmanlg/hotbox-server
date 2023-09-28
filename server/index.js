import express from "express";
import homepageRouter from './homepageRouter.js';
import { Server } from 'socket.io';
import cors from 'cors';
import Controller from './controller.js';

const port = process.env.PORT || 3000;

const app = express(); 

// const controller = new Controller('COM12');


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
io.on('connection', (socket) => {
    console.log('Browser connected');
    socket.on('disconnect', () => {
        console.log('Browser disconnected');
    });


    //Socket listeners
    socket.on('blink', (ms) => {
        // controller.blink(ms);
        console.log('blink received');
    });

    socket.on('off', () => {
        // controller.off();
        console.log('off received');
    });
    socket.on('on', () => {
        // controller.on();
        console.log('on received');
    });
});
  