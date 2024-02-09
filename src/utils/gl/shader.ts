import { registerOnUnload } from '../registerOnUnload'

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
    const shader: WebGLShader | null = gl.createShader(type)
    if (!shader) {
        return null
    }
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!success) {
        console.log(`Shader compiling error: ${gl.getShaderInfoLog(shader)}`)
        gl.deleteShader(shader)
        return null
    }
    return shader
}

export function createProgram(gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram | null {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) {
        return null
    }
    const program = gl.createProgram()
    if (!program) {
        gl.deleteShader(vertexShader)
        gl.deleteShader(fragmentShader)
        return null
    }
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    const success = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!success) {
        console.log(`Shader Program error: ${gl.getProgramInfoLog(program)}`)
        gl.deleteProgram(program)
        return null
    }
    registerOnUnload(() => {
        gl.deleteProgram(program)
    })
    return program
}