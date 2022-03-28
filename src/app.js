// Helper
function addCss(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

//


class Component {

    constructor(baliseName, {text, attributs: attributs, className, style}) {
        this.baliseName = baliseName
        this.text = text
        this.attributs = attributs;
        this.className = className
        this.style = style
    }

    render() {
        const element = document.createElement(this.baliseName)

        if (this.text) {
            element.innerText = this.text
        }

        if (Array.isArray(this.className)) {
            element.classList.add(...this.className)
        }

        if (this.style) {
            addCss(element, this.style)
        }

        if (this.attributs !== undefined) {
            for (const [key, value] of Object.entries(this.attributs)) {
                element.setAttribute(key,value)
            }
        }

        return element
    }
}

class H1 {

    constructor(text,options) {
        this.text = text
        this.options = options
    }

    render() {
        return (new Component('h1', {
            ...this.options,
            text:this.text
        })).render()
    }
}


class Div {
    constructor(child, options = {}) {
        this.child = child;
        this.options = options
    }

    render() {
        const element = (new Component('div', this.options)).render()
        element.appendChild(this.child.render())
        return element
    }
}

class List {
    constructor(children, options = {}) {
        console.log(Array.from(children))
        console.log(children)
        this.children = children;
        this.options = options
    }

    render() {
        const element = (new Component('ul', this.options)).render()
        this.children.forEach(child => {
            const li = (new Component('li', this.options)).render()
            li.appendChild(child.render());
            element.appendChild(li)
        })
        return element
    }
}

class Img {

    constructor(src, options) {
        this.src = src
        this.options = options
    }

    render() {
        return (new Component('img', {
            ...this.options,
            attributs: {
                ...this.options.attributs,
                'src': this.src
            }
        })).render()
    }

}

class Column {
    constructor(children, options = {}) {
        this.children = children;
        this.options = options
    }

    render() {
        const element = (new Component('div', this.options)).render()
        this.children.forEach(child => {
            element.appendChild(child.render());
        })
        return element
    }
}

class P {

    constructor(text,options) {
        this.text = text
        this.options = options
    }

    render() {
        return (new Component('p', {
            ...this.options,
            text:this.text
        })).render()
    }
}


const dom = new Div(
    new Column([
        new List([
            new H1('Test'),
            new H1('Bonjour'),
            new H1('Arthur'),
        ]),
        new P('je suis du text'),
        new Img('images/cat.jpg', {attributs: {'alt': 'test'}})
    ])
)


document.querySelector('.root').appendChild(dom.render())