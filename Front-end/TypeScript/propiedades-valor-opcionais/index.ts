type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}
const newCustomer:Customer = {
    firstName:'João',
    age: 31
}
console.log(newCustomer);

function printNames(firstName: string, lastName?: string){
    console.log(`O primeiro nome é: ${firstName}`);
    console.log(`O último nome é: ${lastName}`)
}

printNames('Augusto');
printNames('augusto', 'Silva');