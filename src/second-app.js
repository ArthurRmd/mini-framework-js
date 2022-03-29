
const dom =
    componentWithChildren('article',[
        column([
                p('hello'),
                component('button',{'attributs' : {
                        'className':'delete',
                        'aria-label':'delete'
                    }})
            ], {'className':['message-header']}
        ),
        div(
            p(' je suis du text'),{'className':['message-body', 'p-5']}),
    ], {'className':['message', 'm-5']})


document.querySelector('.root').appendChild(dom)