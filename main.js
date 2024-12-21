
let continar = document.querySelector('.continar')
let continarDiv = Array.from(document.querySelectorAll('.continar div'))
console.log(continarDiv)


for(let i = 0 ; i < continarDiv.length ; i++){
    continarDiv[i].addEventListener('click' , function(e){
       let x =  e.target.getAttribute('data-color')
       document.body.style.backgroundColor= x
       for( let i = 0 ; i < continarDiv.length ; i++ ){
           continarDiv[i].classList.remove('actev')

       }
       continarDiv[i].classList.add('actev')
       localStorage.setItem('colorBg' , JSON.stringify(continarDiv))
       // localStorage.getItem(JSON.parse(continarDiv))
    })
}

JSON.parse(localStorage.getItem('colorBg'))
