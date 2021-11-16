// 8급 깜빡이카드(1)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var cha04 = Paper.image('img/cha04.png', 0, 0, 145, 140).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#54b5d593'
});

home.use().transform('t12, 6').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('start.html');
}

topBox.text(315, 27, '8급').attr({
  'font-size': 18
});

// 상단
var hanjaArea = Paper.g();

var tt = hanjaArea.text(180, 180, ['한자를 보고', '뜻음을 말해 보세요.']).attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
tt.selectAll('tspan')[1].attr({
  x: 180,
  y: 260
});

cha04.use().transform('t115, 320').appendTo(hanjaArea);


setTimeout(function() {
  location.replace('flash_08-02.html');
}, 4000);
