<template lang="pug">
v-card
    v-card-title Graph
    v-card-text
        Bar(id='my-chart-id', :options='chartOptions', :data='chartData')
</template>



<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['January', 'February', 'March'],
    datasets: [ { data: [40, 20, 12] } ]
}

const chartOptions = {
    responsive: true,
}

</script>
    
<!-- <style lang="scss">
</style> -->
    