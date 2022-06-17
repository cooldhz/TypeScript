// // 使用字面量进行赋值
// let a: 3
// a = 3

// // 使用 | 来连接多个类型(联合类型)
// let b: string | boolean
// b = '123'
// b = true

// let c: 'male' | 'female'
// c = 'male'
// c = 'female'

// // any 任意类型(相当于对该变量关闭的TS的类型检测)
// // 使用TS 时,不建议使用any类型
// let d: any
// d = '123'
// d = 123
// d = true

// // unknown : 表示为止类型的值
// let e: unknown
// e = 10
// e = 'hello'
// e = true

// let f: string
// // d 的类型时any,它可以赋值给任意变量
// f = d

// e = 'hello'

// // unknown 实际上就是一个类型安全的any
// // unknown 类型的变量,不能直接赋值给其他变量
// if (typeof e === 'string') {
//     f = e
// }

// // 类型断言,可以用来告诉解析器变量的实际类型
// f = e as string
// f = <string>e

// // void 用来表示空,以函数为例,就表示没有返回值的函数
// function fn(): void {
//     alert(123)
// }

// // never 表示永远不会返回结果
// function fn2(): never {
//     throw new Error('fail')
// }