// let campo = document.getElementById('form1').addEventListener('change', function(){
//     form1.style.borderColor = 'green';
//     form1.style.borderRadius = '2px'
// })

// console.log(campo)

const textAdd = document.querySelectorAll("#form1");

textAdd.forEach(text => {
    text.addEventListener('change', () =>{
        if(text.value !== ""){
            text.classList.add("campo-preenchido")
        } else {
            text.classList.remove("campo-preenchido")
        }
    })


});