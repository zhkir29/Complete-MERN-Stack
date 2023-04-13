const shortId = () =>{
    const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,'a','b',"c",'d','e','f','g','h','i','j','k','l','m','n']
    let id = ""
    for(let i =0; i<=20;i++){
    const len = (Math.floor(Math.random()*char.length))+1;
    id+=char[len]
    }
    return id;
}

export default shortId;
