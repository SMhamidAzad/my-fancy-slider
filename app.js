const KEY = '15674931-a9d714b6e9d654524df198e00&q';
//   fetch(`https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`)

document.getElementById('searchPic').addEventListener('click',function (){
    const picText = document.getElementById('search-field');
    const pic = picText.value;

    const url = `https://pixabay.com/api/?key=${KEY}=${pic}&image_type=photo&pretty=true`;
    fetch(url).then(res=>res.json()).then(data => displayImage(data.hits)).catch(data=> console.log(data))
})
const displayImage = images =>{
    // console.log(images);
    const imgDiv = document.getElementById('img-container');
    images.forEach(img =>{
        // console.log(img.previewURL);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
        <img  onclick="touchPic(event,'${img.webformatURL}')" src="${img.webformatURL}" class="card-img-top" alt="...">
        </div>
        `;
        imgDiv.appendChild(div)
    })
}
let images = [];
const touchPic = (event,img) =>{
    // console.log(event.target);
    if(images.indexOf(img)===-1){
        event.target.classList.add('touchImg')
        images.push(img);
    }
}
const seeSlider = ()=>{
    document.getElementById('img-container').textContent="";
    const durationText = document.getElementById('duration');
    const duration = durationText.value;

    const sliderDiv = document.getElementById('sliders');
    const img = document.getElementById('img-show');
    let index = 0;
    // console.log(images);
    setInterval(()=>{
         if(index>=images.length){
             index=0;
         }
         const url = images[index];
         img.setAttribute('src',url)
         index++;
    },duration)
}
