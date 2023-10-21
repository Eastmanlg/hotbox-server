<template lang="pug">
v-card(elevation="11")
    v-card-title Debug Heat PWM
    v-card-text
        v-container()
            v-row(dense)
                v-col(cols='6')
                    v-btn(@click="off()", prepend-icon='mdi-lightbulb-off', variant="text") Off
                v-col(cols='6')
                    v-slider(v-model="dutyCycle", :min='0', :max='255', :step='1')
                    v-btn(@click="PWMSend(dutyCycle)", prepend-icon='mdi-lightbulb-on', color="secondary", variant="text") Send
    v-card-actions 
</template>

<script>
import { socket } from '@/socket';
import { ref } from 'vue';


let dutyCycle = ref(0);

function PWMSend(dc) {
    dutyCycle = dc;
    socket.emit('debug-heatPWMOn', dc);
}

function off() {
    socket.emit('debug-heatPWMOff');
}
</script>

<!-- <style lang="scss">
</style> -->
