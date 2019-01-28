const {
  fill,
  clear,
  drawRectangularGrid,
  drawSquareFromCorner,
  drawCircle
} = require("./helpers/renderHelpers");

const {
  snakeColor,
  foodColor,
  gridColor,
  textColor,
  gameOverColor
} = require("./colors").darkViolet;
const { displayOnTopOfThePage } = require("./helpers/DOMHelpers");

function renderCanvas(state, canvas) {
  const { snake, food, resolution, isOver } = state;
  if (!isOver) {
    clear(canvas);
  }
  snake.forEach(square =>
    drawSquareFromCorner(canvas, resolution, snakeColor, square)
  );
  // draw food
  drawCircle(canvas, resolution, foodColor, food);
  // draw grid
  drawRectangularGrid(canvas, resolution, gridColor, 0.5);
}

module.exports = {
  renderCanvas
};
