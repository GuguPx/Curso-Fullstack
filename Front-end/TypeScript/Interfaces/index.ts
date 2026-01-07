interface ICustomer {
    name: string;
    age: number;
}
interface IAddress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAddress{
    id: number | string;
}
const newProfile: ICustomerProfile = {
    name:'Augusto',
    age: 30,
    street: 'Rua XYZ',
    id: 'dia 19/02'
}


type TCustomer = {
    name: string;
    age: number;
}
type TAddress = {
    street: string;
}

type TCustomerProfile = TCustomer & TAddress;

const newProfile2: TCustomerProfile = {
    name:'Augusto',
    age: 30,
    street: 'Rua XYZ'
}