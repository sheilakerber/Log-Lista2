/*Programar a conversão de uma temperatura digitada
pelo usuário em graus Celsius para Fahrenheit. Mostrar o
resultado. */

function converterTemperatura() {
    var tempCelsius = document.getElementById("tempCelsius").value
    var tempFahrenheit = document.getElementById("tempFahrenheit")
    if (tempCelsius == "") {
        window.alert("Faltam dados!")
    } else {
        tempFahrenheit.value = (Number(tempCelsius) * 1.8) + 32
    }
}

function limparInputs() {
    tempCelsius.value = tempCelsius.defaultValue
    tempFahrenheit.value = tempFahrenheit.defaultValue
}