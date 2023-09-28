<template lang="pug">
v-card
    v-card-title Controller Connection
    v-card-text
        span(v-if='ready') Ready 
        span(v-else) Not Ready 
    v-card-actions 
        v-btn(@click='on()') On   
        v-btn(@click='blink()') Blink
        v-btn(@click='off()') Off
</template>

<script setup>
import { socket } from '@/socket';

let ready = false;
let hotbox;

function on() {
    socket.emit('on');
}
function blink() {
    socket.emit('blink', 1000);
}

function off() {
    socket.emit('off')
}

</script>

<!-- <style lang="scss">
</style> -->
