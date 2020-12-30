<template>
  <div class="th-container" ref="container">
    {{ count }}
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, onDeactivated } from "vue";
import { createScene } from "./Plugins/ScenePlugin";
import { createRenderer } from "./Plugins/RendererPlugin";
import { createCamera, createCameraControl } from "./Plugins/CameraPlugin";
import { addModel2Scene } from "./Plugins/LoadPlugin";
export default {
  setup(props, context) {
    let modelObject = {
      src: "/crash/scene.gltf",
      scale: [3, 3, 3],
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    };
    const container = ref(null);
    const scene = createScene("#e0e0e0", "prod", 0.6, 0.8);
    let renderer = null;
    let camera = null;
    let animateId = null;
    const animate = () => {
      animateId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    window.onresize = () => {
      let { offsetWidth, offsetHeight } = container.value;
      console.log(offsetWidth, offsetHeight);
      // 重新设置渲染器尺寸
      renderer.setSize(offsetWidth, offsetHeight);
      // 重新设置相机长宽度比
      camera.aspect = offsetWidth / offsetHeight;
      // 刷新（矩阵）
      camera.updateProjectionMatrix();
    };
    onMounted(() => {
      renderer = createRenderer(container.value);
      camera = createCamera(container.value);
      createCameraControl(camera, renderer.domElement);
      container.value.appendChild(renderer.domElement);
      animate();
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
