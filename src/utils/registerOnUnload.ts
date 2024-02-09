let onLoadCallbacks: (() => void)[] = []

window.addEventListener("beforeunload", (event) => {
    onLoadCallbacks.forEach((cb) => {
        try {
            cb()
        } catch (err) {
            console.error(err)
        }
    })
    onLoadCallbacks = []
    console.log('unload')
});

export function registerOnUnload(cb: () => void): void {
    onLoadCallbacks.push(cb)
}
