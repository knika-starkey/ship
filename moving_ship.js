var canvas;
var context;
var squarePosition_x = 10;
var squarePosition_y = 100;
let timer;
let speed = 1;

window.onload = function () {
  // Определение контекста рисования
  canvas = document.getElementById("ship");
  context = canvas.getContext("2d");
  // Обновляем холст через 0.02 секунды
  //setTimeout("drawFrame()", 20);
  drawFrame();
};

function drawFrame(speed = 1) {
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
  // Рисуем парус
  context.beginPath();
  context.fillStyle = "#fc0";
  context.moveTo(squarePosition_x + 20, 70);
  context.lineTo(squarePosition_x + 60, 20);
  context.lineTo(squarePosition_x + 60, 70);
  context.fill();
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(squarePosition_x, 70);
  context.lineTo(squarePosition_x + 30, 100);
  context.lineTo(squarePosition_x + 70, 100);
  context.lineTo(squarePosition_x + 100, 70);
  context.fill();
  // Рисуем мачту
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(squarePosition_x + 60, 5, 5, 65);
  // Рисуем флаг
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(squarePosition_x + 40, 5, 20, 10);
  // Пишем название
  context.fillStyle = "#00f";
  context.font = "italic 14px sans-serif";
  context.textBaseline = "top";
  context.fillText("поБЕДА", squarePosition_x + 25, 75);
  // Перемещаем квадратик вниз на 1 пиксел (где он будет
  // прорисован в следующем кадре)
  squarePosition_x += speed;
  // Рисуем следующий кадр через 20 миллисекунд
  //setTimeout("drawFrame()", 20);
}
function start() {
  stop();
  timer = setInterval(drawFrame, 20, speed);
}
function stop() {
  clearInterval(timer);
}

function reverse() {
  stop();
  timer = setInterval(drawFrame, 20, -speed);
}
function setSpeed() {
  speed = Number(document.getElementById("speed").value);
  //console.log(document.getElementById("speed").value);
}
