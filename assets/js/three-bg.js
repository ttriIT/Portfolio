// Three.js — rotating abstract shape for Hero background
(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  const ambient = new THREE.AmbientLight(0x88aaff, 0.5);
  const point = new THREE.PointLight(0x62d2ff, 1.2);
  point.position.set(4, 2, 6);
  scene.add(ambient, point);

  const geo = new THREE.IcosahedronGeometry(2, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0x123e57, metalness: 0.4, roughness: 0.4, emissive: 0x2a1757, emissiveIntensity: 0.35 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -0.4;
  scene.add(mesh);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function animate() {
    t += 0.01;
    mesh.rotation.y += 0.006;
    mesh.position.y = Math.sin(t) * 0.15;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();