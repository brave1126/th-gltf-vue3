<template>
  <div class="container">
    <th-gltf
      @thLoad="thLoadHandler"
      :model-object="modelObject"
      :mode="mode"
    ></th-gltf>
  </div>
</template>

<script>
import ThGltf from "@/components/ThGltf/index.vue";
export default {
  components: { ThGltf },
  setup(props, context) {
    let modelObject = {
      src: "/crash/scene.gltf",
      scale: [3, 3, 3],
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    };
    let mode = "dev";
    let thLoadHandler = model => {
      console.log("模型加载完成");
    };
    return { thLoadHandler, modelObject, mode };
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
