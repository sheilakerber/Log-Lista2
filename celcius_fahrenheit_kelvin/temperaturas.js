function converterTemperatura() {
    //pegar a temperatura inserida pelo usuario
    var temperatura = document.getElementById("tempEntrada").value

    if (temperatura == "") {
        window.alert("Insira a temperatura a ser convertida.")

    } else {
        //pegar a opcao de conversao escolhida
        var tipoConversao = document.getElementById("selectElement")
        var optionConversao = tipoConversao[tipoConversao.selectedIndex].value

        //pegar input "Resultado"
        var resultadoConversao = document.getElementById("tempSaida")

        if (optionConversao == "Celcius para Kelvin") {
            temperatura = Number(temperatura) + Number(273.15)
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }

        if (optionConversao == "Celcius para Fahrenheit") {
            temperatura = (Number(temperatura) * (9 / 5)) + Number(32)
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }

        if (optionConversao == "Kelvin para Celcius") {
            temperatura = Number(temperatura) - Number(273.15)
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }

        if (optionConversao == "Kelvin para Fahrenheit") {
            //temperatura = ((Number(temperatura) - Number(273.15)) * Number(5 / 9)) + 32

            temperatura = ((Number(temperatura) - Number(273.15)) * Number(9 / 5)) + Number(32)
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }

        if (optionConversao == "Fahrenheit para Celcius") {
            temperatura = (Number(temperatura) - 32) * Number(5 / 9)
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }

        if (optionConversao == "Fahrenheit para Kelvin") {
            temperatura = (((Number(temperatura) - Number(32)) * (5 / 9))) + 273.15
            resultadoConversao.placeholder = parseFloat(temperatura).toFixed(2)
        }
    }
}

function limparInputs() {
    document.getElementById("tempEntrada").value = ""
    document.getElementById("tempSaida").placeholder = "Resultado"
}