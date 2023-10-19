let UrlBase = 'https://api.openweathermap.org/data/2.5/weather'
let ApiKey = '1eafac7bb776d2dd504ae14a81910089'
let dife_Kelvin = 273.15

/////////////////////////////////////////////////////////////
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})
///////////////////////////////////////////////////////
function fetchDatosClima(ciudad) {
    fetch(`${UrlBase}?q=${ciudad}&appid=${ApiKey}`)
        .then(response => response.json())
        .then(response => mostrarDatos(response))
}

function mostrarDatos(response) {

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const nombreCiudad = response.name
    const nombrePais = response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const humedad= response.main.humidity
    const icon=response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - dife_Kelvin)}ºC`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Descripcion: ${descripcion}`

    const iconInfo=document.createElement('img')
    iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconInfo)
    divDatosClima.appendChild(humedadInfo)
    
    

}

