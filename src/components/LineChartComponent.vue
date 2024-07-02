<template>
  <div class="flex flex-col items-center w-full min-h-screen p-6">
    <div class="w-full max-w-7xl rounded-2xl p-8 space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataCard title="Total Sales" :value="totalSales" />
        <DataCard title="New Users" :value="newUsers" />
        <DataCard title="Revenue" :value="revenue" />
        <DataCard title="Visits" :value="visits" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <DoughnutChartComponent :data="doughnutChartData" class="h-96 w-full"/>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <BarChartComponent :data="barChartData" class="h-96 w-full"/>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 h-full">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <LineChartComponent :data="lineChartData" class="h-96 w-full"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Line, Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, PointElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import DataCard from '@/components/DataCard.vue';
import DoughnutChartComponent from '@/components/DoughnutChartComponent.vue';

import data from '../static/data.json';

ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, PointElement, CategoryScale, LinearScale, ArcElement);

interface ChartData {
  labels: string[];
  datasets: { label: string; backgroundColor: string | string[]; data: number[] }[];
}

export default defineComponent({
  components: {
    LineChartComponent: Line,
    BarChartComponent: Bar,
    DataCard,
    DoughnutChartComponent,
  },
  data() {
    return {
      totalSales: '',
      newUsers: '4', // Example data as string
      revenue: '', // Calculated from salesData
      visits: '10K', // Example data
      lineChartData: {
        labels: [] as string[],
        datasets: [
          {
            label: 'Total Sales',
            backgroundColor: '#f87979',
            data: [] as number[],
          },
        ],
      } as ChartData,
      barChartData: {
        labels: [] as string[],
        datasets: [
          {
            label: 'Payment Methods',
            backgroundColor: '#4caf50',
            data: [] as number[],
          },
        ],
      } as ChartData,
      doughnutChartData: {
        labels: [] as string[],
        datasets: [
          {
            label: 'Payment Methods',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            data: [] as number[],
          },
        ],
      } as ChartData,
    };
  },
  created() {
    this.processSalesData();
    this.processPaymentMethods();
  },
  methods: {
    processSalesData() {
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'];
      const totalSales = data.salesData.map(item => item.price).reduce((acc, price) => acc + price, 0);
      const revenue = totalSales.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

      this.totalSales = totalSales.toString(); // Ensure it's a string
      this.revenue = revenue;

      this.lineChartData = {
        labels: months,
        datasets: [
          {
            label: 'Total Sales',
            backgroundColor: '#f87979',
            data: [251437000, 469456000, 754631000, 444912000, 159987000, 387547000],
          },
        ],
      };
    },
    processPaymentMethods() {
      const methodCounts = data.paymentMethods.map(method => method.num_index); // Example data
      const paymentMethods = data.paymentMethods.map(method => method.name);

      this.barChartData = {
        labels: paymentMethods,
        datasets: [
          {
            label: 'Payment Methods',
            backgroundColor: '#4caf50',
            data: methodCounts,
          },
        ],
      };

      this.doughnutChartData = {
        labels: paymentMethods,
        datasets: [
          {
            label: 'Payment Methods',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            data: methodCounts,
          },
        ],
      };
    },
  },
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>