<template>
  <div class="th-container" ref="container">
    {{ count }}
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup(props, context) {
    // 组件容器
    const container = ref(null);
    context.emit("baipiao", "事件");
    window.onresize = () => {
      let { offsetWidth, offsetHeight } = container.value;
      console.log(offsetWidth, offsetHeight);
    };
    onMounted(() => {});
    return { container };
  }
};
</script>

<style lang="scss" scoped>
.th-container {
  width: 100%;
  height: 100%;
  background-color: #42b983;
}
</style>
