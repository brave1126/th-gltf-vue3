<template>
  <div class="container" ref="thContainer">
    <th-gltf @baipiao="baipiao"></th-gltf>
  </div>
</template>

<script>
import ThGltf from "@/components/ThGltf/index.vue";
import { provide, ref } from "vue";
export default {
  components: { ThGltf },
  setup(props, context) {
    const thContainer = ref(null);
    provide("thContainer", thContainer);
    const baipiao = function(arg) {
      console.log(arg);
    };
    return { thContainer, baipiao };
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
