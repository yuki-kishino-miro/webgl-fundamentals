import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Task 1: Create web application to draw Hello Triangle'

const vs = `
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fs = `precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`

export function task01() {
    const {canvas, gl} = initWebGLContext(500, 500)
    appendTask(task, 'task01', canvas)
    if (!canvas || !gl) {
        return
    }

    const program = createProgram(gl, vs, fs)
    if (!program) {
        return
    }
    registerOnUnload(() => {
        gl.deleteProgram(program)
    })
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position")

    const positions = [
        -0.5, -0.5,
        0.5, -0.5,
        0, 0.5,
    ]
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(positionBuffer)
    })

    gl.enable(gl.CULL_FACE)
    gl.frontFace(gl.CCW)
    gl.clearColor(0, 0, 0, 1.0)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.useProgram(program)
    gl.enableVertexAttribArray(positionAttributeLocation)

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}
