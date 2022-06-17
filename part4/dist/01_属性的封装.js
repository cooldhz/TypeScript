"use strict";
(function () {
    // 定义一个类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName() {
        //     return this.name
        // }
        // setName(name: string) {
        //     this.name = name
        // }
        // getAge() {
        //     return this.age
        // }
        // setAge(age: number) {
        //     if (age < 0) {
        //         return console.log('Age must be greater than 0');
        //     }
        //     this.age = age
        // }
        // TS 中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('刁海志', 19);
    /*
    属性可以任意修改，导致对象中的数据变得非常不安全
    */
    // per.name = '黄渤'
    // console.log(per.name);
    per.age = 1;
    console.log(per.age);
})();
