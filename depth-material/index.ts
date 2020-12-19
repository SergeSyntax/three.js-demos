import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderer
} from 'three';
import { FaceNormalsHelper } from 'three/examples/jsm/helpers/FaceNormalsHelper.js';

(() => {

  // init
  const scene = new Scene();
  scene.background = new Color(0xffffff);

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  camera.position.z = 5;

  const material = new MeshDepthMaterial();
  const geometry = new BoxGeometry(2, 1, 3);

  const cube = new Mesh(geometry, material);

  cube.position.z = -2;
  cube.position.x = -2;

  const geometryTwo = new SphereGeometry(1, 30, 30);
  const sphere = new Mesh(geometryTwo, material);
  sphere.position.z = 3;
  sphere.position.x = 1;

  scene.add(cube);
  scene.add(sphere);
  const renderer = new WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  let add = 0.02;

  (function mainLoop() {
    renderer.render(scene, camera);
    cube.position.z += add;
    sphere.position.z -= add;

    if (cube.position.z >= 3 || cube.position.z <= -2) add *= -1;

    requestAnimationFrame(mainLoop);
  })();
})();
