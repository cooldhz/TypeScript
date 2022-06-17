class Snake {
    // 蛇的容器
    element: HTMLElement
    // 蛇头
    head: HTMLElement
    // 蛇身体
    bodies: HTMLCollection
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector("#snake > div")!
        this.bodies = this.element.getElementsByTagName('div')
    }
    // 获取蛇的坐标【蛇头坐标】
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头的坐标
    set X(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X == value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙啦 Game Over！')
        }
        // 修改X时,蛇左右移动,蛇向左时,不可向右，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value) {
            // 如果用户想向右
            if (value > this.X) {
                value = this.X - 10 //  继续向左
            } else {
                // 如果用户想向左
                value = this.X + 10 //  继续向右
            }
        }
        // 移动身体
        this.moveBody()
        // 设置蛇头位置
        this.head.style.left = value + 'px'
        // 检查蛇头和蛇身是否碰撞
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y == value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙啦 Game Over！')
        }
        // 修改Y时,蛇上下移动,蛇向下时,不可向上，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value) {
            // 如果用户想向下
            if (value > this.Y) {
                value = this.Y - 10 //  继续向上
            } else {
                // 如果用户想向上
                value = this.Y + 10 //  继续向下
            }
        }
        // 移动身体
        this.moveBody()
        // 设置蛇头位置
        this.head.style.top = value + 'px'
        // 检查蛇头和蛇身是否碰撞
        this.checkHeadBody()
    }

    // 添加蛇身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    // 添加蛇身体移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 设置当前身体的位置
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }
    // 检查蛇头和蛇身是否碰撞
    checkHeadBody() {
        // 获取所有的蛇身，判断是否和蛇头的坐标重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 撞到了【游戏结束】
                throw new Error('撞到自己啦 Game Over!')
            }
        }
    }
}

export default Snake