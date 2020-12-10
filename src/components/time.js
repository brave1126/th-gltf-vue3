import { ref, watch, onMounted, computed } from "vue";

export default function times() {
  const time = ref(0);
  function timeAdd() {
    time.value = time.value + 1;
  }
  const dbTime = computed(() => {
    return time.value * 2;
  });
  watch(time, (nVal, oVal) => {
    console.log(nVal + " " + oVal);
  });
  onMounted(() => {
    console.log("页面挂载完");
  });
  return { time, dbTime, timeAdd };
}
