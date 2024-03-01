<template lang="pug">
v-card(max-width='20vw', elevation="11")
    v-card-title Debug Temp
    v-card-text
        lineGraph(ref='lineGraph', :data='chartData')
    v-card-actions 
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import { socket } from '@/socket';
import lineGraph from '@/components/graphs/line.vue';
import { cloneDeep } from 'lodash';

export default {
    components: {
        lineGraph
    },
    data: () => ({
        newTemp: 0,
        pollCount: 0,
        sensorPollingInterval: null,
        tempLabels: [],
        tempData: []
    }),
    computed: {
        chartData() {
            let seconds = [];
            for (let i = 0; i < this.tempData.length; i++) {
                seconds.push(`${i}`);
            }
            let dataObj = {
                labels: seconds,
                datasets: [
                    {
                        label: 'Temperature History',
                        backgroundColor: '#aaaaaa',
                        data: this.tempData,
                    }
                ]
            }

            return dataObj;
        }
    },
    methods: {
        PWMSend(dc) {
            this.dutyCycle = dc;
            socket.emit('debug-heatPWMOn', dc);
        },
        off() {
            socket.emit('debug-heatPWMOff');
        },
    },
    watch: {
        newTemp(newTemp) {
            this.tempData.push(newTemp);
        }
    },
    mounted() {
        window.tempvm = this;
    },
}



</script>

<!-- <style lang="scss">
</style> -->
