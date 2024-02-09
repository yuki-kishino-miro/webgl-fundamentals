function e(e,t,r){let a=document.createElement("section");a.setAttribute("id",t);let n=document.createElement("h2");if(n.appendChild(document.createTextNode(e)),a.appendChild(n),r)a.appendChild(r);else{let e=document.createElement("p");e.appendChild(document.createTextNode("WebGL Context Creation Failed.")),a.appendChild(e)}document.body.appendChild(a)}function t(e=500,t=500){let r=document.createElement("canvas");if(!r)return{canvas:null,gl:null};r.style.width=`${e}px`,r.style.height=`${t}px`;let a=window.devicePixelRatio;r.width=Math.round(e*a),r.height=Math.round(t*a);let n=r.getContext("webgl");return n?{canvas:r,gl:n}:(console.error("WebGL context creation error"),{canvas:null,gl:null})}let r=[];function a(e){r.push(e)}function n(e,t,r){let a=e.createShader(t);return a?(e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.log(`Shader compiling error: ${e.getShaderInfoLog(a)}`),e.deleteShader(a),null):null}function o(e,t,r){let o=n(e,e.VERTEX_SHADER,t),l=n(e,e.FRAGMENT_SHADER,r);if(!o||!l)return null;let i=e.createProgram();if(!i){e.deleteShader(o),e.deleteShader(l);try{e.deleteProgram(i)}catch(e){}return null}return(e.attachShader(i,o),e.attachShader(i,l),e.linkProgram(i),e.deleteShader(o),e.deleteShader(l),e.getProgramParameter(i,e.LINK_STATUS))?(a(()=>{e.deleteProgram(i)}),i):(console.log(`Shader Program error: ${e.getProgramInfoLog(i)}`),e.deleteProgram(i),null)}window.addEventListener("beforeunload",e=>{r.forEach(e=>{try{e()}catch(e){console.error(e)}}),r=[],console.log("unload")});const l=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,i=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,d=`
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,c=`precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;!function(){let{canvas:r,gl:n}=t(500,500);if(e("Task 1: Create web application to draw Hello Triangle","task01",r),!r||!n)return;let d=o(n,l,i);if(!d)return;let c=n.getAttribLocation(d,"a_position"),u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,0,.5]),n.STATIC_DRAW),a(()=>{n.deleteBuffer(u)}),n.enable(n.CULL_FACE),n.frontFace(n.CCW),n.clearColor(0,0,0,1),n.viewport(0,0,n.canvas.width,n.canvas.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(d),n.enableVertexAttribArray(c),n.bindBuffer(n.ARRAY_BUFFER,u),n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,3)}(),function(){let{canvas:r,gl:n}=t(500,500);if(e("Task 2: Draw 2 triangles next to each other using glDrawArrays by adding more vertices to your data","task02",r),!r||!n)return;let l=o(n,d,c);if(!l)return;let i=n.getAttribLocation(l,"a_position"),u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-.75,-.5,-.25,-.5,-.5,.5,.25,-.5,.75,-.5,.5,.5]),n.STATIC_DRAW),a(()=>{n.deleteBuffer(u)}),n.enable(n.CULL_FACE),n.frontFace(n.CCW),n.clearColor(0,0,0,1),n.viewport(0,0,n.canvas.width,n.canvas.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(l),n.enableVertexAttribArray(i),n.bindBuffer(n.ARRAY_BUFFER,u),n.vertexAttribPointer(i,2,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,6)}();
//# sourceMappingURL=module01.3e516b85.js.map
