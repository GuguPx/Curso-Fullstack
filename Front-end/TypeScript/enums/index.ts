// enum Colors {
//     Red,
//     Blue,
//     Green
// }
// function showColor(color){
//     console.log(color)
// }
// showColor(Colors.Red); //exibe vermelho

// //podemos percorrer o enum usando o for
// for(const key in Colors){
//     console.log(key)
// }

// enum UserResponse { 
//     No = 0,
//     Yes = 1
// }
// function respondedEmail(_recipient:string, userResponse: UserResponse): void{
//     //...salvar no banco se o usuário respondeu ou não
// }
// respondedEmail('Caroline', UserResponse.Yes);
// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
// }
// saveTrade(TradeType.TESOURO_DIRETO)

// enum StatusCodes {
//     OK = 200,
//     BadRequest = 400,
// }
// StatusCodes.BadRequest

// const ok = StatusCodes.OK; //200
// const indexOk = StatusCodes['OK']; //200
// const stringBadRequest = StatusCodes[400]; //BadRequest



// enum gender{
//     M = 'masculino',
//     F = 'feminino',
// }