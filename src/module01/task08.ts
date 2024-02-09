import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Task 8: Draw Rectangle with WebGL applying individual colour for each vertex'

const vs = `
attribute vec2 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
    v_color = a_color;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fs = `precision mediump float;
varying vec3 v_color;

void main() {
    gl_FragColor = vec4(v_color, 1.0);
}
`

export function task08() {
    const {canvas, gl} = initWebGLContext(500, 500)
    appendTask(task, 'task08', canvas)
    if (!canvas || !gl) {
        return
    }

    const program = createProgram(gl, vs, fs)
    if (!program) {
        return
    }
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
    const colorAttributeLocation = gl.getAttribLocation(program, "a_color")

    const points = [
        -0.5, -0.5, 1.0, 0.0, 0.0,
        0.5, -0.5, 0.0, 1.0, 0.0,
        0.5, 0.5, 0.0, 0.0, 1.0,
        -0.5, 0.5, 1.0, 1.0, 1.0,
    ]
    const pointBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(pointBuffer)
    })

    const indices = [
        0, 1, 2,
        2, 3, 0,
    ]
    const indexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(indexBuffer)
    })

    gl.enable(gl.CULL_FACE)
    gl.frontFace(gl.CCW)
    gl.clearColor(0, 0, 0, 1.0)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.useProgram(program)
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.enableVertexAttribArray(colorAttributeLocation)

    gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 5, 0)
    gl.vertexAttribPointer(colorAttributeLocation, 3, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 5, Float32Array.BYTES_PER_ELEMENT * 2)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
}
