let peticionVJ = new XMLHttpRequest()
peticionVJ.open('GET','videoJuegos.json')
peticionVJ.onload = function(){

    if( peticionVJ.status == 200 ){
        
        let datos = JSON.parse(peticionVJ.response);  
        
        datos.anime.forEach(data => {
            anime = document.querySelector(".videoJuegos")
            divElement = document.createElement('div')
            
            imagen = document.createElement('img')
            imagen.src = data.img
            imagen.classList.add('videoJuegos')
            divElement.appendChild(imagen)
            anime.appendChild(divElement)

            divElementTtl = document.createElement('div')
            h4Element = document.createElement('h4')
            h4Element.style.fontSize = "25px"
            h4Element.classList.add('ttlvideoJuegos')
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