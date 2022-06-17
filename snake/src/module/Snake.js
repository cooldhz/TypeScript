class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector("#snake > div");
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇的坐标【蛇头坐标】
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头的坐标
    set X(value) {
        this.head.style.left = value + 'px';
    }
    set Y(value) {
        this.head.style.top = value + 'px';
    }
    // 添加蛇身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
}
export default Snake;
