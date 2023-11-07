import zones from '../data/zonas.json' assert { type: 'json'}

const refSelect = document.getElementById("states-select")
const containerZone = document.getElementById("container-zones")

refSelect.addEventListener('change', generateCards)

document.addEventListener('DOMContentLoaded', generateCards);

function generateCards () {
    const state = refSelect.value
    let cardsZones = ""
    for (const zone of zones){
        if (zone.estado.includes(state)) cardsZones += `<li>${zone.nombre}</li>`
    }

    containerZone.innerHTML = cardsZones
}