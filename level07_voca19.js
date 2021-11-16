// 8급 교과서 어휘 한자
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var right = Paper.image('img/right.png', 0, 0, 20, 25).toDefs();
var left = Paper.image('img/left.png', 0, 0, 20, 25).toDefs();
var vocaCard = Paper.image('img/vocaCard.png', 0, 0, 300, 480).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': '#d9ead363'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#adcf9eff'
});

home.use().transform('t12, 6').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('start.html');
}

topBox.text(315, 27, '7급').attr({
  'font-size': 18
});

// 상단
var hanjaArea = Paper.g();

left.use().transform('t15, 60').appendTo(topBox).click(handlerPre).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('level07_voca18.html');
}

right.use().transform('t325, 60').appendTo(topBox).click(handlerAft).attr({
  'cursor': 'pointer'
});

function handlerAft() {
  location.replace('level07_voca20.html');
}

vocaCard.use().transform('t30, 100').appendTo(topBox);

hanjaArea.text(180, 80, '19 / 43').attr({
  'font-size': 20,
  'fill': '#666666',
  'text-anchor': 'middle'
});

hanjaArea.rect(50, 130, 260, 205).attr({
  'fill': 'white',
  'rx': 10,
  'ry': 10
});

hanjaArea.text(180, 220, '時 間').attr({
  'font-size': 70,
  'text-anchor': 'middle'
});

// 230-middle
hanjaArea.line(70, 250, 290, 250).attr({
  'stroke': '#b6d7a8',
  'stroke-width': 2
});

var m1 = hanjaArea.text(110, 305, ['때 ', '시']).attr({
  'font-size': 20,
  'fill': '#999999'
});
m1.selectAll('tspan')[1].attr({
  'font-size': 35,
  'fill': '#000000'
});

var m2 = hanjaArea.text(185, 305, ['사이 ', '간']).attr({
  'font-size': 20,
  'fill': '#999999'
});
m2.selectAll('tspan')[1].attr({
  'font-size': 35,
  'fill': '#000000'
});

var m3 = hanjaArea.text(55, 390, ['나는 산책하는 ', '時間', '을 가장 좋아합', '니다.']).attr({
  'font-size': 18,
  'fill': '#434343'
});
m3.selectAll('tspan')[1].attr({
  'font-weight': 'bold',
  'font-size': 28
});
m3.selectAll('tspan')[3].attr({
  x: 55,
  y: 430
});
