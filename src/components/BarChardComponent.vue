<template>
  <div>
    <bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface ChartData {
  labels: string[];
  datasets: { label: string; backgroundColor: string | string[]; data: number[] }[];
}

export default defineComponent({
  name: 'BarChartComponent',
  components: {
    Bar,
  },
  props: {
    data: {
      type: Object as PropType<ChartData>,
      required: true,
    },
  },
  computed: {
    chartData(): ChartData {
      return this.data;
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
      };
    },
  },
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
