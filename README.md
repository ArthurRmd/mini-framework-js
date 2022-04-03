# mini-framework-js


## Page 1
```javascript
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
```
<p align="center">
    <img src="https://github.com/ArthurRmd/mini-framework-js/blob/master/img.png" width="600">
</p>


## Page 2
```javascript
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
```

<p align="center">
    <img src="https://github.com/ArthurRmd/mini-framework-js/blob/master/img_1.png" width="600">
</p>
