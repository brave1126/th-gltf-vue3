import * as THREE from "three";
/**
 *
 * @param {String} backgroundColor 背景颜色
 * @param {String} mode 模式
 * @param {Number} dlIntensity 平行光强度
 * @param {Number} hlIntensity 半球光强度
 */
export function createScene(backgroundColor, mode, dlIntensity, hlIntensity) {
  const scene = new THREE.Scene();

  // 设置背景颜色
  scene.background = new THREE.Color(backgroundColor);
  scene.fog = new THREE.Fog(scene.background, 1, 1000);

  // 地面网格
  const grid = new THREE.GridHelper(2000, 40, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add(grid);

  // 添加平行光
  const directionalLight = new THREE.DirectionalLight(0xffffff, dlIntensity); //  添加了一个白色的平行光(颜色,光强)
  directionalLight.position.set(0, 30, 30); //  设置光源位置
  directionalLight.lookAt(new THREE.Vector3());
  scene.add(directionalLight);
  const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);

  // 添加半球光
  const hemisphereLight = new THREE.HemisphereLight(
    0xffffff,
    0xffffff,
    hlIntensity
  );
  hemisphereLight.position.set(0, 30, 0);
  scene.add(hemisphereLight);
  const hemiLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 10);

  if (mode === "dev") {
    scene.add(dirLightHelper);
    scene.add(hemiLightHelper);
  }

  return scene;
}
