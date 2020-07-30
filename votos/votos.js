/*Faça um programa para ler o número total de eleitores
de um município, o número de votos brancos, nulos e
válidos. Calcular e escrever o percentual que cada um
representa em relação ao total de eleitores.*/

function calcular() {
    //pegar os valores a partir dos inputs
    var numEleitores = document.getElementById("numTotalEleitores").value
    var numVotosBrancos = document.getElementById("numTotalVotosBrancos").value
    var numVotosNulos = document.getElementById("numTotalVotosNulos").value
    var numVotosValidos = document.getElementById("numTotalVotosValidos").value
    var totalVotos = Number(numVotosBrancos) + Number(numVotosNulos) + Number(numVotosValidos)

    if (numEleitores == "" || numVotosBrancos == "" || numVotosNulos == "" || numVotosValidos == "") {
        window.alert("Verifique seus dados!")
    } else {
        //validar se o numero de votos nao ultrapassa o numero de eleitores
        if (((Number(numVotosBrancos) + Number(numVotosNulos) + Number(numVotosValidos)) > Number(numEleitores))) {
            window.alert("[Erro] Número total de votos ultrapassa o número de eleitores. Verifique seus dados.")
        } else {
            //calcular % de votos (Math.ceil: arrendonda o valor para cima)
            var porcentagemBrancos = Math.ceil(Number(numVotosBrancos) / Number(numEleitores) * 100)
            var porcentagemNulos = Math.ceil(Number(numVotosNulos) / Number(numEleitores) * 100)
            var porcentagemValidos = Math.ceil(Number(numVotosValidos) / Number(numEleitores) * 100)

            //verificar se existem eleitores que nao votaram na eleicao
            var naoVotaram = numEleitores - totalVotos

            var resEleicao = document.getElementById("resultado")
            resEleicao.innerHTML = `Votos válidos: ${porcentagemValidos}%. Votos em branco: ${porcentagemBrancos}%. Votos nulos: ${porcentagemNulos}%.`
            if (numEleitores > totalVotos) {
                resEleicao.innerHTML += ` Nesta eleição, ${naoVotaram} eleitores não votaram.`
            }
        }
    }
}