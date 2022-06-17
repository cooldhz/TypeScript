import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';
// 游戏控制器，控制其他所有类
class GameControl {
    constructor() {
        // 存储蛇的移动方向
        this.direction = 'aa';
        // 食物
        this.food = new Food();
        // 积分牌
        this.scorePanel = new ScorePanel();
        // 蛇
        this.snake = new Snake();
    }
    // 游戏的初始化方法，调用游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        /*
        bind()方法主要就是将函数绑定到某个对象，
        bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()第一个参数的值，
        例如，f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
         */
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event) {
        console.log(event.key);
        /*  ArrowUp
            ArrowDown
            ArrowLeft
            ArrowRight
        */
        this.direction = event.key;
    }
}
export default GameControl;
