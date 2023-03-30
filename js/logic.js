const llamarAPI = async () => {
    const numero = document.getElementById("numero").value
    let response = ""
    //si numero está vacio o es igual a 0, llamar a la api general
    if (numero == "" || numero == 0) {
        response = await fetch('https://talented-fox-panama-hat.cyclic.app/getAll', {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
    }
    //si no pedir a la api el registro que tenga esa id
    else{
        response = await fetch('https://talented-fox-panama-hat.cyclic.app/get?id='+numero, {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
    }
    const data = await response.json()
    const dataConFormato = JSON.stringify(data)
    console.log(dataConFormato)
    document.getElementById("respuesta").innerHTML = dataConFormato
}

document.getElementById("llamar").onclick = () => {
    llamarAPI()
}