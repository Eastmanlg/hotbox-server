<template lang="pug">
v-card(max-width='20vw', elevation="11")
    v-card-title Debug Temp
    v-card-text
        v-container()
            v-row(dense)
                v-col 
                    p {{temp}} F
    v-card-actions 
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { socket } from '@/socket';

let temp = ref(-1);
let sensorPollingInterval;


onMounted(() => {
    sensorPollingInterval = setInterval(pollSensor, 1000);
});
onUnmounted(() => {
    clearInterval(this.sensorPollingInterval);
});

async function pollSensor() {
      await socket.emit('debug-getTemp');
}

socket.on('debug-updateTemp', (newTemp) => {
    temp.value = newTemp;
});

</script>

<!-- <style lang="scss">
</style> -->
