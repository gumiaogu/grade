var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var firstRect = Paper.image('img/firstRect.png', 0, 0, 120, 70).toDefs();
var secondRect = Paper.image('img/secondRect.png', 0, 0, 120, 70).toDefs();
var thirdRect = Paper.image('img/thirdRect.png', 0, 0, 120, 70).toDefs();
var forthRect = Paper.image('img/forthRect.png', 0, 0, 120, 70).toDefs();
var yCircle = Paper.image('img/yCircle.png', 0, 0, 7, 7).toDefs();
var pRect = Paper.image('img/pRect.png', 0, 0, 8, 13).toDefs();
var yDoughnut = Paper.image('img/yDoughnut.png', 0, 0, 25, 25).toDefs();
var pSquare = Paper.image('img/pSquare.png', 0, 0, 30, 30).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': '#d9ead363'
});

// 상단 바 부분
var topArea = Paper.g();

home.use().transform('t12, 6').appendTo(topArea).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('start.html');
}

topArea.rect(65, 100, 230, 50).attr({
  'fill': '#adcf9eff',
  'rx': 8,
  'ry': 8
});
topArea.text(180, 132, '7급').attr({
  'font-size': 20,
  'fill': 'white',
  'font-weight': 'bold',
  'text-anchor': 'middle'
});

yDoughnut.use().transform('t102.5, 450').appendTo(topArea);

topArea.line(115, 150, 115, 250).attr({
  'stroke': '#f1c232',
  'stroke-width': 1.2,
  'stroke-dasharray': '2, 1, 5'
});

topArea.line(115, 390, 115, 510).attr({
  'stroke': '#f1c232',
  'stroke-width': 1.2,
  'stroke-dasharray': '2, 1, 5'
});

pSquare.use().transform('t230, 481').appendTo(topArea);

topArea.line(245, 150, 245, 250).attr({
  'stroke': '#c27ba0',
  'stroke-width': 1.2,
  'stroke-dasharray': '5, 1, 2'
});

topArea.line(245, 390, 245, 540).attr({
  'stroke': '#c27ba0',
  'stroke-width': 1.2,
  'stroke-dasharray': '5, 1, 2'
});

var firstB = firstRect.use().transform('t55, 247').appendTo(topArea);

var firstT = topArea.text(115, 280, ['배정한자', '한자']).attr({
  'font-size': 20,
  'fill': '#999999',
  'text-anchor': 'middle'
});
firstT.selectAll('tspan')[1].attr({
  x: 115,
  y: 305,
  'fill': '#6fa8dc'
});

var first = topArea.g(firstB, firstT).click(handler02).attr({
  'cursor': 'pointer'
});

function handler02() {
  location.replace('level07_cardMain.html');
}

var secondB = secondRect.use().transform('t55, 323').appendTo(topArea);

var secondT = topArea.text(115, 355, ['배정한자', '퀴즈']).attr({
  'font-size': 20,
  'fill': '#666666',
  'text-anchor': 'middle'
});
secondT.selectAll('tspan')[1].attr({
  x: 115,
  y: 380,
  'fill': '#6fa8dc'
});

var second = topArea.g(secondB, secondT).click(handler03).attr({
  'cursor': 'pointer'
});

function handler03() {
  location.replace('game_07.html');
}

var thirdB = thirdRect.use().transform('t185, 247').appendTo(topArea);

var thirdT = topArea.text(245, 280, ['교과서 어휘', '한자']).attr({
  'font-size': 20,
  'fill': '#999999',
  'text-anchor': 'middle'
});
thirdT.selectAll('tspan')[1].attr({
  x: 245,
  y: 305,
  'fill': '#6fa8dc'
});

var third = topArea.g(thirdB, thirdT).click(handler04).attr({
  'cursor': 'pointer'
});

function handler04() {
  location.replace('level07_voca01.html');
}

var forthB = forthRect.use().transform('t185, 323').appendTo(topArea);

var forthT = topArea.text(245, 355, ['교과서 어휘', '퀴즈']).attr({
  'font-size': 20,
  'fill': '#666666',
  'text-anchor': 'middle'
});
forthT.selectAll('tspan')[1].attr({
  x: 245,
  y: 380,
  'fill': '#6fa8dc'
});

var forth = topArea.g(forthB, forthT).click(handler05).attr({
  'cursor': 'pointer'
});

function handler05() {
  location.replace('level07_vocaQ.html');
}

yCircle.use().transform('t111.5, 509').appendTo(topArea);

pRect.use().transform('t241, 538').appendTo(topArea);
