
const snakeColor = "#8cc965";
const wormColor = "#c7823c";

const updateScore = () => {
  const SCORE = document.querySelector(".Score");
  SCORE.textContent = snakeGame.getInstance().getState().score;
}

const updateCanvas = () => {
  const CANVAS = document.querySelector(".canvas");
  const currentGame = snakeGame.getInstance().getState;
  const pixel = currentGame().pixel;
  const snake = currentGame().body;
  const worm = currentGame().worm;

  if(currentGame().isOver) {
    fill(CANVAS)
    return;
  }

  if(currentGame().isStarted) {
    resize(CANVAS)(currentGame().width)(currentGame().height);
    clear(CANVAS);
    // draw snake
    snake.forEach(point => drawSquare(CANVAS)(pixel)(snakeColor)(point));
    // draw worm
    drawCircle(CANVAS)(pixel)(wormColor)(worm);  
  }
}