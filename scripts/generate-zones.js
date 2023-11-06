import zones from '../data/zonas.json' assert { type: 'json'}

const url_string = (window.location.href).toLowerCase()
let url = new URL(url_string);
let id = Number(url.searchParams.get("id"));

generateItem(zones[id-1])

function generateItem(zone){
    const idInfoZone = document.getElementById('info-zone');

    if(zone === undefined){
        idInfoZone.innerHTML = `<div class="error-msg">No se encontró la zona arqueológica</div>`
        return
    }

    const name = document.getElementById('name')
    const photo = document.getElementById('container-photo')
    const state = document.getElementById('state')
    const access = document.getElementById('access')
    const meaning = document.getElementById('meaning')
    const culture = document.getElementById('culture')
    const coordinates = document.getElementById('coordinates')
    const map = document.getElementById('map')

    name.innerText = zone.nombre
    photo.innerHTML = `<img class="img-zone" src=${zone.foto}>`
    state.innerText = zone.estado
    access.innerText = zone.abierto ? "Abierto" : "Cerrado" 
    meaning.innerText = zone.significado
    coordinates.innerHTML = zone.coordenadas
    map.innerHTML = `<iframe src="${zone.map}"
        width="600" height="450" style="border:0;" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>`

    if(typeof zone.relevanciaCultural === 'string'){
        culture.innerHTML = `<p>${zone.relevanciaCultural}</p>`
    }else {
        for (const subtheme in zone.relevanciaCultural) {
            culture.innerHTML += `
                <h5>${subtheme}</h5>
                <p>${zone.relevanciaCultural[subtheme]}</p>
            `
        }
    }

}