<template lang="pug">
v-card(max-width='20vw', elevation="11")
    v-card-title Debug Light
    v-card-text
        v-container()
            v-row(dense)
                v-col(cols='6')
                    v-btn(@click="on()", prepend-icon='mdi-lightbulb-off', variant="text") Off
                v-col(cols='6')
                    v-btn(@click="off()", prepend-icon='mdi-lightbulb-on', color="secondary", variant="text") On
    v-card-actions 
</template>

<script setup>
import { socket } from '@/socket';

function on() {
    socket.emit('debug-lightOn');
}

function off() {
    socket.emit('debug-lightOff');
}
</script>

<!-- <style lang="scss">
</style> -->
