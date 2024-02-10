import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Task 3: Draw 2 triangles next to each other using two different array buffers for their vertices data'

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

export function task03() {
    const {canvas, gl} = initWebGLContext(500, 500)
    appendTask(task, 'task03', canvas)
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

    // Tri 1
    const positions1 = [
        -0.75, -0.5, 
        -0.25, -0.5,
        -0.5, 0.5,
    ]
    const positionBuffer1 = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer1)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions1), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(positionBuffer1)
    })

    // Tri 2
    const positions2 = [
        0.25, -0.5,
        0.75, -0.5, 
        0.5, 0.5,
    ]
    const positionBuffer2 = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions2), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(positionBuffer2)
    })

    gl.enable(gl.CULL_FACE)
    gl.frontFace(gl.CCW)
    gl.clearColor(0, 0, 0, 1.0)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.useProgram(program)
    gl.enableVertexAttribArray(positionAttributeLocation)

    // Tri 1
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer1)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    // Tri 2
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}
