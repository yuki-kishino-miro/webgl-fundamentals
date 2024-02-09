export function appendTask(task: string, id: string, canvas: HTMLCanvasElement | null) {
    const section = document.createElement('section')
    section.setAttribute('id', id)
    const title = document.createElement('h2')
    title.appendChild(document.createTextNode(task))
    section.appendChild(title)
    if (canvas) {
        section.appendChild(canvas)
    } else {
        const message = document.createElement('p')
        message.appendChild(document.createTextNode('WebGL Context Creation Failed.'))
        section.appendChild(message)
    }
    document.body.appendChild(section)
}