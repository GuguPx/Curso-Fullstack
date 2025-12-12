function corAlterar(){
    let quadre = document.querySelector('.square').classList;
    console.log(quadre)
    if(quadre.contains('azul')){
        quadre.remove('azul')
    }else{
        quadre.add('azul')
    };
    

}