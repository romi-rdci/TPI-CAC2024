peticion = new XMLHttpRequest()
peticion.open('GET','series.json')
peticion.onload = function(){

    if( peticion.status == 200 ){
        
        let datos = JSON.parse(peticion.response);  
        
        datos.anime.forEach(data => {
            anime = document.querySelector(".series")
            divElement = document.createElement('div')
            
            imagen = document.createElement('img')
            imagen.src = data.img
            imagen.classList.add('imgSeries')
            divElement.appendChild(imagen)
            anime.appendChild(divElement)

            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlSeries')
            texto = document.createTextNode(data.name)
            h4Element.appendChild(texto)
            divElementTtl.appendChild(h4Element)
            divElement.appendChild(divElementTtl)
        });
    }
    else
        console.log("Error al cargar el JSON")
}
peticion.send()