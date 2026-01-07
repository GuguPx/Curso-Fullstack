import {Customer} from "./customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number;
}
const specialCustomer: SpecialCustomer = {
    couponQuantity: 30,
    name:'Maria',
    age: 39
}