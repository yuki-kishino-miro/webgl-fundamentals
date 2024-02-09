import { appendTask } from '../utils/appendTask'
import { initWebGLContext } from '../utils/gl/context'
import { createProgram } from '../utils/gl/shader'
import { Mat3 } from '../utils/maths/mat3'
import { TWO_PI } from '../utils/maths/pi'
import { registerOnUnload } from '../utils/registerOnUnload'

const task = 'Create animated squares: 1 rotated square, 1 translated square, 1 xy-scaled square'

const vs = `
attribute vec2 a_position;

uniform mat3 u_transform;

void main() {
    vec2 position = (u_transform * vec3(a_position, 1)).xy;
    gl_Position = vec4(position, 0.0, 1.0);
}
`

const fs = `precision mediump float;

uniform vec3 u_color;

void main() {
    gl_FragColor = vec4(u_color, 1.0);
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
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
    const transformUniformLocation = gl.getUniformLocation(program, "u_transform")
    const colorUniformLocation = gl.getUniformLocation(program, "u_color")

    const positions = [
        -0.25, -0.25,
        0.25, -0.25,
        0.25, 0.25,
        -0.25, 0.25,
    ]
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
    registerOnUnload(() => {
        gl.deleteBuffer(positionBuffer)
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

    const rects = [
        {
            translate: {x: -0.5, y: 0.5},
            rotate: 0,
            scale: {x: 1, y: 1},
            colors: [1, 0, 0],
        },
        {
            translate: {x: -0.5, y: -0.5},
            rotate: 0,
            scale: {x: 1, y: 1},
            colors: [0, 1, 0],
        },
        {
            translate: {x: 0.5, y: 0.5},
            rotate: 0,
            scale: {x: 1, y: 1},
            colors: [0, 0, 1],
        },
    ]

    let moveDir = 1
    const scaleDir = {x: 1, y: 1}
    const update = (elapsedTimeInMs: number) => {
        // rotation
        const rotationInc = -Math.PI * (elapsedTimeInMs / 1000)
        rects[0].rotate = (rects[0].rotate + rotationInc) % TWO_PI

        // translate
        const moveInc = elapsedTimeInMs / 1000
        rects[1].translate.x += moveInc * moveDir
        if (rects[1].translate.x > 0.5) {
            rects[1].translate.x = 0.5
            moveDir *= -1
        } else if (rects[1].translate.x < -0.5) {
            rects[1].translate.x = -0.5
            moveDir *= -1
        }

        // scale
        const scaleInc = {x: elapsedTimeInMs / 1000, y: elapsedTimeInMs / 1000}
        rects[2].scale.x += scaleInc.x * scaleDir.x
        if (rects[2].scale.x > 1.0) {
            rects[2].scale.x = 1.0
            scaleDir.x *= -1
        } else if (rects[2].scale.x < 0.0) {
            rects[2].scale.x = 0.0
            scaleDir.x *= -1
        }
        rects[2].scale.y += scaleInc.y * scaleDir.y
        if (rects[2].scale.y > 1.0) {
            rects[2].scale.y = 1.0
            scaleDir.y *= -1
        } else if (rects[2].scale.y < 0.0) {
            rects[2].scale.y = 0.0
            scaleDir.y *= -1
        }
    }

    const draw = () => {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

        gl.useProgram(program)
        gl.enableVertexAttribArray(positionAttributeLocation)

        rects.forEach(rect => {
            const {colors, translate, rotate, scale} = rect
            const transform = Mat3.multiply(
                Mat3.multiply(
                    Mat3.translate(translate.x, translate.y),
                    Mat3.rotate(rotate),
                ),
                Mat3.scale(scale.x, scale.y)
            )
            gl.uniformMatrix3fv(transformUniformLocation, false, transform)
            gl.uniform3fv(colorUniformLocation, colors)

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
        })
    }

    let reqAnimFrame: number | null = null
    let previousTimeStamp
    const render = (timeStampInMs: number) => {
        if (previousTimeStamp === undefined) {
            previousTimeStamp = timeStampInMs
        }
        const elapsed = timeStampInMs - previousTimeStamp
        previousTimeStamp = timeStampInMs
        update(elapsed)
        draw()
        reqAnimFrame = window.requestAnimationFrame(render);
    }
    registerOnUnload(() => {
        if (reqAnimFrame !== null) {
            cancelAnimationFrame(reqAnimFrame)
        }
    })
    reqAnimFrame = window.requestAnimationFrame(render)
}