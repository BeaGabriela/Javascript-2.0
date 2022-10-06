
// var id = document.createElement('p')


// var vaga = document.createElement('p')


// var placa = document.createElement('p')


// var hora_entrada = document.createElement('p')


// var datas_entrada = document.createElement('p')


// var datas_saida = document.createElement('p')


// var hora_saida = document.createElement('p')


// var valor_total = document.createElement('p')

var tb =  document.querySelector('tbody')
function listar() {
    document.querySelector('.limpar').innerHTML = ''
    fetch('http://localhost:5000/projeto_estacionamento/View_vizua')
        .then(res => { return res.json() })
        .then(cadastros => {
            cadastros.forEach(cad => {
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

function limpar() {
    geral.innerHTML = ''
}

