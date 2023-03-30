const llamarAPI = async () => {
    const response = await fetch('https://talented-fox-panama-hat.cyclic.app/')
    const data = await response.json()
    console.log(data)
}

document.getElementById("llamar").onclick = () => {
    llamarAPI()
}