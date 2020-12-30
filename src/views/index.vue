<template>
  <div class="container">
    <th-gltf></th-gltf>
  </div>
</template>

<script>
import ThGltf from "@/components/ThGltf/index.vue";
export default {
  components: { ThGltf },
  setup(props, context) {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px black solid;
}
</style>
