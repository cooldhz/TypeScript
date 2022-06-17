// 定义记分牌的类
class ScorePanel {
    // 分数
    score = 0;
    // 等级
    level = 1
    // 最大等级
    maxLevel: number
    // 设置一个变量表示多少分时升等级
    upScore: number
    // 分数和等级所在的元素,在构造函数中进行初始化
    scoreSpan: HTMLElement
    levelSpan: HTMLElement
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreSpan = document.getElementById("score-span")!
        this.levelSpan = document.getElementById("level-span")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分数
    addScore() {
        this.score++
        this.scoreSpan.innerHTML = this.score + ''
        if (this.score % this.upScore === 0) {
            // 增加难度等级
            this.addLevel()
        }
    }
    // 设置加等级
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelSpan.innerHTML = this.level + ''
        }
    }
}
export default ScorePanel