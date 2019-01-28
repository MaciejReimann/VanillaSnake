const { getState } = require("./store");
const {
  fill,
  clear,
  drawRectangularGrid,
  drawSquareFromCorner,
  drawCircle
} = require("./presentation/helpers/renderHelpers");
const { displayOnTopOfThePage } = require("./presentation/helpers/DOMHelpers");
const {
  snakeColor,
  foodColor,
  gridColor,
  textColor,
  gameOverColor
} = require("./view/colorPalette").darkViolet;

function applyColorsToStyle() {
  document.querySelector(".header").style.backgroundColor = gridColor;
  document.querySelector(".canvas-container").style.backgroundColor = gridColor;
  document.querySelector(".canvas").style.backgroundColor = "black";
  document.querySelector(".header").style.color = textColor;
}

function renderCanvas() {
  const { snake, food, resolution, isOver } = getState();
  const CANVAS = document.querySelector(".canvas");

  clear(CANVAS);
  // when game is over
  if (isOver) {
    fill(CANVAS, gameOverColor);
    displayOnTopOfThePage("Game Over!");
  } else {
    displayOnTopOfThePage("");
  }
  // draw snake
  snake.forEach(square =>
    drawSquareFromCorner(CANVAS, resolution, snakeColor, square)
  );
  // draw food
  drawCircle(CANVAS, resolution, foodColor, food);
  // draw grid
  drawRectangularGrid(CANVAS, resolution, gridColor, 0.5);
}

function updateOptions() {
  document.querySelector(".options").textContent = "GitHub";
}

function updateMessage() {
  const { isStarted, isPaused, isOver } = getState();
  let message;
  if (isOver) {
    message = "To restart press Enter ";
  } else if (!isStarted) {
    message = "To start press Spacebar";
  } else if (isStarted && isPaused) {
    message = "To resume press Spacebar";
  } else {
    message = "To pause press Spacebar";
  }

  document.querySelector(".message").textContent = message;
}

function updateScore() {
  document.querySelector(".score").textContent = getState().score;
}

function render() {
  applyColorsToStyle();
  renderCanvas();
  updateOptions();
  updateMessage();
  updateScore();
}

module.exports = {
  render
};