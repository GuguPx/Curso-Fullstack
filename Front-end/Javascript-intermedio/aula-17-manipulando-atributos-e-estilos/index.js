function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0];

    console.log('primeiroPost', primeiroPost)

    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande')

    console.log(textoPosts[1].classList)
}
function marcarRadio(genero) {
    let radioFeminino = document.getElementById('genero-feminino');
    
    let radioMasculino = document.getElementById('genero-masculino');

    if(genero === 'F') {
        radioFeminino.checked = true
    }else if (genero === 'M') {
        radioMasculino.checked = true
    }
}