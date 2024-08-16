import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let objToRender = "object";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById('3D');
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.05;

scene.background = new THREE.Color(0x0D0F14);

let object = null;

const loader = new GLTFLoader();
loader.load(
    `../public/scene.gltf`, 
    function (gltf) {
        object = gltf.scene; 
        object.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: 0x2F4FF, 
                    roughness: 0.7, 
                    metalness: 0.3 
                });
            }
        });

        scene.add(object); 
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + "% completed");
    },
    function (error) {
        console.error(error);
    }
);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    if (object) {
        object.rotation.y += 0.01;
        object.rotation.x += 0.01;
    }

    controls.update();

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();


