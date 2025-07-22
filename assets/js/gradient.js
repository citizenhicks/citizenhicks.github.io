const canvas = document.getElementById("gradient-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
uniforms: {
u_time: { value: 0 },
},
vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`,
fragmentShader: `
uniform float u_time;
varying vec2 vUv;

   void main() {
       vec2 uv = vUv;
       float t = u_time * 0.1;
       // Catppuccin Mocha colors
       vec3 color1 = vec3(0.118, 0.118, 0.180); // #1e1e2e
       vec3 color2 = vec3(0.094, 0.094, 0.145); // #181825
       vec3 color3 = vec3(0.192, 0.200, 0.267); // #313244
       vec3 color4 = vec3(0.271, 0.282, 0.376); // #45475a
       vec3 color5 = vec3(0.345, 0.357, 0.467); // #585b70
       // Create a dynamic gradient
       vec3 color = mix(color1, color2, uv.x + sin(t) * 0.1);
       color = mix(color, color3, uv.y + cos(t) * 0.1);
       color = mix(color, color4, sin(uv.x * 10.0 + t) * 0.5 + 0.5);
       color = mix(color, color5, cos(uv.y * 10.0 + t) * 0.5 + 0.5);
       gl_FragColor = vec4(color, 0.3);
   }
`,
transparent: true

});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
function animate(time) {
material.uniforms.u_time.value = time * 0.001;
renderer.render(scene, camera);
requestAnimationFrame(animate);
}
function resize() {
renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize);
resize();
animate(0);
