import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Task 5: Make it possible to set desired color for rendering rectangle by using uniforms; draw 100 triangles with random colors'

const vs = `
attribute vec2 a_position;

uniform vec2 u_translate;

void main() {
    gl_Position = vec4(a_position + u_translate, 0.0, 1.0);
}
`

const fs = `precision mediump float;
uniform vec3 u_color;

void main() {
    gl_FragColor = vec4(u_color, 1.0);
}
`

export function task05() {
    const {canvas, gl} = initWebGLContext(500, 500)
    appendTask(task, 'task05', canvas)
    if (!canvas || !gl) {
        return
    }

    const program = createProgram(gl, vs, fs)
    if (!program) {
        return
    }
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
    const translateUniformLocation = gl.getUniformLocation(program, "u_translate")
    const colorUniformLocation = gl.getUniformLocation(program, "u_color")

    const positions = [
        -0.05, -0.05,
        0.05, -0.05,
        0, 0.05,
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
    
    const offset = -0.9
    const stride = 0.2
    for (let y = 0; y < 10; y++) {
        const posY = offset + y * stride
        for (let x = 0; x < 10; x++) {
            const posX = offset + x * stride
            const colors = [
                Math.random(),
                Math.random(),
                Math.random(),
            ]
            gl.uniform2fv(translateUniformLocation, [posX, posY])
            gl.uniform3fv(colorUniformLocation, colors)

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
            gl.drawArrays(gl.TRIANGLES, 0, 3)
        }
    }
}
