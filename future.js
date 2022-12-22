const job=document.getElementById("container")
const imgapi=document.getElementById("imgapi")
const button=document.getElementById("button")
button.onclick=()=>{
    // For dog image
   // fetch('https://dog.ceo/api/breeds/image/random')

    // FOR meme
    fetch('https://meme-api.com/gimme')
    .then(response=>response.json())
    .then(photo=>{
         console.log(photo.url)
         imgapi.innerHTML=`<img src='${photo.url}'/>`;
        }) 
}