const llamarAPI = async () => {
    const response = await fetch('https://talented-fox-panama-hat.cyclic.app/')
    const data = await response.json()
    const dataConFormato = JSON.stringify(data)
    console.log(dataConFormato)
    document.getElementById("respuesta").innerHTML = dataConFormato
}

document.getElementById("llamar").onclick = () => {
    llamarAPI()
}