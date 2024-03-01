<template lang="pug">
v-card
    v-card-title IO Checks
    v-card-text
        v-container(fluid)
            v-row 
                v-col
                    debugTemp
            v-row   
                v-col
                    debugLight
                v-col
                    debugDrum
                v-col 
                    debugHeat
                
            v-row
                v-col(cols='6')
                    debugHeatPWM
    v-card-actions 
</template>

<script setup>
import { socket } from '@/socket';
import debugLight from './debug/debugLight.vue';
import debugDrum from './debug/debugDrum.vue';
import debugHeat from './debug/debugHeat.vue';
import debugHeatPWM from './debug/debugHeatPWM.vue';
import debugTemp from './debug/debugTemp.vue';


</script>

<!-- <style lang="scss">
</style> -->
