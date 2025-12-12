let usuario = {
    nome: 'roberto',
    excluir:  function(){
        console.log('Exclusao concluida do usuario: ' + this.nome + '!')
    }
}
usuario.excluir()