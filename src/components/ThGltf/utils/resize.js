/**
 *
 * @param {*} container 容器元素
 * @param {*} renderer 渲染器
 * @param {*} camera  相机
 */
export function windowResizeHandler(container, renderer, camera) {
  window.onresize = () => {
    let { offsetWidth, offsetHeight } = container;
    console.log(offsetWidth, offsetHeight);
    // 重新设置渲染器尺寸
    renderer.setSize(offsetWidth, offsetHeight);
    // 重新设置相机长宽度比
    camera.aspect = offsetWidth / offsetHeight;
    // 刷新（矩阵）
    camera.updateProjectionMatrix();
  };
}
