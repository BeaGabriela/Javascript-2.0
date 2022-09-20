function vagas(){
    var v = document.querySelector('#fileira1');
    v.cloneNode(true);

    let c = v.querySelectorAll('a')

    c[1].addEventListener('keyup', () => {
        document.querySelector('valores').value = 'v1'
    })
}


