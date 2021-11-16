var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
//var bi = Paper.image('img/bi.jpg', 0, 0, 220, 36).toDefs();
var title = Paper.image('img/title.png', 0, 0, 260, 70).toDefs();
var start = Paper.image('img/start.png', 0, 0, 160, 160).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

//bi.use().transform('t70, 40').appendTo(topArea);

title.use().transform('t50, 110').appendTo(topArea);
// topArea.text(180, 135, '급 수 한 자').attr({
//   'font-size': 45,
//   'text-anchor': 'middle'
// });

start.use().transform('t110, 210').appendTo(topArea);

var yellowB = topArea.rect(60, 500, 100, 50).attr({
  'fill': '#54b5d593',
  'rx': 8,
  'ry': 8
});
var yellowBT = topArea.text(95, 532, '8급').attr({
  'font-size': 20,
  'fill': 'white'
});
var yellow = topArea.g(yellowB, yellowBT).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('start_level08.html');
}

var greenB = topArea.rect(200, 500, 100, 50).attr({
  'fill': '#adcf9eff',
  'rx': 8,
  'ry': 8
});
var greenBT = topArea.text(238, 532, '7급').attr({
  'font-size': 20,
  'fill': 'white'
});
var green = topArea.g(greenB, greenBT).click(handler02).attr({
  'cursor': 'pointer'
});

function handler02() {
  location.replace('start_level07.html');
}
