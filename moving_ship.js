var canvas;
var context;
var squarePosition_x = 10;
var squarePosition_y = 10;
let timer;
let speed = 1;
let down = false;

window.onload = function () {
  // Определение контекста рисования
  canvas = document.getElementById("ship");
  context = canvas.getContext("2d");
  // Обновляем холст через 0.02 секунды
  //setTimeout("drawFrame()", 20);
  drawFrame();
};

function drawFrame(speed = 1, side) {
  // Очистить холст
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Вызываем метод beginPath(), чтобы убедиться,
  // что мы не рисуем часть уже нарисованного содержимого холста
  // context.beginPath();
  // // Рисуем квадратик размером 10x10 пикселов в текущей позиции
  // context.rect(squarePosition_x, squarePosition_y, 10, 10);
  // context.lineStyle = "#109bfc";
  // context.lineWidth = 1;
  // context.stroke();

  if (side) {
    // Рисуем парус
    context.beginPath();
    context.fillStyle = "#fc0";
    context.moveTo(squarePosition_x + 20, squarePosition_y + 70);
    context.lineTo(squarePosition_x + 60, squarePosition_y + 20);
    context.lineTo(squarePosition_x + 60, squarePosition_y + 70);
    context.fill();
    context.beginPath();
    context.fillStyle = "#ccf";
    context.moveTo(squarePosition_x, squarePosition_y + 70);
    context.lineTo(squarePosition_x + 30, squarePosition_y + 100);
    context.lineTo(squarePosition_x + 70, squarePosition_y + 100);
    context.lineTo(squarePosition_x + 100, squarePosition_y + 70);
    context.fill();
    // Рисуем мачту
    context.beginPath();
    context.fillStyle = "#a60";
    context.fillRect(squarePosition_x + 60, squarePosition_y + 5, 5, 65);
    // Рисуем флаг
    context.beginPath();
    context.fillStyle = "#e49";
    context.fillRect(squarePosition_x + 40, squarePosition_y + 5, 20, 10);
    // Пишем название
    context.fillStyle = "#00f";
    context.font = "italic 14px sans-serif";
    context.textBaseline = "top";
    context.fillText("поБЕДА", squarePosition_x + 25, squarePosition_y + 75);
  } else {
    // Рисуем парус
    context.beginPath();
    context.fillStyle = "#fc0";
    context.moveTo(squarePosition_x + 80, squarePosition_y + 70);
    context.lineTo(squarePosition_x + 35, squarePosition_y + 20);
    context.lineTo(squarePosition_x + 35, squarePosition_y + 70);
    context.fill();
    context.beginPath();
    context.fillStyle = "#ccf";
    context.moveTo(squarePosition_x, squarePosition_y + 70);
    context.lineTo(squarePosition_x + 30, squarePosition_y + 100);
    context.lineTo(squarePosition_x + 70, squarePosition_y + 100);
    context.lineTo(squarePosition_x + 100, squarePosition_y + 70);
    context.fill();
    // Рисуем мачту
    context.beginPath();
    context.fillStyle = "#a60";
    context.fillRect(squarePosition_x + 30, squarePosition_y + 5, 5, 65);
    // Рисуем флаг
    context.beginPath();
    context.fillStyle = "#e49";
    context.fillRect(squarePosition_x + 35, squarePosition_y + 5, 20, 10);
    // Пишем название
    context.fillStyle = "#00f";
    context.font = "italic 14px sans-serif";
    context.textBaseline = "top";
    context.fillText("поБЕДА", squarePosition_x + 25, squarePosition_y + 75);
  }

  // Перемещаем квадратик вниз на 1 пиксел (где он будет
  // прорисован в следующем кадре)
  if (down) {
    squarePosition_y += 1;
  } else {
    squarePosition_x += speed;
    if (squarePosition_x <= 0) {
      squarePosition_x = 0;
      stop();
    } else if (squarePosition_x + 100 >= canvas.width) {
      squarePosition_x = canvas.width - 100;
      stop();
    }
  }

  // Рисуем следующий кадр через 20 миллисекунд
  //setTimeout("drawFrame()", 20);
}
function start() {
  stop();
  timer = setInterval(drawFrame, 20, speed, true);
}
function stop() {
  clearInterval(timer);
}

function reverse() {
  stop();
  timer = setInterval(drawFrame, 20, -speed, false);
}
function setSpeed() {
  speed = Number(document.getElementById("speed").value);
  //console.log(document.getElementById("speed").value);
}
function drown() {
  down = true;
}
