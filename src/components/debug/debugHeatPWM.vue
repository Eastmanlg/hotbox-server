<template lang="pug">
v-card(elevation="11")
    v-card-title Debug Heat PWM
    v-card-text
        v-container()
            v-row(dense)
                v-col(cols='6')
                    v-btn(@click="off()", prepend-icon='mdi-lightbulb-off', variant="text") Off
                v-col(cols='6')
                    v-slider(v-model='dutyCycle', min='0', max='255', step='1', thumb-label)
                    span {{ dutyCycle }}
    v-card-actions 
                    v-btn(@click="PWMSend(dutyCycle)", prepend-icon='mdi-lightbulb-on', color="secondary", variant="text") Send
</template>

<script>
import { socket } from '@/socket';


export default {
    data: () => ({
        dutyCycle: 0,
    }),
    computed: {

    },
    methods: {
        PWMSend(dc) {
            this.dutyCycle = dc;
            socket.emit('debug-heatPWMOn', dc);
        },
        off() {
            socket.emit('debug-heatPWMOff');
        }
    }

}
</script>

<!-- <style lang="scss">
</style> -->
