
function component(baliseName, {text,  attributs, className, style, child}) {
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
    if (child !== undefined) {
       element.appendChild(child)
    }


    return element
}

function componentWithChild(baliseName, child,{text, attributs: attributs, className, style}) {
    return component(
        baliseName,
        {text, attributs: attributs, className, style,child}
    )
}

function componentWithChildren(baliseName, children,{text, attributs, className, style}) {
    return componentWithChild(baliseName,column(children,{}), {text, attributs, className, style})
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

function addCss(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}
