window.setInterval(BlinkIt, 500);
var color = "blue";
function BlinkIt() {
    var blink = document.getElementById("blink");
    color = (color == "#ffffff") ? "blue" : "#ffffff";
    blink.style.color = color;
    blink.style.fontSize = '36px';
}
