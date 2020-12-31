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
  setup(props, context) {
    let modelObject = {
      src: "/crash/scene.gltf",
      scale: [3, 3, 3],
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    };
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
      scene = createScene("#e0e0e0", "prod", 0.6, 0.8);
      renderer = createRenderer(container.value);
      camera = createCamera(container.value);
      createCameraControl(camera, renderer.domElement);
      container.value.appendChild(renderer.domElement);
      animate();
      windowResizeHandler(container.value, renderer, camera);
      addModel2Scene(scene, modelObject, context);
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
