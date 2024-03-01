<template lang="pug">
Line(id='lineGraph', :options='options', :data='data')
</template>
    
    
<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

export default {
    name: 'lineGraph',
    components: { Line },
    props: {
        options: {
            type: Object,
            default: () => {
                return {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            }
        },
        data: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
        }
    }
}
</script>
        
<!-- <style lang="scss">
</style> -->
    