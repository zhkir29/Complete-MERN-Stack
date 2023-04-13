window.onload = function(){
    main();
}

function main(){
    const body = document.getElementById('root')
   const app =  Container([Text('h1','What is the purpose of FrontEnd Development.'),
Text('p','The purpose of front End developemnt is to make user interfaces by which user can interact.'),
Container([Text('h2','Hello World.'),Text('p','This container is all about the lecture number 29 at full stack army.')],
{
    background:'gray',
    color: 'black'
})],{
    display:'flex',
    gap:'2rem'
});

    body.appendChild(app);
}

function Container(elements,style = {}){
    const div = document.createElement('div');

    Object.keys(style).map((key=>{
        div.style[key] = style[key];
    }))
    elements.forEach(element => {
        div.appendChild(element)
    });

    return div;
}

function Text(tag,value){
    const t = document.createElement(tag);
    t.innerText = value;
    return t;
}