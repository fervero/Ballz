var colors = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
    shapes = ['ball', 'square'],
    speeds = ['slow', 'medium', 'fast'],
    ballCount = 0,
    score = 0,
    gameLoopName,
    $pasteStyleHere,
    paused = false;

$().ready(function() {
    $("#one").one('click', reclick);
    $('main').on('click', '.live', kliked);
    $pasteStyleHere = $("#paste-style-here");
    gimmeBall();
});
function reclick() {
    $(this).off('click').html('kLiK mE aGAin').on('click', pauseGame);
    keepEmCummin();
}
function pickSumfin(arr) {
    var l = arr.length;
    return arr[Math.floor(Math.random() * l)];
}
function sumTime() {
    return 200 + 3000 * Math.random();
}
var gimmeColor = (function() {
    var i = 0;
    return function() {
        if(i < colors.length) return colors[i++];
        else return pickSumfin(colors);
    }
})();
$.fn.disturb = function() {
    var move = 'translateX('+ ((10*Math.random() - 5) + 'rem')+')',
        font = (0.5 + 2*Math.random())+'rem',
        width = this.width() * (0.5 + Math.random()),
        height = this.height() * (0.5 + Math.random()),
        speed = pickSumfin(speeds);
    this.css({
        'transform': move,
        'font-size': font})
        .height(height)
        .width(width)
        .addClass(pickSumfin(speeds));
    return this;
}

function keepEmCummin() {
    gimmeBall();
    gameLoopName = setTimeout(keepEmCummin, sumTime());
}

function gimmeBall() {
    if(ballCount > 40) return;
    var color = gimmeColor(),
        shape = pickSumfin(shapes),
        newBall;
        $("main").append(newBall = $("<div class='bouncy live'></div>").addClass(color).addClass(shape));
    newBall.disturb();
}
function kliked() {
    ballCount--;
    $("#score").html(score += 1000).toggleClass('zoooom');
    var $this = $(this).addClass('smashed').removeClass('live');
    setTimeout(function() {$this.remove();}, 1000);
}
function pauseGame() {
    $(this).blur();
    stopText = '.bouncy {animation-play-state: paused;}';
    if(paused) {
        $pasteStyleHere.html('');
        gameLoopName = setTimeout(keepEmCummin, sumTime());
    } else {
        $pasteStyleHere.html(stopText);
        clearTimeout(gameLoopName);
    }
    paused = !paused;
}