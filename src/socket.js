import { reactive } from "vue";
import { io } from "socket.io-client";

const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});

const URL = 'http://localhost:3000';
export const socket = io(URL);

socket.on('connect', () => {
    console.log('connected to socket');
    state.connected = true;
});


export default state;
