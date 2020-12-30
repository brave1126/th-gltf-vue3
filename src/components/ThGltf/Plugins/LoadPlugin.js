import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 *
 * @param {*} scene 场景
 * @param {*} modelObject 模型信息对象
 * @param {*} context 上下文用于分发事件
 */
export function addModel2Scene(scene, modelObject, context) {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(modelObject.src, gltf => {
    gltf.scene.traverse(function(child) {});
    // 缩放比例
    gltf.scene.scale.set(
      modelObject.scale[0],
      modelObject.scale[1],
      modelObject.scale[2]
    );
    // 位置 (左右,上下，前后)
    gltf.scene.position.set(
      modelObject.position[0],
      modelObject.position[1],
      modelObject.position[2]
    );
    // 欧拉角
    gltf.scene.rotation.set(
      modelObject.rotation[0],
      modelObject.rotation[1],
      modelObject.rotation[2]
    );
    context.emit("thLoad", gltf);
    scene.add(gltf.scene);
  });
}
