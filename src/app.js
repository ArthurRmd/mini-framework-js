
const dom =   column([
    list([
        h1('Arthur'),
        p('Test'),
        h4('Bonjour'),
    ]),
    p('je suis du text'),
    a('/second-page.html', h4('go to second page'),{}),
    img('/images/cat.jpg', {})
])

document.querySelector('.root').appendChild(dom)