<template>
  <div>
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueConstructor } from "vue/types/umd";
// import Chart from "chart.js/auto";
import { MyVueRefs } from './types/index';

export default (
  Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>
).extend({
  mounted() {
    // const canvasElement = document.getElementById(
    //   "myChart"
    // ) as HTMLCanvasElement;
    const canvasElement = this.$refs.myChart;
    const ctx = canvasElement.getContext("2d");

    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    // null 타입 가드
    if (!ctx) {
      return;
    }
    const myChart = new this.$_Chart(ctx, config);
  },
});
</script>

<style scoped></style>
