<template lang="pug">
v-container.fill-height
    v-responsive.align-center.text-center.fill-height
        v-row.my-2
            v-col
                debuggerConnection
        //- v-row.my-2
        //-     v-col 
        //-         debuggerGraph

</template>

<script setup>
import debuggerConnection from '@/components/debuggerConnection.vue';
import debuggerGraph from '@/components/debuggerGraph.vue';

</script>

<!-- <style lang="scss">

</style> -->
