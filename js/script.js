var colors = ['c1', 'c2', 'c3', 'c4', 'c5'],
    shapes = ['ball', 'square'],
    speeds = ['slow', 'medium', 'fast'];
    
$().ready(function() {
    $("#one").on('click', gimmeBall);
    $('main').on('click', '.bouncy', kliked);
});
function pickSumfin(arr) {
    var l = arr.length;
    return arr[Math.floor(Math.random() * l)];
}
$.fn.disturb = function() {
    var move = 'translateX('+ ((10*Math.random() - 5) + 'rem')+')',
        font = (0.5 + 2*Math.random())+'rem',
        width = this.width() * (0.5 + Math.random()),
        height = this.height() * (0.5 + Math.random()),
        speed = pickSumfin(speeds);
    console.log(speed);
    this.css({
        'transform': move,
        'font-size': font})
        .height(height)
        .width(width)
        .addClass(pickSumfin(speeds));
    return this;
}
function gimmeBall() {
    var color = pickSumfin(colors),
        shape = pickSumfin(shapes),
        newBall = $("<div class='bouncy'></div>").addClass(color).addClass(shape);
    $("main").append(newBall);
    newBall.disturb();
}
function kliked() {
    console.log('hit!');
    var $this = $(this);
    $this.addClass('smashed');
    setTimeout(function() {$this.remove();}, 1000);
}