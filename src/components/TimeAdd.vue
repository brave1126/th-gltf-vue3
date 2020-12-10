<template>
  <div>
    {{ time }}/{{ dbTime }}
    <a-button type="primary" @click="timeAdd">
      Primary
    </a-button>
  </div>
</template>

<script>
// import { ref, watch, onMounted, computed } from "vue";
import times from "./time";
export default {
  setup() {
    let { time, dbTime, timeAdd } = times();
    return { time, dbTime, timeAdd };
  }
};
</script>

<style lang="scss" scoped></style>
