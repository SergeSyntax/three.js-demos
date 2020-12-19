import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
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

  camera.position.z = 20;

  // const geometry = new BoxGeometry(5, 5, 5);
  // const geometry = new SphereGeometry(5, 30, 30);
  let geometry = new TorusGeometry(5, 2, 10, 12);


  // const material = new MeshBasicMaterial({ color: 0xbbbbbb, wireframe: true });
  const material = new MeshNormalMaterial();

  // const cube = new Mesh(geometry, material);
  // const sphere = new Mesh(geometry, material);
  const torus = new Mesh(geometry, material);

  // const normals = new FaceNormalsHelper(cube, 5);
  // const normals = new FaceNormalsHelper(sphere, 5);
  const normals = new FaceNormalsHelper(torus, 5);

  // scene.add(sphere);
  scene.add(torus);
  // scene.add(cube);
  scene.add(normals);

  const renderer = new WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  (function mainLoop() {
    renderer.render(scene, camera);
    // cube.rotation.x += 0.001;
    // cube.rotation.y += 0.001;
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    normals.update();
    requestAnimationFrame(mainLoop);
  })();
})();
