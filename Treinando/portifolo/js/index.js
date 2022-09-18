// function trocarFoto(){
//   var foto = document.getElementById('foto') 
// //   var img = document.createElement('img')
// //   img.setAttribute('id', 'foto')
//   foto.setAttribute('src', './img/eu.png')
// }

// function trocarOutraFoto(){
//     var foto = document.getElementById('foto')
//     foto.setAttribute('src', './img/avatar.png')
// }

// function git(){
//     var git = document.getElementsByClassName('github')
//     var mostrar = document.getElementById('git')
//     var g = document.getElementById('g')
//     // var a = document.createElement('a')
//     // a.setAttribute('href', 'https://github.com/BeaGabriela')


// }
//  function gitnormal(){
//   var mostrar = document.getElementById('git')
//   mostrar.innerHTML= 'Github'
//   mostrar.style.textDecoration = 'none'
//  }


// function linkedin(){
//   var linkedin = document.getElementsByClassName('linkedin')
//    var mostrar = document.getElementById('linkedim')
//    var l = document.getElementById('l')
//     // var a = document.createElement('a')
//     // a.setAttribute('href', 'https://linkedin.com')


// }

// function linkedinnormal(){
//   var mostrar = document.getElementById('linkedim')
//   mostrar.innerHTML= 'Linkedin'
//   mostrar.style.textDecoration = 'none'
// }


// function qualidades(){
//     var res = document.getElementById('res')
//     res.innerHTML = 'Sobre mim:<br>'
//     res.innerHTML += 'Pontual, Versátil e Proativa.<br>'
//     res.innerHTML += 'Nivel de inglês básico.'
//     res.style.color = 'black'

//   }

//   function normal(){
//     var res = document.getElementById('res')
//     res.innerHTML = ''
//     var r = document.getElementById('ho')
//     ho.innerHTML = ''
//   }

//   function hobbys(){
//     var ho= document.getElementById('ho')
//     ho.innerHTML = 'Hobbys:<br>'
//     ho.innerHTML += 'Ler<br>'
//     ho.innerHTML += 'Escrever histórias.<br>'
//     ho.innerHTML += 'Ouvir músicas<br>'
//     ho.innerHTML += 'Pintar quadros, geralmente paisagens.<br>'
//   }

//   function estudos(){
//     var mae = document.getElementById('a')
//     var medio = document.getElementById('m')
//     var extras = document.getElementById('e')
//     var textinho = document.querySelector('#textinho')
//     var p1 = document.getElementById('p1')

//     medio.innerHTML = 'Ensino Médio'

//     extras.innerHTML = 'Cursos Extracurriculares'

//     medio.addEventListener('click', function medios(){
//       textinho.innerHTML ='Júlia Calhau Rodrigues'

//     })



//   }




//     // var mae = document.getElementById('a')
//     // var medio = document.getElementById('ensiomedio')

//     // var btn = document.createElement('button')
//     // btn.innerHTML = 'Ensino Médio'

//     // medio.type =

//     // btn.addEventListener('click', function medio() {
//     //   var d = document.createElement('div')
//     //   btn.setAttribute('id', 'btnzinho')

//     //   var p1 = document.createElement('p')
//     //   p1.innerHTML = 'Ensino Médio Completo<br>'
//     //   p1.innerHTML += 'Escola: Julia Calhau Rodrigues<br>'
//     //   p1.innerHTML += 'Término em dez./2019<br>'
//     //   // var div = document.createElement('div')

//     //    d.append(p1)
//     //    btn.appendChild(d)


//     //  btn.addEventListener('oldblclick', function normal(){
//     //   var p1 = document.createElement('p')
//     //   p1.innerHTML = ''
//     //   btn.append(p1)
//     //  })

//   // })

//   // mae.appendChild(btn)
//   // // document.remove(btn)


//   // console.log(btn)
//   // }

function redes() {
  console.log('a')
  document.querySelector('#redes').style.color = 'red'
  var m = document.querySelector('.main')
  m.innerHTML = ''

  var imgGit = document.createElement('img')
  imgGit.setAttribute('src', '.././img/git.png')
  imgGit.style.height = '40px';
  imgGit.style.backgroundColor = 'white';


  var git = document.createElement('p')
  git.innerHTML = 'GitHub'
  git.innerHTML = 'Projetos em variadas linguagens de programação.'

  var img1 = document.createElement('img')
  img1.setAttribute('src', '.././img/github.jpg')

  var div = document.createElement('div')
  div.style.margin = '20vh 20vw 0 10vw'

  div.appendChild(imgGit)
  div.appendChild(git)
  div.appendChild(img1)

  document.querySelector('.mural').appendChild(div)

  var imgLink = document.createElement('img')
  imgLink.setAttribute('src', '.././img/linkdin.png')
  imgLink.style.height = '50px';

  var linkedin = document.createElement('p')
  linkedin.innerHTML = 'Acesse aqui meu linkedlin'

  var img2 = document.createElement('img')
  img2.setAttribute('src', '.././img/github.jpg')

  var div1 = document.createElement('div')
  div1.style.margin = '20vh 10vw'

  div1.appendChild(imgLink)
  div1.appendChild(linkedin)
  div1.appendChild(img2)

  document.querySelector('.mural').appendChild(div1)
  document.querySelector('.mural').style.display = 'flex'
  document.querySelector('.mural').style.margin = '60x'

}

function cursos(){
  document.querySelector('#cursos').style.color= 'red'

  var img = document.createElement('img')
  img.setAttribute('src', '...')

  var p = document.crateElement('p')
}

function limpar() {
  document.querySelector('.mural').innerHTML = ''
  var div = document.createElement('div')

  var img = document.createElement('img')
  img.setAttribute('src', './img/eu.png')

  var p = document.createElement('p')
  p.innerHTML = 'Beatriz Gabriela'

  div.appendChild(img)
  div.appendChild(p)

  document.querySelector('.main').appendChild(div)
}

function passar() {
  document.querySelector("#fala").innerHTML = 'Clique uma vez para ver as redes sociais, e dois para voltar a tela inicial.'
}

function sair() {
  document.querySelector("#fala").innerHTML = ''
}
