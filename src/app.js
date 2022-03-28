
function addCss(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

const dom = div(
    column([
         list([
            h1('Arthur'),
            h1('Test'),
            h1('Bonjour'),
        ]),
        p('je suis du text'),
    ])
)


console.log('ici')
document.querySelector('.root').appendChild(dom)