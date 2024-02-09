function e(e,r,t){let a=document.createElement("section");a.setAttribute("id",r);let o=document.createElement("h2");if(o.appendChild(document.createTextNode(e)),a.appendChild(o),t)a.appendChild(t);else{let e=document.createElement("p");e.appendChild(document.createTextNode("WebGL Context Creation Failed.")),a.appendChild(e)}document.body.appendChild(a)}function r(e=500,r=500){let t=document.createElement("canvas");if(!t)return{canvas:null,gl:null};t.style.width=`${e}px`,t.style.height=`${r}px`;let a=window.devicePixelRatio;t.width=Math.round(e*a),t.height=Math.round(r*a);let o=t.getContext("webgl");return o?{canvas:t,gl:o}:(console.error("WebGL context creation error"),{canvas:null,gl:null})}let t=[];function a(e){t.push(e)}function o(e,r,t){let a=e.createShader(r);return a?(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(`Shader compiling error: ${e.getShaderInfoLog(a)}`),e.deleteShader(a),null):null}function i(e,r,t){let i=o(e,e.VERTEX_SHADER,r),n=o(e,e.FRAGMENT_SHADER,t);if(!i||!n)return null;let l=e.createProgram();if(!l){e.deleteShader(i),e.deleteShader(n);try{e.deleteProgram(l)}catch(e){}return null}return(e.attachShader(l,i),e.attachShader(l,n),e.linkProgram(l),e.deleteShader(i),e.deleteShader(n),e.getProgramParameter(l,e.LINK_STATUS))?(a(()=>{e.deleteProgram(l)}),l):(console.log(`Shader Program error: ${e.getProgramInfoLog(l)}`),e.deleteProgram(l),null)}window.addEventListener("beforeunload",e=>{t.forEach(e=>{try{e()}catch(e){console.error(e)}}),t=[],console.log("unload")});const n=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,l=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,c=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,f=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,d=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,A=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,u=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,s=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,R=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,F=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`,_=`
attribute vec2 a_position;

uniform vec2 u_translate;

void main() {
    gl_Position = vec4(a_position + u_translate, 0.0, 1.0);
}
`,g=`precision mediump float;
uniform vec3 u_color;

void main() {
    gl_FragColor = vec4(u_color, 1.0);
}
`;!function(){let{canvas:t,gl:o}=r(500,500);if(e("Task 1: Create web application to draw Hello Triangle","task01",t),!t||!o)return;let c=i(o,n,l);if(!c)return;let f=o.getAttribLocation(c,"a_position"),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,0,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(d)}),o.enable(o.CULL_FACE),o.frontFace(o.CCW),o.clearColor(0,0,0,1),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(c),o.enableVertexAttribArray(f),o.bindBuffer(o.ARRAY_BUFFER,d),o.vertexAttribPointer(f,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:o}=r(500,500);if(e("Task 2: Draw 2 triangles next to each other using glDrawArrays by adding more vertices to your data","task02",t),!t||!o)return;let n=i(o,c,f);if(!n)return;let l=o.getAttribLocation(n,"a_position"),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5,.25,-.5,.75,-.5,.5,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(d)}),o.enable(o.CULL_FACE),o.frontFace(o.CCW),o.clearColor(0,0,0,1),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(n),o.enableVertexAttribArray(l),o.bindBuffer(o.ARRAY_BUFFER,d),o.vertexAttribPointer(l,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,6)}(),function(){let{canvas:t,gl:o}=r(500,500);if(e("Task 3: Draw 2 triangles next to each other using two different array buffers for their vertices data","task03",t),!t||!o)return;let n=i(o,d,A);if(!n)return;let l=o.getAttribLocation(n,"a_position"),c=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,c),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(c)});let f=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(f)}),o.enable(o.CULL_FACE),o.frontFace(o.CCW),o.clearColor(0,0,0,1),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(n),o.enableVertexAttribArray(l),o.bindBuffer(o.ARRAY_BUFFER,c),o.vertexAttribPointer(l,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3),o.bindBuffer(o.ARRAY_BUFFER,f),o.vertexAttribPointer(l,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:o}=r(500,500);if(e("Task 4: Draw 2 triangles next to each other using two different shader programs","task04",t),!t||!o)return;let n=i(o,u,s);if(!n)return;let l=o.getAttribLocation(n,"a_position"),c=i(o,R,F);if(!c)return;let f=o.getAttribLocation(c,"a_position"),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(d)});let A=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,A),o.bufferData(o.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(A)}),o.enable(o.CULL_FACE),o.frontFace(o.CCW),o.clearColor(.5,.5,.5,1),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(n),o.enableVertexAttribArray(l),o.bindBuffer(o.ARRAY_BUFFER,d),o.vertexAttribPointer(l,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3),o.useProgram(c),o.enableVertexAttribArray(f),o.bindBuffer(o.ARRAY_BUFFER,A),o.vertexAttribPointer(f,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:o}=r(500,500);if(e("Task 5: Make it possible to set desired color for rendering rectangle by using uniforms; draw 100 triangles with random colors","task05",t),!t||!o)return;let n=i(o,_,g);if(!n)return;let l=o.getAttribLocation(n,"a_position"),c=o.getUniformLocation(n,"u_translate"),f=o.getUniformLocation(n,"u_color"),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-.05,-.05,.05,-.05,0,.05]),o.STATIC_DRAW),a(()=>{o.deleteBuffer(d)}),o.enable(o.CULL_FACE),o.frontFace(o.CCW),o.clearColor(0,0,0,1),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.useProgram(n),o.enableVertexAttribArray(l);for(let e=0;e<10;e++){let r=-.9+.2*e;for(let e=0;e<10;e++){let t=-.9+.2*e,a=[Math.random(),Math.random(),Math.random()];o.uniform2fv(c,[t,r]),o.uniform3fv(f,a),o.bindBuffer(o.ARRAY_BUFFER,d),o.vertexAttribPointer(l,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3)}}}();