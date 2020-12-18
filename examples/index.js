let scene, camera, renderer, shape;
let ADD = 0.8;

let createGeometry = function () {
  let geometry = new THREE.Geometry();

  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(5, 0, 0));
  geometry.vertices.push(new THREE.Vector3(2, 4, 3));
  geometry.vertices.push(new THREE.Vector3(2, 4, -3));

  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(0, 1, 3));
  // geometry.faces.push(new THREE.Face3(0, 2, 3));

  let material = new THREE.MeshBasicMaterial({ color: 0xff4606, side: THREE.DoubleSide });
  shape = new THREE.Mesh(geometry, material);

shape.rotation.z = 0.7;
shape.rotation.x = 0.6;


  scene.add(shape);
};

// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function () {
  // create the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // create an locate the camera
  camera = new THREE.PerspectiveCamera(75, 
    window.innerWidth / window.innerHeight, 
    1, 1000);
    camera.position.z = 40;

  createGeometry();

  // create the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
};

// main animation loop - calls 50-60 times per second.
let mainLoop = function () {
  shape.geometry.vertices[2].y += ADD;
  shape.geometry.vertices[3].y += ADD;
  shape.geometry.verticesNeedUpdate = true;

  if(shape.geometry.vertices[2].y < -4 ||
    shape.geometry.vertices[2].y > 4)
     ADD *= -1;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();
