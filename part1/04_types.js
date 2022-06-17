// object 表示一个对象
var a;
a = {};
a = [];
a = function () { };
// {} 用来指定对象中可以包含哪些属性
// 在属性名后面加? 表示属性是可选的
var b;
b = { name: 'dhz', age: 19 };
// [propName: string]: any  表示任意类型的属性
var c;
c = { name: 'dhz', age: 19, gender: 'nan' };
/**
 * 设置函数结构的类型声明:
 *      语法:(形参:类型,形参:类型) => 返回值
 *
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/*
    数组的类型声明
        类型[]
        Array<类型>
*/
// string[] 字符串数组
// number[] 数字数组
var e = ['213'];
var f = [213];
/*
    元组,元组就是固定长度的数组
 */
var g;
g = ['hello', 'ts'];
/*
    enum 枚举
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var h;
h = { name: '刁海志', gender: Gender.Male };
console.log(h.gender === Gender.Male);
