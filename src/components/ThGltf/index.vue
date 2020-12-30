<template>
  <div class="th-container" ref="container">
    {{ count }}
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { createScene } from "./Plugins/ScenePlugin";
import { createRenderer } from "./Plugins/RendererPlugin";
import { createCamera, createCameraControl } from "./Plugins/CameraPlugin";
export default {
  setup(props, context) {
    // 组件容器
    const container = ref(null);
    const scene = createScene("#e0e0e0", "prod", 0.6, 0.8);
    let renderer = null;
    let camera = null;
    // eslint-disable-next-line no-unused-vars
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
