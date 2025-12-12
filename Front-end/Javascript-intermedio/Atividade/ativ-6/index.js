function abrir(item){
    const aConteudo = document.getElementsByClassName('acordeon');
    const conteudo = Array.from(aConteudo);

    conteudo.forEach((elemento, indice)=> {
        if(indice === item){
            elemento.classList.add('ativo');

        }else{
            elemento.classList.remove('ativo');
        }
    });

}