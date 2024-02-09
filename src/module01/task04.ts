import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Task 4: Draw 2 triangles next to each other using two different shader programs'

const vs1 = `
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fs1 = `precision mediump float;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`

const vs2 = `
attribute vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fs2 = `precision mediump float;

void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`

export function task04() {
    const {canvas, gl} = initWebGLContext(500, 500)
    appendTask(task, 'task04', canvas)
    if (!canvas || !gl) {
        return
    }

    // Shader Program 1
    const program1 = createProgram(gl, vs1, fs1)
    if (!program1) {
        return
    }
    const positionAttributeLocation1 = gl.getAttribLocation(program1, "a_position")

    // Shader Program 2
    const program2 = createProgram(gl, vs2, fs2)
    if (!program2) {
        return
    }
    const positionAttributeLocation2 = gl.getAttribLocation(program2, "a_position")

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
    gl.clearColor(0.5, 0.5, 0.5, 1.0)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    // Shader Program 1 & Tri 1
    {
        gl.useProgram(program1)
        gl.enableVertexAttribArray(positionAttributeLocation1)

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer1)
        gl.vertexAttribPointer(positionAttributeLocation1, 2, gl.FLOAT, false, 0, 0)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    // Shader Program 2 & Tri 2
    {
        gl.useProgram(program2)
        gl.enableVertexAttribArray(positionAttributeLocation2)
    
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2)
        gl.vertexAttribPointer(positionAttributeLocation2, 2, gl.FLOAT, false, 0, 0)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
}
