function cargarJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

const urlJSON0 = 'peliculasAclamadas.json'
const urlJSON1 = 'anime.json'
const urlJSON2 = 'series.json'
const urlJSON3 = 'videoJuegos.json'

// Cargar los archivos JSON
Promise.all([cargarJSON(urlJSON0),cargarJSON(urlJSON1),cargarJSON(urlJSON2),cargarJSON(urlJSON3)])
    .then(data => {
        const data0 = data[0]
        const data1 = data[1]
        const data2 = data[2]
        const data3 = data[3]

        aclamadas = document.querySelector(".peliculasAclamadas")

        data0.aclamadas.forEach( element => {

            divElement = document.createElement('div')
            imagen = document.createElement('img')
            imagen.src = element.img
            imagen.classList.add('imgAclamadas')
            divElement.appendChild(imagen)
            aclamadas.appendChild(divElement)
    
            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlAclamadas')
            texto = document.createTextNode(element.name)
            h4Element.appendChild(texto)
            divElementTtl.appendChild(h4Element)
            divElement.appendChild(divElementTtl)
            
        });


        anime = document.querySelector(".anime")

        data1.anime.forEach( element => {

            divElement = document.createElement('div')
            imagen = document.createElement('img')
            imagen.src = element.img
            imagen.classList.add('imgAclamadas')
            divElement.appendChild(imagen)
            anime.appendChild(divElement)
    
            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlAclamadas')
            texto = document.createTextNode(element.name)
            h4Element.appendChild(texto)
            divElementTtl.appendChild(h4Element)
            divElement.appendChild(divElementTtl)
            
        });


        series = document.querySelector(".series")

        data2.series.forEach( element => {

            divElement = document.createElement('div')
            imagen = document.createElement('img')
            imagen.src = element.img
            imagen.classList.add('imgAclamadas')
            divElement.appendChild(imagen)
            series.appendChild(divElement)
    
            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlAclamadas')
            texto = document.createTextNode(element.name)
            h4Element.appendChild(texto)
            divElementTtl.appendChild(h4Element)
            divElement.appendChild(divElementTtl)
            
        });


        videoJuegos = document.querySelector(".videoJuegos")

        data3.videoJuegos.forEach( element => {

            divElement = document.createElement('div')
            imagen = document.createElement('img')
            imagen.src = element.img
            imagen.classList.add('imgAclamadas')
            divElement.appendChild(imagen)
            videoJuegos.appendChild(divElement)
    
            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlAclamadas')
            texto = document.createTextNode(element.name)
            h4Element.appendChild(texto)
            divElementTtl.appendChild(h4Element)
            divElement.appendChild(divElementTtl)
            
        });


});
//consumo de api movie db
const apiKey = "46463a3dc58678f6131bc5b3d77325aa";
const url = 'https://api.themoviedb.org/3/movie/now_playing'
let page = 1
const url_imagen = "https://image.tmdb.org/t/p/w500";
const container = document.querySelector(".container .row");
const next = document.querySelector(".siguiente")
const prev = document.querySelector(".anterior")

const getData = async ()=>{
    const response = await fetch(`${url}?api_key=${apiKey}&page=${page}`);
    const dataJson = await response.json();
    const results = await dataJson.results;
    return results;
}


const containerWrite = (results)=>{
    for (result of results){
        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
                    <div class="card">
                        <div class="card-face card-front">
                            <img class="imgTendencia" src="${url_imagen}${result.poster_path}" alt="Badland Hunters">
                        </div>
                        <div class="card-face card-back">
                            <a class="ttlMovie" href="./html/pages/detalles.html">${result.title}</a>
                        </div>
                    </div>
        ` ;
        movieCard.classList.add("card-container")
        movieCard.classList.add("p-3")
        container.appendChild(movieCard);
    }
}

document.addEventListener("DOMContentLoaded",async ()=>{
    const results = await getData();
    containerWrite(results.slice(0,8));
    
});

next.addEventListener("click",async()=>{
    
    const results = await getData();
    container.innerHTML="";
    containerWrite(results.slice(8,16));
    prev.classList.toggle("hide")
})
prev.addEventListener("click",async()=>{
    
    const results = await getData();
    container.innerHTML="";
    containerWrite(results.slice(0,8));
    prev.classList.toggle("hide")
})


