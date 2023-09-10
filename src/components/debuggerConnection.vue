<template lang="pug">
v-card
    v-card-title Controller Connection
    v-card-text
</template>

<script setup>
// import {debounce} from 'lodash';
import { useDeviceStore } from '@/store/device';
const device = useDeviceStore();


</script>

<!-- <style lang="scss">
</style> -->
