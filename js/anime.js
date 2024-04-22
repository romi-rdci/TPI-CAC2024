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

const urlJSON1 = 'anime.json';
const urlJSON2 = 'series.json';
const urlJSON3 = 'videoJuegos.json';

// Cargar los archivos JSON
Promise.all([cargarJSON(urlJSON1),cargarJSON(urlJSON2),cargarJSON(urlJSON3)])
    .then(data => {
        const data1 = data[0];
        const data2 = data[1];
        const data3 = data[2];

        anime = document.querySelector(".anime")
        divElement = document.createElement('div')
        
        imagen = document.createElement('img')
        imagen.src = data.img
        imagen.classList.add('imgAnime')
        divElement.appendChild(imagen)
        anime.appendChild(divElement)

        divElementTtl = document.createElement('div')
        h4Element = document.createElement('h4')
        h4Element.style.fontSize = "25px"
        h4Element.classList.add('ttlAnime')
        texto = document.createTextNode(data.name)
        h4Element.appendChild(texto)
        divElementTtl.appendChild(h4Element)
        divElement.appendChild(divElementTtl)
        
});


