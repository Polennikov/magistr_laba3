import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import {FirstPersonControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/FirstPersonControls.js';

let scene, camera, renderer, container, controls;
let W, H;
let light;



let Orbit = function (radius){
    this.radius=radius;

    this.draw=function (scene){
        let og= new THREE.Geometry();
        let om = new THREE.PointsMaterial({
            transparent: true,
            color: 0x808080,
            opacity: 0.3,
            size: 1,
            sizeAttenuation: false});

        for (let i = 0; i < 500; i++) {
            let vertex = new THREE.Vector3();
            vertex.x = Math.sin(180/Math.PI  * i) *this.radius ;
            vertex.z = Math.cos(180/Math.PI * i) *this.radius ;
            og.vertices.push(vertex);
        }
        let obj = new THREE.Points(og, om);
        scene.add(obj);
    };
};

W = parseInt(window.innerWidth);
H = parseInt(window.innerHeight);

container = document.createElement('div');
document.body.appendChild(container);

camera = new THREE.PerspectiveCamera(45, W / H, 1, 1000000);
camera.position.z = 100000;
camera.position.y=10000;
scene = new THREE.Scene();

controls = new FirstPersonControls(camera);
controls.movementSpeed = 70000;
controls.lookSpeed = 1.6;


renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(W, H);
container.appendChild(renderer.domElement);


light = new THREE.PointLight(0xffffff, 1.7, 200000);
light.position.set(0, 0, 0);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.heigth = 2048;
scene.add(light);


let ambient = new THREE.AmbientLight(0x222222);
scene.add(ambient);

//dnk;
let dnk, dnk_geom, dnk_mat;
dnk_geom = new THREE.SphereGeometry(60, 20, 20);
let dnk_texture = new THREE.TextureLoader().load('textures/dnk.png');
dnk_texture.minFilter = THREE.LinearFilter;
dnk_texture.anisotropy = 8;
dnk_mat = new THREE.MeshPhongMaterial({map: dnk_texture});
dnk = new THREE.Mesh(dnk_geom, dnk_mat);
dnk.castShadow = true;
scene.add(dnk);
let dnk_orbit = new Orbit(8000);
dnk_orbit.draw(scene);

//dnk1;
let dnk1, dnk1_geom, dnk1_mat;
dnk1_geom = new THREE.SphereGeometry(60, 20, 20);
let dnk1_texture = new THREE.TextureLoader().load('textures/dnk1.png');
dnk1_texture.minFilter = THREE.LinearFilter;
dnk1_texture.anisotropy = 8;
dnk1_mat = new THREE.MeshPhongMaterial({map: dnk1_texture});
dnk1 = new THREE.Mesh(dnk1_geom, dnk1_mat);
dnk1.castShadow = true;
scene.add(dnk1);
let dnk1_orbit = new Orbit(8000);
dnk1_orbit.draw(scene);

//dnk2;
let dnk2, dnk2_geom, dnk2_mat;
dnk2_geom = new THREE.SphereGeometry(60, 20, 20);
let dnk2_texture = new THREE.TextureLoader().load('textures/dnk2.png');
dnk2_texture.minFilter = THREE.LinearFilter;
dnk2_texture.anisotropy = 8;
dnk2_mat = new THREE.MeshPhongMaterial({map: dnk2_texture});
dnk2 = new THREE.Mesh(dnk2_geom, dnk2_mat);
dnk2.castShadow = true;
scene.add(dnk2);
let dnk2_orbit = new Orbit(8000);
dnk2_orbit.draw(scene);


let t = 0;
let y = 0;

document.addEventListener('mousemove', function (event) {
    y = parseInt(event.offsetY);

});

animate();

function animate() {
    requestAnimationFrame(animate);

        controls.update(0.002);
        dnk.position.x = Math.sin(t * 0.1) * 30000;
        dnk.position.z = Math.cos(t * 0.1) * 30000;

        dnk1.position.x = Math.sin(t * 0.3) * 8000;
        dnk1.position.z = Math.cos(t * 0.3) * 8000;

        dnk2.position.x = Math.sin(t * 0.2) * 17000;
        dnk2.position.z = Math.cos(t * 0.2) * 17000;

        dnk.rotation.y += 0.01;
        dnk1.rotation.y += 0.01;
        dnk2.rotation.y += 0.01;
        

    t += Math.PI / 180 * 2 * 0.1;
    renderer.render(scene, camera);
}

