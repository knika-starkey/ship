window.onload = function () {
  var drawingCanvas = document.getElementById("ship");
  if (drawingCanvas && drawingCanvas.getContext) {
    var context = drawingCanvas.getContext("2d");
    // Рисуем парус
    context.beginPath();
    context.fillStyle = "#fc0";
    context.moveTo(20, 70);
    context.lineTo(60, 20);
    context.lineTo(60, 70);
    context.fill();
    // Рисуем палубу
    context.beginPath();
    context.fillStyle = "#ccf";
    context.moveTo(0, 70);
    context.lineTo(30, 100);
    context.lineTo(70, 100);
    context.lineTo(100, 70);
    context.fill();
    // Рисуем мачту
    context.beginPath();
    context.fillStyle = "#a60";
    context.fillRect(60, 5, 5, 65);
    // Рисуем флаг
    context.beginPath();
    context.fillStyle = "#e49";
    context.fillRect(40, 5, 20, 10);
    // Пишем название
    context.fillStyle = "#00f";
    context.font = "italic 20px sans-serif";
    context.textBaseline = "top";
    context.fillText("SHIP", 25, 75);
  }
};
