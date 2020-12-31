<template>
  <div class="container">
    <th-gltf @thLoad="thLoadHandler"></th-gltf>
  </div>
</template>

<script>
import ThGltf from "@/components/ThGltf/index.vue";
export default {
  components: { ThGltf },
  setup(props, context) {
    let thLoadHandler = model => {
      console.log("模型加载完成");
    };
    return { thLoadHandler };
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
