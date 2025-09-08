export function limpiarHTML(texto: string) {
    const div = document.createElement("div")
    div.innerHTML = texto
    return div.textContent || div.innerText || ""
}
