function list(children, options = {}) {
    const element = component('ul', options)
    children.forEach(child => {
        const li = component('li', options)
        li.appendChild(child);
        element.appendChild(li)
    })
    return element
}

function img(src, options) {
    return component('img', {
        ...options,
        attributs: {
            ...options.attributs,
            src
        }
    })
}

function a(href, child,options) {
    return component('a', {
        ...options,
        child,
        attributs: {
            ...options.attributs,
            href,

        }
    })
}