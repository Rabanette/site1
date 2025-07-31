import * as THREE from "https://unpkg.com/three/build/three.module.js";
//import animatecube from './Animate-requests.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvas = document.getElementById('canva');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setClearColor(0x000000, 0);

renderer.setSize(window.innerWidth, window.innerHeight);

//reloads quando windowmode
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

  });

  //reloads quando fullscreen
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      location.reload();
    }
  });

/* CUBE MESH */
const geometry = new THREE.BoxGeometry( 1, 1, 1 );


camera.position.z = 5;
/* CUBE RANDOM GENERATION */

function randomposi(){
    return Math.random() * 40 - 20;
}
function randomsize(){
    return Math.random() * (4.0 - 0.1) + 0.1;
}
function rng(){
    randomnum();
    randomsize();
}


/*INSTANCES-OF-CUBE*/
let maxstorage = 25;
let arrayxpos = new Array(maxstorage);
let arrasize = new Array(maxstorage);

function randomnum(){
    for(let i = 0; i<9; i++){
        arrayxpos[i] = randomposi();
        console.log(arrayxpos);
        
        arrasize[i] = randomsize();
        console.log(arrayxpos);
    }
}

let cubesstorage = [];
function cubegererator(){
    for(let i = 0; i<maxstorage; i++){
        let newmaterial = new THREE.MeshBasicMaterial({ transparent: true, color: 0xFF9100 });
        let cubes= new THREE.Mesh(geometry, newmaterial);

        scene.add(cubes);
        cubes.position.z = randomposi();
        cubes.material.opacity = 1;
        cubes.position.y = randomposi();
        cubesstorage.push(cubes);
    }
    animateAllCubes();
}
cubegererator();

rng();

function animatecubes(cubecopy, index) {
    cubecopy.position.z = -13; 
	cubecopy.rotation.x += 0.005;
	cubecopy.rotation.y += 0.005;
    cubecopy.position.x = arrayxpos[index];
    cubecopy.position.y += 0.01;
    cubecopy.scale.set(arrasize[index], arrasize[index], arrasize[index]); /*tamanho do cubo*/
    renderer.render( scene, camera );

    if (cubecopy.position.y < 6) {
        cubecopy.material.opacity = Math.min(cubecopy.material.opacity + 0.01, 1);
    } else {
        cubecopy.material.opacity = Math.max(cubecopy.material.opacity - 0.01, 0);
    }

if(cubecopy.position.y > 13) {
   cubecopy.position.y = -11; 
   arrasize[index] = randomsize();
   arrayxpos[index] = randomposi();
}
}

function animateAllCubes() {
    requestAnimationFrame(animateAllCubes);
    for (let i = 0; i < cubesstorage.length; i++) {
        animatecubes(cubesstorage[i], i);
    }
    renderer.render(scene, camera);
}