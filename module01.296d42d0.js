function e(e,r,t){let a=document.createElement("section");a.setAttribute("id",r);let i=document.createElement("h2");if(i.appendChild(document.createTextNode(e)),a.appendChild(i),t)a.appendChild(t);else{let e=document.createElement("p");e.appendChild(document.createTextNode("WebGL Context Creation Failed.")),a.appendChild(e)}document.body.appendChild(a)}function r(e=500,r=500){let t=document.createElement("canvas");if(!t)return{canvas:null,gl:null};t.style.width=`${e}px`,t.style.height=`${r}px`;let a=window.devicePixelRatio;t.width=Math.round(e*a),t.height=Math.round(r*a);let i=t.getContext("webgl");return i?{canvas:t,gl:i}:(console.error("WebGL context creation error"),{canvas:null,gl:null})}let t=[];function a(e){t.push(e)}function i(e,r,t){let a=e.createShader(r);return a?(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(`Shader compiling error: ${e.getShaderInfoLog(a)}`),e.deleteShader(a),null):null}function o(e,r,t){let o=i(e,e.VERTEX_SHADER,r),n=i(e,e.FRAGMENT_SHADER,t);if(!o||!n)return null;let l=e.createProgram();return l?(e.attachShader(l,o),e.attachShader(l,n),e.linkProgram(l),e.deleteShader(o),e.deleteShader(n),e.getProgramParameter(l,e.LINK_STATUS))?(a(()=>{e.deleteProgram(l)}),l):(console.log(`Shader Program error: ${e.getProgramInfoLog(l)}`),e.deleteProgram(l),null):(e.deleteShader(o),e.deleteShader(n),null)}window.addEventListener("beforeunload",e=>{t.forEach(e=>{try{e()}catch(e){console.error(e)}}),t=[],console.log("unload")});const n=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,l=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,f=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,A=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,c=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,u=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,R=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,_=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,d=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,F=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`,s=`
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
`,E=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,v=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,b=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,g=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,T=`
attribute vec2 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
    v_color = a_color;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,m=`precision mediump float;
varying vec3 v_color;

void main() {
    gl_FragColor = vec4(v_color, 1.0);
}
`;!function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 1: Create web application to draw Hello Triangle","task01",t),!t||!i)return;let f=o(i,n,l);if(!f)return;let A=i.getAttribLocation(f,"a_position"),c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,0,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(c)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(f),i.enableVertexAttribArray(A),i.bindBuffer(i.ARRAY_BUFFER,c),i.vertexAttribPointer(A,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 2: Draw 2 triangles next to each other using glDrawArrays by adding more vertices to your data","task02",t),!t||!i)return;let n=o(i,f,A);if(!n)return;let l=i.getAttribLocation(n,"a_position"),c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5,.25,-.5,.75,-.5,.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(c)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,c),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,6)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 3: Draw 2 triangles next to each other using two different array buffers for their vertices data","task03",t),!t||!i)return;let n=o(i,c,u);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,f),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(f)});let A=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,A),i.bufferData(i.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(A)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,f),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3),i.bindBuffer(i.ARRAY_BUFFER,A),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 4: Draw 2 triangles next to each other using two different shader programs","task04",t),!t||!i)return;let n=o(i,R,_);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=o(i,d,F);if(!f)return;let A=i.getAttribLocation(f,"a_position"),c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(c)});let u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,new Float32Array([.25,-.5,.75,-.5,.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(u)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(.5,.5,.5,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,c),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3),i.useProgram(f),i.enableVertexAttribArray(A),i.bindBuffer(i.ARRAY_BUFFER,u),i.vertexAttribPointer(A,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 5: Make it possible to set desired color for rendering rectangle by using uniforms; draw 100 triangles with random colors","task05",t),!t||!i)return;let n=o(i,s,B);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=i.getUniformLocation(n,"u_translate"),A=i.getUniformLocation(n,"u_color"),c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.05,-.05,.05,-.05,0,.05]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(c)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l);for(let e=0;e<10;e++){let r=-.9+.2*e;for(let e=0;e<10;e++){let t=-.9+.2*e,a=[Math.random(),Math.random(),Math.random()];i.uniform2fv(f,[t,r]),i.uniform3fv(A,a),i.bindBuffer(i.ARRAY_BUFFER,c),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3)}}}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 6: Draw Rectangle shape with WebGL","task06",t),!t||!i)return;let n=o(i,E,v);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,f),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(f)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,f),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,6)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 7: Draw Rectangle with WebGL using elements buffer object (EBO) = indexed vertices","task07",t),!t||!i)return;let n=o(i,b,g);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,f),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(f)});let A=i.createBuffer();i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,A),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(A)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,f),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,A),i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0)}(),function(){let{canvas:t,gl:i}=r(500,500);if(e("Task 8: Draw Rectangle with WebGL applying individual colour for each vertex","task08",t),!t||!i)return;let n=o(i,T,m);if(!n)return;let l=i.getAttribLocation(n,"a_position"),f=i.getAttribLocation(n,"a_color"),A=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,A),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-.5,-.5,1,0,0,.5,-.5,0,1,0,.5,.5,0,0,1,-.5,.5,1,1,1]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(A)});let c=i.createBuffer();i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,c),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,2,3,0]),i.STATIC_DRAW),a(()=>{i.deleteBuffer(c)}),i.enable(i.CULL_FACE),i.frontFace(i.CCW),i.clearColor(0,0,0,1),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.useProgram(n),i.enableVertexAttribArray(l),i.enableVertexAttribArray(f),i.bindBuffer(i.ARRAY_BUFFER,A),i.vertexAttribPointer(l,2,i.FLOAT,!1,20,0),i.vertexAttribPointer(f,3,i.FLOAT,!1,20,8),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,c),i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0)}();