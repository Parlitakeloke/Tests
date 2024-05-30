import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';




//DECLARACION Y DEFINICION DE THREE

// Crear una nueva escena de Three.js
const scene = new THREE.Scene();

// Crear una nueva cámara de perspectiva. Los argumentos son:
// - Campo de visión: 75 grados
// - Relación de aspecto: ancho de la ventana / altura de la ventana
// - Plano cercano: 0.1
// - Plano lejano: 1000
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear un nuevo renderizador WebGL
const renderer = new THREE.WebGLRenderer();

// Establecer el tamaño del renderizador para que ocupe toda la ventana
renderer.setSize(window.innerWidth, window.innerHeight);
import plutoTexture from '../img/pluto.jpg';


//CREANDO UNA ESCENA

//Defino la forma geometrica o el esqueleto
const geometry = new THREE.BoxGeometry();
//Defino el material o la textura
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//Los junto y creo un objeto
const cubo = new THREE.Mesh(geometry, material);
//Lo añado a la escena
scene.add(cubo);

//Muevo la camara sa la posicion el 5
camera.position.z = 8;
camera.position.y = 3;
camera.position.x = 4;

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();


//CREACION DE UN PLANO
const planegeometry = new THREE.PlaneGeometry(10, 10,);
const planematerial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const plano = new THREE.Mesh(planegeometry, planematerial);
scene.add(plano);
plano.rotation.x = 0.5 * Math.PI;
plano.position.y = -0.5;




//DECLARACION DE INTERFAZ GUI

const gui = new dat.GUI();

const options = {


    speed: 0.01

}

gui.add(options, 'speed', 0, 0.1);

let step = 0;
let speed = 0.01;
function animar() {



    step += options.speed;
    cubo.position.y = 4 * Math.abs(Math.sin(step));

    requestAnimationFrame(animar);
    renderer.render(scene, camera);



}

animar();
