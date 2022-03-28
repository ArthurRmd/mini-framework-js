
function component(baliseName, {text, attributs: attributs, className, style}) {
    const element = document.createElement(baliseName)

    if (text) {
        element.innerText = text
    }

    if (Array.isArray(className)) {
        element.classList.add(...className)
    }

    if (style) {
        addCss(element, style)
    }

    if (attributs !== undefined) {
        for (const [key, value] of Object.entries(attributs)) {
            element.setAttribute(key,value)
        }
    }

    return element
}

function div(child, options = {}) {
    return component('div', options)
        .appendChild(child)
}

function column(children, options = {}) {
    const element = component('div', options)
    children.forEach(child => {
        element.appendChild(child);
    })
    return element
}
