function e(e,r,t,a){Object.defineProperty(e,r,{get:t,set:a,enumerable:!0,configurable:!0})}var r=globalThis,t={},a={},o=r.parcelRequire92cc;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){a[e]=r},r.parcelRequire92cc=o);var i=o.register;i("blYoz",function(r,t){e(r.exports,"appendTask",()=>a);function a(e,r,t){let a=document.createElement("section");a.setAttribute("id",r);let o=document.createElement("h2");if(o.appendChild(document.createTextNode(e)),a.appendChild(o),t)a.appendChild(t);else{let e=document.createElement("p");e.appendChild(document.createTextNode("WebGL Context Creation Failed.")),a.appendChild(e)}document.body.appendChild(a)}}),i("gvPBi",function(r,t){e(r.exports,"initWebGLContext",()=>a);function a(e=500,r=500){let t=document.createElement("canvas");if(!t)return{canvas:null,gl:null};t.style.width=`${e}px`,t.style.height=`${r}px`;let a=window.devicePixelRatio;t.width=Math.round(e*a),t.height=Math.round(r*a);let o=t.getContext("webgl");return o?{canvas:t,gl:o}:(console.error("WebGL context creation error"),{canvas:null,gl:null})}}),i("2tjQH",function(r,t){e(r.exports,"createProgram",()=>n);var a=o("e9Cxs");function i(e,r,t){let a=e.createShader(r);return a?(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(`Shader compiling error: ${e.getShaderInfoLog(a)}`),e.deleteShader(a),null):null}function n(e,r,t){let o=i(e,e.VERTEX_SHADER,r),n=i(e,e.FRAGMENT_SHADER,t);if(!o||!n)return null;let l=e.createProgram();return l?(e.attachShader(l,o),e.attachShader(l,n),e.linkProgram(l),e.deleteShader(o),e.deleteShader(n),e.getProgramParameter(l,e.LINK_STATUS))?((0,a.registerOnUnload)(()=>{e.deleteProgram(l)}),l):(console.log(`Shader Program error: ${e.getProgramInfoLog(l)}`),e.deleteProgram(l),null):(e.deleteShader(o),e.deleteShader(n),null)}}),i("e9Cxs",function(r,t){e(r.exports,"registerOnUnload",()=>o);let a=[];function o(e){a.push(e)}window.addEventListener("beforeunload",e=>{a.forEach(e=>{try{e()}catch(e){console.error(e)}}),a=[],console.log("unload")})});var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const s=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,A=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const d=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,u=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const R=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,_=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const F=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,g=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,v=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,b=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const E=`
attribute vec2 a_position;

uniform vec2 u_translate;

void main() {
    gl_Position = vec4(a_position + u_translate, 0.0, 1.0);
}
`,B=`precision mediump float;
uniform vec3 u_color;

void main() {
    gl_FragColor = vec4(u_color, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const T=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,p=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const C=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,m=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;var n=o("blYoz"),l=o("gvPBi"),c=o("2tjQH"),f=o("e9Cxs");const L=`
attribute vec2 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
    v_color = a_color;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,U=`precision mediump float;
varying vec3 v_color;

void main() {
    gl_FragColor = vec4(v_color, 1.0);
}
`;!function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 1: Create web application to draw Hello Triangle","task01",e),!e||!r)return;let t=(0,c.createProgram)(r,s,A);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,0,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(o)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 2: Draw 2 triangles next to each other using glDrawArrays by adding more vertices to your data","task02",e),!e||!r)return;let t=(0,c.createProgram)(r,d,u);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5,.25,-.5,.75,-.5,.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(o)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,6)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 3: Draw 2 triangles next to each other using two different array buffers for their vertices data","task03",e),!e||!r)return;let t=(0,c.createProgram)(r,R,_);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(o)});let i=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,i),r.bufferData(r.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(i)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3),r.bindBuffer(r.ARRAY_BUFFER,i),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 4: Draw 2 triangles next to each other using two different shader programs","task04",e),!e||!r)return;let t=(0,c.createProgram)(r,F,g);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=(0,c.createProgram)(r,v,b);if(!o)return;let i=r.getAttribLocation(o,"a_position"),s=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(s)});let A=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,A),r.bufferData(r.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(A)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(.5,.5,.5,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,s),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3),r.useProgram(o),r.enableVertexAttribArray(i),r.bindBuffer(r.ARRAY_BUFFER,A),r.vertexAttribPointer(i,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 5: Make it possible to set desired color for rendering rectangle by using uniforms; draw 100 triangles with random colors","task05",e),!e||!r)return;let t=(0,c.createProgram)(r,E,B);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.getUniformLocation(t,"u_translate"),i=r.getUniformLocation(t,"u_color"),s=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.05,-.05,.05,-.05,0,.05]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(s)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a);for(let e=0;e<10;e++){let t=-.9+.2*e;for(let e=0;e<10;e++){let n=-.9+.2*e,l=[Math.random(),Math.random(),Math.random()];r.uniform2fv(o,[n,t]),r.uniform3fv(i,l),r.bindBuffer(r.ARRAY_BUFFER,s),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3)}}}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 6: Draw Rectangle shape with WebGL","task06",e),!e||!r)return;let t=(0,c.createProgram)(r,T,p);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(o)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,6)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 7: Draw Rectangle with WebGL using elements buffer object (EBO) = indexed vertices","task07",e),!e||!r)return;let t=(0,c.createProgram)(r,C,m);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(o)});let i=r.createBuffer();r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(i)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}(),function(){let{canvas:e,gl:r}=(0,l.initWebGLContext)(500,500);if((0,n.appendTask)("Task 8: Draw Rectangle with WebGL applying individual colour for each vertex","task08",e),!e||!r)return;let t=(0,c.createProgram)(r,L,U);if(!t)return;let a=r.getAttribLocation(t,"a_position"),o=r.getAttribLocation(t,"a_color"),i=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,i),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.5,-.5,1,0,0,.5,-.5,0,1,0,.5,.5,0,0,1,-.5,.5,1,1,1]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(i)});let s=r.createBuffer();r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,s),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),r.STATIC_DRAW),(0,f.registerOnUnload)(()=>{r.deleteBuffer(s)}),r.enable(r.CULL_FACE),r.frontFace(r.CCW),r.clearColor(0,0,0,1),r.viewport(0,0,r.canvas.width,r.canvas.height),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(t),r.enableVertexAttribArray(a),r.enableVertexAttribArray(o),r.bindBuffer(r.ARRAY_BUFFER,i),r.vertexAttribPointer(a,2,r.FLOAT,!1,5*Float32Array.BYTES_PER_ELEMENT,0),r.vertexAttribPointer(o,3,r.FLOAT,!1,5*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,s),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}();