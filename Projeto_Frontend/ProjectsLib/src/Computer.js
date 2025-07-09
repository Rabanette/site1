import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const canvas = document.getElementById('canva');

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(2, 2, 5);

const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

loader.load('/models/myModel.glb', (gltf) => {
  // ✅ Add model to your existing scene
  scene.add(gltf.scene);

  // Optionally: position, scale, rotate the model
  gltf.scene.position.set(0, 0, 0);
  gltf.scene.scale.set(0, 0, 0);
  gltf.scene.rotation.y = Math.PI / 2;
}, undefined, (error) => {
  console.error('Error loading model:', error);
});
