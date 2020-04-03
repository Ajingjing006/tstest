let bool : boolean = true
let num : number | null= 123
let str : string = '1234'

let arr : number[] = [1,2,3,4]
let arr2 : Array<number | string> = [1,3,'5'] //数组
arr2.push('123')

let yz : [number, string, boolean] = [1,'9', true]//元组禁止越界访问，初始化后访问就被限制了
yz.push(19)
yz[0] = 18

let un:undefined = undefined
let nu:null = null

num = nu

enum Role {
	first = 9,
	second,
	third
}

enum str2 {
	First2,
	Second2 = '1',
	third = 'hello'
}

enum char {
	a,
	b = char.a,
	c = 1 + 3,
	d = (b + '').length
}



let m1 : Month = 11
// console.log(m1)

const enum Month2 {
	Jan = '1',
	Feb = '3',
	Mar = '5'
}

let month = [Month2.Feb,Month2.Jan]

let m2 : Month2 = Month2.Feb
console.log(m2)

// let m3 : Month2.Feb = Month2.Jan
// let m4 : Month2.Jan = Month2.Feb

// let m5 : Month.Jan = 3

const enum Month {//枚举
	Janx = 0,//0
	Febx = 1,//1
	Marx = 2//2
}

const enum Month3 {//枚举
	Jan = 'a',
	Feb = 'b',
	Mar = 'c'
}

// interface m { //接口定义
//     m6: Month.Feb
// }

var mx : Month.Marx = 99;

console.log('mx', mx, Month.Janx)

// var mx : Month3.Mar = 'c';

// console.log('mx', mx, Month3.Jan)

// let M1 : m = {
// 	m6: 0 //正常
// }

// let M2 : m = {
// 	m6: Month.Jan // 报错
// }

// let M3 : m = {
// 	m6: Month.Feb // 正常
// }

// let m7 : Month.Feb = Month.Jan //报错

// console.log(Month.Jan === 0, m6) // true

// render(result)

interface List {
	id: number;
	name: string;
}
interface Result {
	data:List[]
}
function render2(result:Result) {
	result.data.forEach((item, index)=>{
		console.log(item.id, item.name)
	})
}

let result2 = {
	data: [
		{id: 1, name: 'A'},
		{id: 2, name: 'B'}
	]
}

interface Todo {
	thing : string;
	time : string;
	[y:string] : any;
}

interface TodoList {
	list : Todo[]
}

function doingThings(todoList : TodoList) {
	todoList.list.forEach((todo, index)=>{
		console.log(todo.thing, todo.time)
	})
}

var dataList = {
	list: [
		{thing: '吃饭', time: '20mins', comment: '不要看手机'},
		{thing: '睡觉', time: '480mins'},
		{thing: '打豆豆', time: '50mins'}
	]
}

// doingThings(dataList)
doingThings({
	list: [
		{thing: '吃饭', time: '20mins', comment: '不要看手机'},
		{thing: '睡觉', time: '480mins'},
		{thing: '打豆豆', time: '50mins'}
	]
})
// doingThings({
// 	list: [
// 		{thing: '吃饭', time: '20mins', comment: '不要看手机'},
// 		{thing: '睡觉', time: '480mins'},
// 		{thing: '打豆豆', time: '50mins'}
// 	]
// } as TodoList)

//函数接口写法
//1
let fn0 : (x:number, y:number) => number
fn0 = (x,y) => x - y
console.log(fn0(2, 3))
//2
interface Fn1 {
	(x:number, y:number): number
}
let fn1:Fn1 = (x, y) => x * y
console.log(fn1(10, 4))
//3
type Fn3 = (x:number, y:number)=> number
let fn3:Fn3 = (x, y) => x**y
console.log(fn1(2, 3))

