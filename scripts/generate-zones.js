import zones from '../data/zonas.json' assert { type: 'json'}

const url_string = (window.location.href).toLowerCase()
let url = new URL(url_string);
let id = Number(url.searchParams.get("id"));

generateItem(zones[id-1])

function generateItem(zone){
    
}