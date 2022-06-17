(function () {
    // 定义一个类
    class Person {
        // TS 可以在属性前添加属性的修饰符
        /* 
            public 修饰的属性可以在任意位置访问、修改 【默认值】
            private 私有属性，只能在类的内部进行访问、修改
            protected 受保护的，只能在当前类和当前类的子类访问、修改
        */
        private _name: string
        private _age: number
        constructor(name: string, age: number) {
            this._name = name
            this._age = age
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
        get name(): string {
            return this._name
        }
        set name(value) {
            this._name = value
        }
        get age(): number {
            return this._age
        }
        set age(value: number) {
            if (value >= 0) {
                this._age = value
            }
        }
    }

    const per = new Person('刁海志', 19)
    /* 
    属性可以任意修改，导致对象中的数据变得非常不安全
    */
    // per.name = '黄渤'
    // console.log(per.name);
    per.age = 1
    console.log(per.age);
})()