let scene, camera, renderer, cube, sphere;
let ADD = 0.01;

const createSphere = () => {
  // arguments: radius length / number of horizontal and vertical segments / Phi start angle and finish angle  / Theta start angle and finish angle
  let geometry = new THREE.SphereGeometry(5, 30, 30, 0, Math.PI, 0, Math.PI / 2);
  // Math.PI = 180%
  let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
};

const createCube = () => {
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({ color: 0x00a1cb });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
};

// set up the environment -
// initialize scene, camera, objects and renderer
const init = function () {
  // 1. create the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // 2. create an locate the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  camera.position.z = 20;
  // help tools
  // let axes = new THREE.AxesHelper(5);
  // scene.add(axes);

  // 3. create and locate the objects on the scene
  // createCube();
  createSphere();

  // 4. create the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
};

// main animation loop = calls every 50-60 ms.

let mainLoop = function () {
  // sphere.position.x += ADD;
  // scene.rotation.x +=ADD;
  sphere.rotation.y += ADD;

  // if (cube.position.x < -3 || cube.position.x >= 3) ADD *= -1;
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
};
///////////////////////////////////////////////
init();
mainLoop();
