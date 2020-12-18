import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  TorusGeometry,
  WebGLRenderer
} from 'three';
import { FaceNormalsHelper } from 'three/examples/jsm/helpers/FaceNormalsHelper.js';

(() => {
  // init
  const scene = new Scene();
  scene.background = new Color(0xffffff);

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  camera.position.z = 20;

  let geometry = new BoxGeometry(5, 5, 5);

  let material = new MeshBasicMaterial({ color: 0xbbbbbb, wireframe: true });

  const cube = new Mesh(geometry, material);

  const normals = new FaceNormalsHelper(cube, 5);

  scene.add(cube);
  scene.add(normals);

  const renderer = new WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  (function mainLoop() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.05;
    normals.update();
    requestAnimationFrame(mainLoop);
  })();
})();
