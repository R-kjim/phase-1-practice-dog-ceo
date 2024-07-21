console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",()=>{
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res=>res.json())
.then(data=>useData(data))
function useData(item){
    for(let i=0;i<(item.message).length;i++){
    let myImg=document.createElement("img")
    myImg.setAttribute('src',`${item.message[i]}`)
    document.querySelector("#dog-image-container").appendChild(myImg)
}
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(res=>res.json())
.then(data=>mydataFn(data))
function mydataFn(item){
    let myKeys=Object.keys(item.message)
    console.log(myKeys)
    for(let j=0;j<myKeys.length;j++){
        let li=document.createElement("li").innerText=`${myKeys[j]}`
        document.querySelector("#dog-breeds").append(li)
    }
}

})