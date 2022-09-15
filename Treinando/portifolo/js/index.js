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
function carregando(){
    var  m = document.querySelector('.main').cloneNode(true)
    m.querySelector('img').classList.remove('modal')
}
 function redes(){
  document.querySelector('#redes').style.color= 'red'
  var  m = document.querySelector('.main').cloneNode(true)
    m.querySelector('img').classList.add('modal')
    

 }
