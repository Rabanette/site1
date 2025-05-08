import * as THREE from "https://unpkg.com/three/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvas = document.getElementById('canva');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setClearColor(0x000000, 0);

renderer.setSize(window.innerWidth, window.innerHeight);


/* Responsive canvas */

let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

//reloads quando windowmode
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    location.reload();


  });

  //reloads quando fullscreen
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      location.reload();
    }
  });

/* CUBE MESH */

let cube;
let cube1;
let cube2;
let cube3;
let cube4;
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { transparent: true, emissive: 0x00ffcc, emissiveIntensity: 1.5, color: 0xFF9100 } );
cube = new THREE.Mesh( geometry, material );
cube1 = new THREE.Mesh( geometry, material );
cube2 = new THREE.Mesh( geometry, material );
cube3 = new THREE.Mesh( geometry, material );
cube4 = new THREE.Mesh( geometry, material );
function createcube (){


}



camera.position.z = 5;

/* CUBE RANDOM GENERATION */

let xposition; /*define position em que o cube nasce*/
let zposition; /*define position em que o cube nasce*/
let cubesize = 1; /*define tamanho do cube*/

let randomnum = () => {let randompos = Math.random() * (15 - (-15)) + (-15); xposition = randompos; zposition = randompos};
let randomsize = () => {let randomsz = Math.floor(Math.random() * 5) - 1; cubesize = randomsz};
function rng(){
    randomnum();
    randomsize();
    console.log(xposition);
    scene.add(cube);
    animate();
    randomnum();
}
rng();

/*CUBE LIFE-CYCLE*/

function animate() {
    requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube.position.x = xposition;
    cube.position.y += 0.02;
    cube.scale.set(cubesize, cubesize, cubesize); /*tamanho do cubo*/
	console.log(cubesize);
    renderer.render( scene, camera );
    cube.position.z = -13; 

    if (cube.position.y < 6) {
        cube.material.opacity = Math.min(cube.material.opacity + 0.01, 1);
    } else {
        cube.material.opacity = Math.max(cube.material.opacity - 0.01, 0);
    }

if(cube.position.y > 13) {
   cube.position.y = -13; 
   randomsize();
   randomnum();
}
}




