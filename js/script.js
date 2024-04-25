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


