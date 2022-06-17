// 在定义函数或是类时，如果遇到类型不明确就可以使用泛型

function fn<K>(a: K): K {
    return a
}

let result = fn(2)   //  不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hello')   //  指定泛型为 字符型
// console.log(typeof result); //  number
// console.log(typeof result2);//  string




// 可以多个泛型
function fn2<K, T>(a: K, b: T): K {
    return a
}


// 定义一个 接口
interface Interface {
    length: number
}
// T extends Interface 表示泛型 T 必须是Interface实现类
function fn3<T extends Interface>(a: T): number {
    return a.length
}
// 调用fn3 传的实参必须符合Interface 这个接口
// console.log(fn3('123'));


// 泛型也可以在类里面使用
class MyClass<T>{
    name: T
    constructor(name: T) {
        this.name = name
    }
}
const mc = new MyClass('刁海志')
// console.log(typeof mc.name);    //  string

