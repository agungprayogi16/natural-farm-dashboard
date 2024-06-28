<template>
  <div class=" flex-col justify-center items-center shadow-md rounded w-[700px] h-full bg-white  text-white">
    <div class="h-full text-white">
      <LineChartComponent :data="chartData" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default defineComponent({
  components: {
    LineChartComponent: Line,

  },
  data() {
    return {
      chartData: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [
          {
            label: ' Data',
            backgroundColor: '#f87979',
            data: [251437000, 469456000, 754631000, 444912000, 159987000, 387547000],
          },
        ],
      },
    };
  },
});
</script>

<style scoped>







  
  


.line-chart {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
