import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

// 游戏控制器，控制其他所有类
class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    // 存储蛇的移动方向
    direction: string = 'ArrowRight'
    // 创建一个属性用来记录游戏是否结束
    isLive = true
    constructor() {
        // 食物
        this.food = new Food()
        // 积分牌
        this.scorePanel = new ScorePanel()
        // 蛇
        this.snake = new Snake()
    }

    // 游戏的初始化方法，调用游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        /* 
        bind()方法主要就是将函数绑定到某个对象，
        bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()第一个参数的值，
        例如，f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
         */

        // 调用run方法，使蛇移动
        this.run()
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        /*  ArrowUp
            ArrowDown
            ArrowLeft
            ArrowRight 
        */
        this.direction = event.key
    }

    run() {
        // 获取蛇现在坐标
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y)

        // 修改蛇的X Y值
        try {
            this.snake.X = X
            this.snake.Y = Y

        } catch (error) {
            alert((error as Error).message)
            this.isLive = false
        }
        // 开启定时器调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 检查蛇是否吃到食物的方法
    checkEat(X: number, Y: number) {
        if (X === this.food.x && Y === this.food.y) {
            console.log('吃到了！');
            // 食物生成新位置
            this.food.change()
            // 加分
            this.scorePanel.addScore()
            // 添加一段蛇身
            this.snake.addBody()
        }
    }
}

export default GameControl