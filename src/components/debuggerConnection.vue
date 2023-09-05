<template lang="pug">
v-card
    v-card-title Controller Connection
    v-card-text
        h1.ma-4 {{ device.count }}
        v-btn(@click='increment()') Increment
        v-btn(@click='reset()') Reset
</template>

<script setup>
// import {debounce} from 'lodash';
import { useDeviceStore } from '@/store/device';
const device = useDeviceStore();

function increment(){
    device.increment(2);
}

function reset() {
    device.reset();
}

</script>

<!-- <style lang="scss">
</style> -->
