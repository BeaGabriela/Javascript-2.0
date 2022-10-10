var tb = document.querySelector('tbody')
  var l = document.querySelector('.mamae')
  var b = document.querySelector('.botos')
  b.classList.add('model')

function listar(){
    l.classList.remove('model')
    b.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var ListarEntradas= document.querySelector('#ListarEntradas')
    ListarEntradas.addEventListener('click', () => {
        fetch('http://localhost:5000/projeto_estacionamento/entrada')
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
                geral.querySelector('#tipo').innerHTML = cad.tipo
                console.log('to aqui. Mas nao to indo')
                tb.appendChild(geral)
    })
})
    })

    var ListarSaidas= document.querySelector('#ListarSaidas')
    ListarSaidas.addEventListener('click', () =>{
        fetch('http://localhost:5000/projeto_estacionamento/entrada')
        .then(res => { return res.json() })
        .then(cadastros => {
            cadastros.forEach(cad => {
                var tabela = document.querySelector('.tabela')
                tabela.classList.remove('model')
                tabela.cloneNode()

                var table = document.createElement('table')
                var thead = document.createElement('thead')
                var tr = document.createElement('tr')
                var th1 = document.createElement('th')
                var th2 = document.createElement('th')
                var th3 = document.createElement('th')

                th1.innerHTML = 'Id'
                th2.innerHTML = 'Data Saida'
                th3.innerHTML = 'Hora Saida'

                tr.appendChild(th1)
                tr.appendChild(th2)
                tr.appendChild(th3)

                thead.appendChild(tr)

                var tbody = document.createElement('tbody')
                var tr1 = document.createElement('tr')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')

                td1.innerHTML = cad.id
                td2.innerHTML =  cad.datas_saida
                td3.innerHTML = cad.hora_saida

                tr1.appendChild(td1)
                tr1.appendChild(td2)
                tr1.appendChild(td3)

                tbody.appendChild(tr1)

                table.appendChild(thead)
                table.appendChild(tbody)

                tabela.appendChild(table)



               
               
                console.log('to aqui. Mas nao to indo')
                
    })
})
    })
}



function carros() {
   
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
    l.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var nav = document.createElement('nav')

    var InputPlaca = document.createElement('input')
    InputPlaca.setAttribute('placeholder', 'placa')

    // var InputHora_e = document.createElement('input')
    // InputHora_e.setAttribute('placeholder', 'hora_entrada')

    // var InputData_e = document.createElement('input')
    // InputData_e.setAttribute('placeholder', 'datas_entrada')

    // var InputHora_saida = document.createElement('input')
    // InputHora_saida.setAttribute('placeholder', 'hora_saida')

    // var InputData_saida = document.createElement('input')
    // InputData_saida.setAttribute('placeholder', 'datas_saida')

    // var InputValorTotal = document.createElement('input')
    // InputValorTotal.setAttribute('placeholder', 'valor_total')

    var InputVaga = document.createElement('input')
    InputVaga.setAttribute('placeholder', 'vaga')

    var InputTipo = document.createElement('input')
    InputTipo.setAttribute('placeholder', 'tipo')

    var btn = document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', 'Cadastrar')

    nav.appendChild(InputPlaca)
    nav.appendChild(InputVaga)
    nav.appendChild(InputTipo)
    nav.appendChild(btn)

    btn.addEventListener('click', () => {
        let carro = {
            'vaga': InputVaga.value,        
            'placa': InputPlaca.value,
            'tipo': InputTipo.value
        };
    
        fetch('http://localhost:5000/projeto_estacionamento/entrada', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(carro)
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
    var l = document.querySelector('.mamae')
    l.classList.add('model')
}



