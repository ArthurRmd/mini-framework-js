function createText(balise,text,options){
    return component(balise, {
        ...options,
        text:text
    })
}

function p (text,options) {
    return createText('p',text,options)
}

function h1 (text,options) {
  return createText('h1',text,options)
}

function h2 (text,options) {
    return createText('h2',text,options)
}

function h3 (text,options) {
    return createText('h3',text,options)
}

function h4 (text,options) {
    return createText('h4',text,options)
}

function h5 (text,options) {
    return createText('h5',text,options)
}