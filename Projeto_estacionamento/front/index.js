var tb = document.querySelector('tbody')

function listar() {
    document.querySelector('.limpar').innerHTML = ''
    fetch('http://localhost:5000/projeto_estacionamento/View_vizua')
        .then(res => { return res.json() })
        .then(cadastros => {
            cadastros.forEach(cad => {
                var tabela = document.querySelector('.tabela')
                tabela.classList.remove('model')
                var geral = document.querySelector('.geral').cloneNode(true)
                geral.classList.remove('model')

                geral.querySelector('#id').innerHTML = cad.id
                geral.querySelector('#vaga').innerHTML = cad.vaga
                geral.querySelector('#placa').innerHTML = cad.placa
                geral.querySelector('#hora_entrada').innerHTML = cad.hora_entrada
                geral.querySelector('#datas_entrada').innerHTML = cad.datas_entrada
                geral.querySelector('#datas_saida').innerHTML = cad.datas_saida
                geral.querySelector('#hora_saida').innerHTML = cad.hora_saida
                geral.querySelector('#valor_total').innerHTML = cad.valor_total
                console.log('to aqui. Mas nao to indo')
                tb.appendChild(geral)
            })
        })
}

function cadastrar() {
    document.querySelector('.limpar').innerHTML = ''
    var nav = document.createElement('nav')

    var InputPlaca = document.createElement('input')
    InputPlaca.setAttribute('placeholder', 'placa')

    var InputHora_e = document.createElement('input')
    InputHora_e.setAttribute('placeholder', 'hora_entrada')

    var InputData_e = document.createElement('input')
    InputData_e.setAttribute('placeholder', 'datas_entrada')

    var InputHora_saida = document.createElement('input')
    InputHora_saida.setAttribute('placeholder', 'hora_saida')

    var InputData_saida = document.createElement('input')
    InputData_saida.setAttribute('placeholder', 'datas_saida')

    var InputValorTotal = document.createElement('input')
    InputValorTotal.setAttribute('placeholder', 'valor_total')

    var InputVaga = document.createElement('input')
    InputVaga.setAttribute('placeholder', 'vaga')

    var btn = document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', 'Cadastrar')

    nav.appendChild(InputPlaca)
    nav.appendChild(InputVaga)
    nav.appendChild(InputHora_saida)
    nav.appendChild(InputData_saida)
    nav.appendChild(InputValorTotal)
    nav.appendChild(btn)

    btn.addEventListener('click', () => {
        let func = {
            'vaga': InputVaga.value,
            'placa': InputPlaca.value,
            'datas_saida': InputData_saida.value,
            'hora_saida': InputHora_saida.value,
            'valor_total': InputValorTotal.value
        };
    
        fetch('http://localhost:5000/projeto_estacionamento/View_vizua', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(func)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.vaga !== undefined) {
                    alert("Carro Cadastrado Com Sucesso !");
                    window.location.reload();
                } else {
                    alert("Falha ao cadastrar Carro");
                }
            })
     
})
document.querySelector('.mamae').appendChild(nav)
}

function limpar() {
    geral.innerHTML = ''
}



