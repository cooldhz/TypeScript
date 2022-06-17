// 定义记分牌的类
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        // 分数
        this.score = 0;
        // 等级
        this.level = 1;
        this.scoreSpan = document.getElementById("score-span");
        this.levelSpan = document.getElementById("level-span");
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置加分数
    addScore() {
        this.score++;
        this.scoreSpan.innerHTML = this.score + '';
        if (this.score % this.upScore === 0) {
            // 增加难度等级
            this.addLevel();
        }
    }
    // 设置加等级
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelSpan.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel;
