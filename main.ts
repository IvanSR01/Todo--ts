type TypeUser = {
	name: string,
	age:number,
	address: string
}
const user: TypeUser = {
	name:'23',
	age:2 ,
	address: ''
}
let array: string[] = ['1', '2', '3']

type TypeArray = [number, string, null] 

type TypeReturn = {
	name: string
}

type typeChanelFunction = (name:string) => TypeReturn

const getChannel = (name: string): TypeReturn => {
	return { 
		name
	}
}

const getChannelTwo: TypeReturn = name => {
	return { 
		name
	}
}
const getNumbers = (...numbers: number[]) => {
	return numbers
}


class Car{
	name:string
	price: number
	constructor(name:string, price:number) {
		this.name = name
		this.price = price
	}

	
}

interface IUser {
	name: string
	email: string 
}
enum EnumRoles{
	
}