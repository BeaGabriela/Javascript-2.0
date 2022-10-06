
const geral = document.querySelector('.geral')

function carregar() {
    fetch('')
    .then(res => {return res.json()})
    .then(cadastros => {
        cadastros.forEach(cad => {
            geral.cloneNode(true)
            geral.classList.remove('model')

            var i1 = document.createElement('input')

    })
})
}

