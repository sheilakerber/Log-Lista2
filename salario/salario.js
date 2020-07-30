/*Faça um programa para ler o salário anual de um
funcionário e o piso salarial mensal da sua categoria.
Mostrar salário mensal do funcionário e dizer se está
abaixo ou acima do piso salarial mensal.*/

function verificarPiso() {
    //pegar valores dos inputs
    var salarioAnual = parseInt(document.getElementById("salarioAnual").value) * 1000
    var pisoSalarialCategoria = parseInt(document.getElementById("pisoSalarial").value) * 1000
    var resVerificar = document.getElementById("resultado")

    //calcular quanto o usuario recebe por mes
    var salarioMensalUsuario = (parseInt(salarioAnual) / 12)

    //formatar valor do salario mensal em reais [R$ 10,500.00]
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    //validar entrada de dados
    if (salarioAnual == 0 || pisoSalarialCategoria == 0) {
        window.alert("[Erro] Verifique seus dados.")
    } else {
        //se o salario mensal recebido for maior que o piso mensal, usuario recebe acima do piso
        if (salarioMensalUsuario > pisoSalarialCategoria) {
            resVerificar.innerHTML = `Você recebe R$ ${formatter.format(salarioMensalUsuario)} mensais. `
            resVerificar.innerHTML += `Seu salário está ACIMA do piso salarial da sua categoria.`

            //se o salario mensal recebido for menor que o piso mensal, usuario recebe abaixo do piso
        } else if (salarioMensalUsuario < pisoSalarialCategoria) {
            resVerificar.innerHTML = `Você recebe R$ ${formatter.format(salarioMensalUsuario)} mensais. `
            resVerificar.innerHTML += `Seu salário está ABAIXO do piso salarial da sua categoria.`

            //se o salario mensal recebido for igual ao piso mensal, usuario recebe o piso
        } else {
            resVerificar.innerHTML = `Você recebe R$ ${formatter.format(salarioMensalUsuario)} mensais. `
            resVerificar.innerHTML += `Seu salário está EQUIVALENTE ao piso salarial da sua categoria.`
        }
    }
}

function limparInputs() {
    salarioAnual.value = salarioAnual.defaultValue
    pisoSalarial.value = pisoSalarial.defaultValue
}