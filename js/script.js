let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(35, window.innerWidth/innerHeight, 0.1, 3000);
camera.position.z = 100;

let rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight)
rendu.setClearColor(0x00);

document.body.appendChild(rendu.domElement);



let forme = new THREE.Group();

let geometrie = new THREE.TorusKnotGeometry(10,50,20,3);

let materiel = new THREE.MeshNormalMaterial ({
    color: 0xffffff,
    transparent : true,
    opacity: 0.1,
    wireframe: true,
    wireframeLinewidth: 5,
    wireframeLinecap: 'square',
    wireframeLinejoin: 'square',
})

forme.add(new THREE.Mesh(geometrie,materiel));

scene.add(forme);

let animer = function (){
    requestAnimationFrame(animer)

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;

    rendu.render(scene, camera);
};
animer();




