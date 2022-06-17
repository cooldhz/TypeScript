import './style/index.less'
import GameControl from './module/GameControl'

// import Food from './module/Food'
// import ScorePanel from './module/ScorePanel'
// import Snake from './module/Snake'
// 测试 
// const snake = new Snake()
// console.log(snake.X);

const gameControl = new GameControl()
gameControl.init()
// setInterval(() => {
//     console.log(gameControl.direction);
// }, 1000)