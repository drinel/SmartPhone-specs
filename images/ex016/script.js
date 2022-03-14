function checar() {
    var numeroInicial = document.getElementById('txtinicio')
    var numeroFinal = document.getElementById('txtfim')
    var numeroPasso = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || numeroPasso.value.length == 0) {
        window.alert('[Erro] Dados faltando!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var a = Number(numeroInicial.value)
        var b = Number(numeroFinal.value)
        var c = Number(numeroPasso.value)
        if (c <= 0) {
            window.alert('Passo inválido, sera substituído por 1')
            c = 1;
        }
        if (a < b) {
            //Contagem  crescente
            for (var resul = a; resul <= b; resul += c) {

                res.innerHTML += `${resul} \u{1F449}`

            }

        } else {
            //Contagem regressiva
            for (var resul = a; resul >= b; resul -= c) {

                res.innerHTML += `${resul} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`



    }
}