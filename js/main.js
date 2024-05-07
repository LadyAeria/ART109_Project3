
//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';

import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xC6F4FF );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 50;

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const texture = new THREE.TextureLoader().load('textures/animalPrint.png');
const material = new THREE.MeshBasicMaterial({map: texture});

const torus = new THREE.Mesh(geometry, material);

function init() {
    // ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
    
        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(3,4,5);
        scene.add(light);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        const loader = new GLTFLoader();

        //tree models
        loader.load('assets/tree.gltf', function (gltf){
            const tree = gltf.scene;
            scene.add(tree);
            tree.scale.set(1,1,1);
            tree.position.z = -55;
            tree.position.x = -10;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree1 = gltf.scene;
            scene.add(tree1);
            tree1.scale.set(1,1,1);
            tree1.position.z = -35;
            tree1.position.x = -30;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree2 = gltf.scene;
            scene.add(tree2);
            tree2.scale.set(1,1,1);
            tree2.position.z = -55;
            tree2.position.x = 10;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree3 = gltf.scene;
            scene.add(tree3);
            tree3.scale.set(1,1,1);
            tree3.position.z = -50;
            tree3.position.x = 40;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree4 = gltf.scene;
            scene.add(tree4);
            tree4.scale.set(1,1,1);
            tree4.position.z = -40;
            tree4.position.x = -60;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree5 = gltf.scene;
            scene.add(tree5);
            tree5.scale.set(1,1,1);
            tree5.position.z = -55;
            tree5.position.x = -25;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree6 = gltf.scene;
            scene.add(tree6);
            tree6.scale.set(1,1,1);
            tree6.position.z = -30;
            tree6.position.x = 15;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree7 = gltf.scene;
            scene.add(tree7);
            tree7.scale.set(1,1,1);
            tree7.position.z = -25;
            tree7.position.x = 30;
        })
        loader.load('assets/tree.gltf', function (gltf){
            const tree8 = gltf.scene;
            scene.add(tree8);
            tree8.scale.set(1,1,1);
            tree8.position.z = -55;
            tree8.position.x = -60;
        })

        //tree stump models
        loader.load('assets/stump.gltf', function (gltf){
            const stump = gltf.scene;
            scene.add(stump);
            stump.scale.set(1,1,1);
            stump.position.z = -140;
            stump.position.y = -5;
            stump.position.x = -10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump1 = gltf.scene;
            scene.add(stump1);
            stump1.scale.set(1,1,1);
            stump1.position.z = -150;
            stump1.position.y = -5;
            stump1.position.x = -20;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump2 = gltf.scene;
            scene.add(stump2);
            stump2.scale.set(1,1,1);
            stump2.position.z = -140;
            stump2.position.y = -5;
            stump2.position.x = -35;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump3 = gltf.scene;
            scene.add(stump3);
            stump3.scale.set(1,1,1);
            stump3.position.z = -140;
            stump3.position.y = -5;
            stump3.position.x = 10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump4 = gltf.scene;
            scene.add(stump4);
            stump4.scale.set(1,1,1);
            stump4.position.z = -145;
            stump4.position.y = -5;
            stump4.position.x = 15;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump5 = gltf.scene;
            scene.add(stump5);
            stump5.scale.set(1,1,1);
            stump5.position.z = -140;
            stump5.position.y = -5;
            stump5.position.x = 0;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump6 = gltf.scene;
            scene.add(stump6);
            stump6.scale.set(1,1,1);
            stump6.position.z = -143;
            stump6.position.y = -5;
            stump6.position.x = -25;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump7 = gltf.scene;
            scene.add(stump7);
            stump7.scale.set(1,1,1);
            stump7.position.z = -140;
            stump7.position.y = -5;
            stump7.position.x = -15;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump8 = gltf.scene;
            scene.add(stump8);
            stump8.scale.set(1,1,1);
            stump8.position.z = -200;
            stump8.position.y = -5;
            stump8.position.x = -10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump9 = gltf.scene;
            scene.add(stump9);
            stump9.scale.set(1,1,1);
            stump9.position.z = -230;
            stump9.position.y = -5;
            stump9.position.x = -20;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump10 = gltf.scene;
            scene.add(stump10);
            stump10.scale.set(1,1,1);
            stump10.position.z = -210;
            stump10.position.y = -5;
            stump10.position.x = -35;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump11 = gltf.scene;
            scene.add(stump11);
            stump11.scale.set(1,1,1);
            stump11.position.z = -200;
            stump11.position.y = -5;
            stump11.position.x = 10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump12 = gltf.scene;
            scene.add(stump12);
            stump12.scale.set(1,1,1);
            stump12.position.z = -205;
            stump12.position.y = -5;
            stump12.position.x = 15;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump13 = gltf.scene;
            scene.add(stump13);
            stump13.scale.set(1,1,1);
            stump13.position.z = -230;
            stump13.position.y = -5;
            stump13.position.x = 0;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump14 = gltf.scene;
            scene.add(stump14);
            stump14.scale.set(1,1,1);
            stump14.position.z = -190;
            stump14.position.y = -5;
            stump14.position.x = -25;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump15 = gltf.scene;
            scene.add(stump15);
            stump15.scale.set(1,1,1);
            stump15.position.z = -200;
            stump15.position.y = -5;
            stump15.position.x = -15;
        })

        loader.load('assets/stump.gltf', function (gltf){
            const stump16 = gltf.scene;
            scene.add(stump16);
            stump16.scale.set(1,1,1);
            stump16.position.z = -300;
            stump16.position.y = -5;
            stump16.position.x = -10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump17 = gltf.scene;
            scene.add(stump17);
            stump17.scale.set(1,1,1);
            stump17.position.z = -330;
            stump17.position.y = -5;
            stump17.position.x = -20;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump18 = gltf.scene;
            scene.add(stump18);
            stump18.scale.set(1,1,1);
            stump18.position.z = -310;
            stump18.position.y = -5;
            stump18.position.x = -5;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump19 = gltf.scene;
            scene.add(stump19);
            stump19.scale.set(1,1,1);
            stump19.position.z = -300;
            stump19.position.y = -5;
            stump19.position.x = 10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump20 = gltf.scene;
            scene.add(stump20);
            stump20.scale.set(1,1,1);
            stump20.position.z = -305;
            stump20.position.y = -5;
            stump20.position.x = 15;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump21 = gltf.scene;
            scene.add(stump21);
            stump21.scale.set(1,1,1);
            stump21.position.z = -330;
            stump21.position.y = -5;
            stump21.position.x = 0;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump22 = gltf.scene;
            scene.add(stump22);
            stump22.scale.set(1,1,1);
            stump22.position.z = -300;
            stump22.position.y = -5;
            stump22.position.x = -10;
        })
        loader.load('assets/stump.gltf', function (gltf){
            const stump23 = gltf.scene;
            scene.add(stump23);
            stump23.scale.set(1,1,1);
            stump23.position.z = -300;
            stump23.position.y = -5;
            stump23.position.x = -15;
        })

        //sprout model (doesn't work idk why)
        // loader.load('assets/tree_sprout.gltf', function (gltf){
        //     const sprout = gltf.scene;
        //     scene.add.set(sprout);
        //     sprout.scale(10,10,10);
        //     sprout.position.z = -55;
        //     sprout.position.x = -10;
        // })

        loader.load('assets/tree.gltf', function (gltf){
            const tree = gltf.scene;
            scene.add(tree);
            tree.scale.set(1,1,1);
            tree.position.z = -420;
            tree.position.x = -42;
        })
    }

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = t * 0.1;
    camera.position.x = t * 0.01;
}

document.body.onscroll = moveCamera;

moveCamera();

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.z += 0.01;
    renderer.render(scene, camera);
}

init();
animate();