// 定义食物类
class Food {
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food');
    }
    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop;
    }
    change() {
        // 生成随机的位置
        // 蛇移动一次就是一格,一格的大小就是10,所以要求食物的坐标必须是整10
        this.element.style.left = Math.floor(Math.random() * 29) * 10 + 'px';
        this.element.style.top = Math.floor(Math.random() * 29) * 10 + 'px';
    }
}
export default Food;
