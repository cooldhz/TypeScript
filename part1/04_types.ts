// object 表示一个对象
let a: object
a = {}
a = []
a = function () { }

// {} 用来指定对象中可以包含哪些属性
// 在属性名后面加? 表示属性是可选的
let b: { name: string, age?: number }
b = { name: 'dhz', age: 19 }

// [propName: string]: any  表示任意类型的属性
let c: { name: string, [propName: string]: any }
c = { name: 'dhz', age: 19, gender: 'nan' }

/**
 * 设置函数结构的类型声明:
 *      语法:(形参:类型,形参:类型) => 返回值
 * 
 */
let d: (a: number, b: number) => number
d = function (n1, n2): number {
    return n1 + n2
}

/* 
    数组的类型声明
        类型[]
        Array<类型>
*/
// string[] 字符串数组
// number[] 数字数组
let e: string[] = ['213']
let f: number[] = [213]


/* 
    元组,元组就是固定长度的数组
 */
let g: [string, string]
g = ['hello', 'ts']


/* 
    enum 枚举
*/
enum Gender {
    Male,
    Female
}
let h: { name: string, gender: Gender }
h = { name: '刁海志', gender: Gender.Male }
console.log(h.gender === Gender.Male);


// & 表示同时
let i: { name: string } & { age: number }
i = { name: 'dhz', age: 19 }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let j: myType
j = 1
