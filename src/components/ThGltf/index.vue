<template>
  <div class="th-container" ref="container">
    {{ count }}
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, onDeactivated } from "vue";
import { createScene } from "./plugins/ScenePlugin";
import { createRenderer } from "./plugins/RendererPlugin";
import { createCamera, createCameraControl } from "./plugins/CameraPlugin";
import { addModel2Scene } from "./plugins/LoadPlugin";
import { windowResizeHandler } from "./utils/resize";
export default {
  props: {
    modelObject: {
      type: Object,
      required: true
    },
    backgroundColor: {
      type: String,
      default: "#e0e0e0"
    },
    mode: {
      type: String,
      default: "prod"
    },
    // 平行光光强
    dlIntensity: {
      type: Number,
      default: 0.6
    },
    // 半球光光强
    hlIntensity: {
      type: Number,
      default: 0.8
    }
  },
  setup(props, context) {
    const container = ref(null);
    let scene = null;
    let renderer = null;
    let camera = null;
    let animateId = null;
    const animate = () => {
      animateId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    onMounted(() => {
      scene = createScene(
        props.backgroundColor,
        props.mode,
        props.dlIntensity,
        props.hlIntensity
      );
      renderer = createRenderer(container.value);
      camera = createCamera(container.value);
      createCameraControl(camera, renderer.domElement);
      container.value.appendChild(renderer.domElement);
      animate();
      windowResizeHandler(container.value, renderer, camera);
      addModel2Scene(scene, props.modelObject, context);
    });
    onBeforeUnmount(() => {
      cancelAnimationFrame(animateId);
    });
    onDeactivated(() => {
      cancelAnimationFrame(animateId);
    });
    return { container };
  }
};
</script>

<style lang="scss" scoped>
.th-container {
  width: 100%;
  height: 100%;
}
</style>
