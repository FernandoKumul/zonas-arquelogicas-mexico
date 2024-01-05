import zones from '../data/zonas.json' assert { type: 'json'}

const refSelect = document.getElementById("states-select")
const numZones = document.getElementById("num-zones")
const containerZone = document.getElementById("container-zones")

refSelect.addEventListener('change', generateCards)

document.addEventListener('DOMContentLoaded', generateCards);

window.addEventListener('load', () => {
    refSelect.value = ""
})

function generateCards () {
    const state = refSelect.value
    let countZones = 0
    let cardsZones = ""
    for (const zone of zones){
        if (zone.estado === state || state === "") {
            countZones++
            cardsZones += `        
            <div class="card-item">
                <div class="content-img">
                    <img loading="lazy" onerror="this.onerror=null;this.src='./assets/default-img.jpg';" src="${zone.foto}" alt="${zone.name}">
                </div>
                <p class="name">${zone.nombre}</p>
                <div class="card-info">
                    <div class="state-location">
                        <img src="./assets/bxs-map.svg" alt="icon-map">
                        <p>${zone.estado}</p>
                    </div>
                    <div class="chip ${zone.abierto ? "open" : "close"}">
                        <p>${zone.abierto ? "Abierto al público" : "Cerrado al público"}</p>
                    </div>
                </div>
                <a class="button-more" href="./zona.html?id=${zone.id}">Saber más...</a>
            </div>`
        }
    }

    containerZone.innerHTML = cardsZones
    numZones.innerText = countZones
}