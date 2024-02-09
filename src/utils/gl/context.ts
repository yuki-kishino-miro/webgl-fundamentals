export function initWebGLContext(width = 500, height = 500): {canvas: HTMLCanvasElement | null; gl:  WebGLRenderingContext | null} {
    const canvas: HTMLCanvasElement | null = document.createElement('canvas')
    if (!canvas) {
        return {
            canvas: null,
            gl: null,
        }
    }
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    const devicePixelRatio = window.devicePixelRatio
    canvas.width = Math.round(width * devicePixelRatio)
    canvas.height = Math.round(height * devicePixelRatio)
    const gl = canvas.getContext('webgl')
    if (!gl) {
        console.error('WebGL context creation error')
        return {
            canvas: null,
            gl: null,
        }
    }
    return {canvas, gl}
}