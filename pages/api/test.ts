// Basic types
let id: number = 5
let company: string = 'Traversy'
let isPublished: boolean = true
let x: any = "Hello"
let age: number

let ids: number[] = [1,2,3]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string] = [1, 'Brd']
// Tuple array
let employee: [number, string][]

employee = [
	[1, 'Brad'],
	[2, 'Brad'],
	[3, 'Brad'],
]

// Union (for variables hold more than one type)
let pid: string | number = 22
pid = '22'

// Enum
enum Direction1 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left', 
	Right = 'Right'
}

console.log(Direction1.Up)

// Ojbects 
type User = {
	id: number, name:string
}
const user: User = {
	id: 1, 
	name: 'John'
}

// Type assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number

customerId = 23
// customerId = true



// Functions
function addNum(x: number, y: number): number{
	return x+y
}

// void => dont need to return anything
function log(message: string | number): void{
	console.log(message)
}

// Interfaces
// kind of like custom type
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

const user1: UserInterface = {
	id:1,
	name: 'John'
}

type Point = number | string
// interface Point = number | string //notOK

// user1.id = 5 // cannot assign

// use interfaces with functions
interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
	id: number
	name: string

	constructor(id:number, name:string){
		console.log(1233)
		this.id = id
		this.name = name
	}
}

const brad = new Person(3, 'brad')
const tom = new Person(4, 'tom')

















