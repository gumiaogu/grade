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
  location.replace('level07_voca04.html');
}

right.use().transform('t325, 60').appendTo(topBox).click(handlerAft).attr({
  'cursor': 'pointer'
});

function handlerAft() {
  location.replace('level07_voca06.html');
}

vocaCard.use().transform('t30, 100').appendTo(topBox);

hanjaArea.text(180, 80, '5 / 43').attr({
  'font-size': 20,
  'fill': '#666666',
  'text-anchor': 'middle'
});

hanjaArea.rect(50, 130, 260, 205).attr({
  'fill': 'white',
  'rx': 10,
  'ry': 10
});

hanjaArea.text(180, 220, '模 型').attr({
  'font-size': 70,
  'text-anchor': 'middle'
});

// 230-middle
hanjaArea.line(70, 250, 290, 250).attr({
  'stroke': '#b6d7a8',
  'stroke-width': 2
});

var m1 = hanjaArea.text(95, 305, ['법 ', '모']).attr({
  'font-size': 20,
  'fill': '#999999'
});
m1.selectAll('tspan')[1].attr({
  'font-size': 35,
  'fill': '#000000'
});

var m2 = hanjaArea.text(165, 305, ['틀/본보기 ', '형']).attr({
  'font-size': 20,
  'fill': '#999999'
});
m2.selectAll('tspan')[1].attr({
  'font-size': 35,
  'fill': '#000000'
});

var m3 = hanjaArea.text(55, 395, ['模型', ' 비행기를 선물로 받았습니다.']).attr({
  'font-size': 28,
  'font-weight': 'bold',
  'fill': '#434343'
});
m3.selectAll('tspan')[1].attr({
  'font-weight': 'normal',
  'font-size': 18
});