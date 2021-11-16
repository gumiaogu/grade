// 8급 깜빡이카드(3)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var cha03 = Paper.image('img/cha03.png', 0, 0, 145, 140).toDefs();

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
    'cursor' : 'pointer'
});

function handlerHome() {
  location.replace('start.html');
}

topBox.text(315, 27, '8급').attr({
  'font-size': 18
});

// 한자 카드 카운팅
var progress = Paper.g();
var p0 = progress.text(170, 100, '/ 30').attr({
  'fill': 'gray',
  'font-size': 25
});
var p1 = progress.text(150, 100, '1').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p2 = progress.text(150, 100, '2').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p3 = progress.text(150, 100, '3').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p4 = progress.text(150, 100, '4').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p5 = progress.text(150, 100, '5').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p6 = progress.text(150, 100, '6').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p7 = progress.text(150, 100, '7').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p8 = progress.text(150, 100, '8').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p9 = progress.text(150, 100, '9').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p10 = progress.text(150, 100, '10').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p11 = progress.text(150, 100, '11').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p12 = progress.text(150, 100, '12').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p13 = progress.text(150, 100, '13').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p14 = progress.text(150, 100, '14').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p15 = progress.text(150, 100, '15').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p16 = progress.text(150, 100, '16').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p17 = progress.text(150, 100, '17').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p18 = progress.text(150, 100, '18').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p19 = progress.text(150, 100, '19').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p20 = progress.text(150, 100, '20').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p21 = progress.text(150, 100, '21').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p22 = progress.text(150, 100, '22').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p23 = progress.text(150, 100, '23').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p24 = progress.text(150, 100, '24').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p25 = progress.text(150, 100, '25').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p26 = progress.text(150, 100, '26').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p27 = progress.text(150, 100, '27').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p28 = progress.text(150, 100, '28').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p29 = progress.text(150, 100, '29').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});
var p30 = progress.text(150, 100, '30').attr({
  'fill': 'none',
  'font-size': 25,
  'text-anchor': 'middle'
});

setTimeout(function() {
  p1.attr({
    'fill': 'gray'
  });
}, 10);
setTimeout(function() {
  p1.attr({
    'fill': 'none'
  });
}, 3900);

setTimeout(function() {
  p2.attr({
    'fill': 'gray'
  });
}, 4000);
setTimeout(function() {
  p2.attr({
    'fill': 'none'
  });
}, 7900);

setTimeout(function() {
  p3.attr({
    'fill': 'gray'
  });
}, 8000);
setTimeout(function() {
  p3.attr({
    'fill': 'none'
  });
}, 11900);

setTimeout(function() {
  p4.attr({
    'fill': 'gray'
  });
}, 12000);
setTimeout(function() {
  p4.attr({
    'fill': 'none'
  });
}, 15900);

setTimeout(function() {
  p5.attr({
    'fill': 'gray'
  });
}, 16000);
setTimeout(function() {
  p5.attr({
    'fill': 'none'
  });
}, 19900);

setTimeout(function() {
  p6.attr({
    'fill': 'gray'
  });
}, 20000);
setTimeout(function() {
  p6.attr({
    'fill': 'none'
  });
}, 23900);

setTimeout(function() {
  p7.attr({
    'fill': 'gray'
  });
}, 24000);
setTimeout(function() {
  p7.attr({
    'fill': 'none'
  });
}, 27900);

setTimeout(function() {
  p8.attr({
    'fill': 'gray'
  });
}, 28000);
setTimeout(function() {
  p8.attr({
    'fill': 'none'
  });
}, 31900);

setTimeout(function() {
  p9.attr({
    'fill': 'gray'
  });
}, 32000);
setTimeout(function() {
  p9.attr({
    'fill': 'none'
  });
}, 35900);

setTimeout(function() {
  p10.attr({
    'fill': 'gray'
  });
}, 36000);
setTimeout(function() {
  p10.attr({
    'fill': 'none'
  });
}, 39900);

setTimeout(function() {
  p11.attr({
    'fill': 'gray'
  });
}, 40000);
setTimeout(function() {
  p11.attr({
    'fill': 'none'
  });
}, 43900);

setTimeout(function() {
  p12.attr({
    'fill': 'gray'
  });
}, 44000);
setTimeout(function() {
  p12.attr({
    'fill': 'none'
  });
}, 47900);

setTimeout(function() {
  p13.attr({
    'fill': 'gray'
  });
}, 48000);
setTimeout(function() {
  p13.attr({
    'fill': 'none'
  });
}, 51900);

setTimeout(function() {
  p14.attr({
    'fill': 'gray'
  });
}, 52000);
setTimeout(function() {
  p14.attr({
    'fill': 'none'
  });
}, 55900);

setTimeout(function() {
  p15.attr({
    'fill': 'gray'
  });
}, 56000);
setTimeout(function() {
  p15.attr({
    'fill': 'none'
  });
}, 59900);

setTimeout(function() {
  p16.attr({
    'fill': 'gray'
  });
}, 60000);
setTimeout(function() {
  p16.attr({
    'fill': 'none'
  });
}, 63900);

setTimeout(function() {
  p17.attr({
    'fill': 'gray'
  });
}, 64000);
setTimeout(function() {
  p17.attr({
    'fill': 'none'
  });
}, 67900);

setTimeout(function() {
  p18.attr({
    'fill': 'gray'
  });
}, 68000);
setTimeout(function() {
  p18.attr({
    'fill': 'none'
  });
}, 71900);

setTimeout(function() {
  p19.attr({
    'fill': 'gray'
  });
}, 72000);
setTimeout(function() {
  p19.attr({
    'fill': 'none'
  });
}, 75900);

setTimeout(function() {
  p20.attr({
    'fill': 'gray'
  });
}, 76000);
setTimeout(function() {
  p20.attr({
    'fill': 'none'
  });
}, 79900);

setTimeout(function() {
  p21.attr({
    'fill': 'gray'
  });
}, 80000);
setTimeout(function() {
  p21.attr({
    'fill': 'none'
  });
}, 83900);

setTimeout(function() {
  p22.attr({
    'fill': 'gray'
  });
}, 84000);
setTimeout(function() {
  p22.attr({
    'fill': 'none'
  });
}, 87900);

setTimeout(function() {
  p23.attr({
    'fill': 'gray'
  });
}, 88000);
setTimeout(function() {
  p23.attr({
    'fill': 'none'
  });
}, 91900);

setTimeout(function() {
  p24.attr({
    'fill': 'gray'
  });
}, 92000);
setTimeout(function() {
  p24.attr({
    'fill': 'none'
  });
}, 95900);

setTimeout(function() {
  p25.attr({
    'fill': 'gray'
  });
}, 96000);
setTimeout(function() {
  p25.attr({
    'fill': 'none'
  });
}, 99900);

setTimeout(function() {
  p26.attr({
    'fill': 'gray'
  });
}, 100000);
setTimeout(function() {
  p26.attr({
    'fill': 'none'
  });
}, 103900);

setTimeout(function() {
  p27.attr({
    'fill': 'gray'
  });
}, 104000);
setTimeout(function() {
  p27.attr({
    'fill': 'none'
  });
}, 107900);

setTimeout(function() {
  p28.attr({
    'fill': 'gray'
  });
}, 108000);
setTimeout(function() {
  p28.attr({
    'fill': 'none'
  });
}, 111900);

setTimeout(function() {
  p29.attr({
    'fill': 'gray'
  });
}, 112000);
setTimeout(function() {
  p29.attr({
    'fill': 'none'
  });
}, 115900);


setTimeout(function() {
  p30.attr({
    'fill': 'gray'
  });
}, 116000);
setTimeout(function() {
  p30.attr({
    'fill': 'none'
  });
  p0.attr({
    'fill': 'none'
  });
}, 119000);

// 한자 깜빡이 카드
var blinkArea = Paper.g();
var conData = data.slice(0, 30);

var t1 = blinkArea.text(180, 330, conData[0].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt1 = blinkArea.text(180, 500, conData[0].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t2 = blinkArea.text(180, 330, conData[1].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt2 = blinkArea.text(180, 500, conData[1].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t3 = blinkArea.text(180, 330, conData[2].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt3 = blinkArea.text(180, 500, conData[2].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t4 = blinkArea.text(180, 330, conData[3].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt4 = blinkArea.text(180, 500, conData[3].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t5 = blinkArea.text(180, 330, conData[4].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt5 = blinkArea.text(180, 500, conData[4].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t6 = blinkArea.text(180, 330, conData[5].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt6 = blinkArea.text(180, 500, conData[5].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t7 = blinkArea.text(180, 330, conData[6].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt7 = blinkArea.text(180, 500, conData[6].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t8 = blinkArea.text(180, 330, conData[7].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt8 = blinkArea.text(180, 500, conData[7].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t9 = blinkArea.text(180, 330, conData[8].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt9 = blinkArea.text(180, 500, conData[8].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t10 = blinkArea.text(180, 330, conData[9].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt10 = blinkArea.text(180, 500, conData[9].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t11 = blinkArea.text(180, 330, conData[10].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt11 = blinkArea.text(180, 500, conData[10].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t12 = blinkArea.text(180, 330, conData[11].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt12 = blinkArea.text(180, 500, conData[11].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t13 = blinkArea.text(180, 330, conData[12].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt13 = blinkArea.text(180, 500, conData[12].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t14 = blinkArea.text(180, 330, conData[13].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt14 = blinkArea.text(180, 500, conData[13].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t15 = blinkArea.text(180, 330, conData[14].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt15 = blinkArea.text(180, 500, conData[14].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t16 = blinkArea.text(180, 330, conData[15].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt16 = blinkArea.text(180, 500, conData[15].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t17 = blinkArea.text(180, 330, conData[16].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt17 = blinkArea.text(180, 500, conData[16].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t18 = blinkArea.text(180, 330, conData[17].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt18 = blinkArea.text(180, 500, conData[17].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t19 = blinkArea.text(180, 330, conData[18].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt19 = blinkArea.text(180, 500, conData[18].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t20 = blinkArea.text(180, 330, conData[19].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt20 = blinkArea.text(180, 500, conData[19].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t21 = blinkArea.text(180, 330, conData[20].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt21 = blinkArea.text(180, 500, conData[20].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t22 = blinkArea.text(180, 330, conData[21].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt22 = blinkArea.text(180, 500, conData[21].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t23 = blinkArea.text(180, 330, conData[22].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt23 = blinkArea.text(180, 500, conData[22].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t24 = blinkArea.text(180, 330, conData[23].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt24 = blinkArea.text(180, 500, conData[23].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t25 = blinkArea.text(180, 330, conData[24].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt25 = blinkArea.text(180, 500, conData[24].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t26 = blinkArea.text(180, 330, conData[25].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt26 = blinkArea.text(180, 500, conData[25].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t27 = blinkArea.text(180, 330, conData[26].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt27 = blinkArea.text(180, 500, conData[26].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t28 = blinkArea.text(180, 330, conData[27].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt28 = blinkArea.text(180, 500, conData[27].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t29 = blinkArea.text(180, 330, conData[28].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt29 = blinkArea.text(180, 500, conData[28].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t30 = blinkArea.text(180, 330, conData[29].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt30 = blinkArea.text(180, 500, conData[29].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

setTimeout(function() {
  t1.attr({
    'fill': 'black'
  });
}, 10);
setTimeout(function() {
  t1.attr({
    'fill': 'none'
  });
}, 1000);
setTimeout(function() {
  t1.attr({
    'fill': 'black'
  });
  tt1.attr({
    'fill': 'black'
  });
}, 2000);
setTimeout(function() {
  t1.attr({
    'fill': 'none'
  });
  tt1.attr({
    'fill': 'none'
  });
}, 3000);

setTimeout(function() {
  t2.attr({
    'fill': 'black'
  });
}, 4000);
setTimeout(function() {
  t2.attr({
    'fill': 'none'
  });
}, 5000);
setTimeout(function() {
  t2.attr({
    'fill': 'black'
  });
  tt2.attr({
    'fill': 'black'
  });
}, 6000);
setTimeout(function() {
  t2.attr({
    'fill': 'none'
  });
  tt2.attr({
    'fill': 'none'
  });
}, 7000);

setTimeout(function() {
  t3.attr({
    'fill': 'black'
  });
}, 8000);
setTimeout(function() {
  t3.attr({
    'fill': 'none'
  });
}, 9000);
setTimeout(function() {
  t3.attr({
    'fill': 'black'
  });
  tt3.attr({
    'fill': 'black'
  });
}, 10000);
setTimeout(function() {
  t3.attr({
    'fill': 'none'
  });
  tt3.attr({
    'fill': 'none'
  });
}, 11000);

setTimeout(function() {
  t4.attr({
    'fill': 'black'
  });
}, 12000);
setTimeout(function() {
  t4.attr({
    'fill': 'none'
  });
}, 13000);
setTimeout(function() {
  t4.attr({
    'fill': 'black'
  });
  tt4.attr({
    'fill': 'black'
  });
}, 14000);
setTimeout(function() {
  t4.attr({
    'fill': 'none'
  });
  tt4.attr({
    'fill': 'none'
  });
}, 15000);

setTimeout(function() {
  t5.attr({
    'fill': 'black'
  });
}, 16000);
setTimeout(function() {
  t5.attr({
    'fill': 'none'
  });
}, 17000);
setTimeout(function() {
  t5.attr({
    'fill': 'black'
  });
  tt5.attr({
    'fill': 'black'
  });
}, 18000);
setTimeout(function() {
  t5.attr({
    'fill': 'none'
  });
  tt5.attr({
    'fill': 'none'
  });
}, 19000);

setTimeout(function() {
  t6.attr({
    'fill': 'black'
  });
}, 20000);
setTimeout(function() {
  t6.attr({
    'fill': 'none'
  });
}, 21000);
setTimeout(function() {
  t6.attr({
    'fill': 'black'
  });
  tt6.attr({
    'fill': 'black'
  });
}, 22000);
setTimeout(function() {
  t6.attr({
    'fill': 'none'
  });
  tt6.attr({
    'fill': 'none'
  });
}, 23000);

setTimeout(function() {
  t7.attr({
    'fill': 'black'
  });
}, 24000);
setTimeout(function() {
  t7.attr({
    'fill': 'none'
  });
}, 25000);
setTimeout(function() {
  t7.attr({
    'fill': 'black'
  });
  tt7.attr({
    'fill': 'black'
  });
}, 26000);
setTimeout(function() {
  t7.attr({
    'fill': 'none'
  });
  tt7.attr({
    'fill': 'none'
  });
}, 27000);

setTimeout(function() {
  t8.attr({
    'fill': 'black'
  });
}, 28000);
setTimeout(function() {
  t8.attr({
    'fill': 'none'
  });
}, 29000);
setTimeout(function() {
  t8.attr({
    'fill': 'black'
  });
  tt8.attr({
    'fill': 'black'
  });
}, 30000);
setTimeout(function() {
  t8.attr({
    'fill': 'none'
  });
  tt8.attr({
    'fill': 'none'
  });
}, 31000);

setTimeout(function() {
  t9.attr({
    'fill': 'black'
  });
}, 32000);
setTimeout(function() {
  t9.attr({
    'fill': 'none'
  });
}, 33000);
setTimeout(function() {
  t9.attr({
    'fill': 'black'
  });
  tt9.attr({
    'fill': 'black'
  });
}, 34000);
setTimeout(function() {
  t9.attr({
    'fill': 'none'
  });
  tt9.attr({
    'fill': 'none'
  });
}, 35000);

setTimeout(function() {
  t10.attr({
    'fill': 'black'
  });
}, 36000);
setTimeout(function() {
  t10.attr({
    'fill': 'none'
  });
}, 37000);
setTimeout(function() {
  t10.attr({
    'fill': 'black'
  });
  tt10.attr({
    'fill': 'black'
  });
}, 38000);
setTimeout(function() {
  t10.attr({
    'fill': 'none'
  });
  tt10.attr({
    'fill': 'none'
  });
}, 39000);

setTimeout(function() {
  t11.attr({
    'fill': 'black'
  });
}, 40000);
setTimeout(function() {
  t11.attr({
    'fill': 'none'
  });
}, 41000);
setTimeout(function() {
  t11.attr({
    'fill': 'black'
  });
  tt11.attr({
    'fill': 'black'
  });
}, 42000);
setTimeout(function() {
  t11.attr({
    'fill': 'none'
  });
  tt11.attr({
    'fill': 'none'
  });
}, 43000);

setTimeout(function() {
  t12.attr({
    'fill': 'black'
  });
}, 44000);
setTimeout(function() {
  t12.attr({
    'fill': 'none'
  });
}, 45000);
setTimeout(function() {
  t12.attr({
    'fill': 'black'
  });
  tt12.attr({
    'fill': 'black'
  });
}, 46000);
setTimeout(function() {
  t12.attr({
    'fill': 'none'
  });
  tt12.attr({
    'fill': 'none'
  });
}, 47000);

setTimeout(function() {
  t13.attr({
    'fill': 'black'
  });
}, 48000);
setTimeout(function() {
  t13.attr({
    'fill': 'none'
  });
}, 49000);
setTimeout(function() {
  t13.attr({
    'fill': 'black'
  });
  tt13.attr({
    'fill': 'black'
  });
}, 50000);
setTimeout(function() {
  t13.attr({
    'fill': 'none'
  });
  tt13.attr({
    'fill': 'none'
  });
}, 51000);

setTimeout(function() {
  t14.attr({
    'fill': 'black'
  });
}, 52000);
setTimeout(function() {
  t14.attr({
    'fill': 'none'
  });
}, 53000);
setTimeout(function() {
  t14.attr({
    'fill': 'black'
  });
  tt14.attr({
    'fill': 'black'
  });
}, 54000);
setTimeout(function() {
  t14.attr({
    'fill': 'none'
  });
  tt14.attr({
    'fill': 'none'
  });
}, 55000);

setTimeout(function() {
  t15.attr({
    'fill': 'black'
  });
}, 56000);
setTimeout(function() {
  t15.attr({
    'fill': 'none'
  });
}, 57000);
setTimeout(function() {
  t15.attr({
    'fill': 'black'
  });
  tt15.attr({
    'fill': 'black'
  });
}, 58000);
setTimeout(function() {
  t15.attr({
    'fill': 'none'
  });
  tt15.attr({
    'fill': 'none'
  });
}, 59000);

setTimeout(function() {
  t16.attr({
    'fill': 'black'
  });
}, 60000);
setTimeout(function() {
  t16.attr({
    'fill': 'none'
  });
}, 61000);
setTimeout(function() {
  t16.attr({
    'fill': 'black'
  });
  tt16.attr({
    'fill': 'black'
  });
}, 62000);
setTimeout(function() {
  t16.attr({
    'fill': 'none'
  });
  tt16.attr({
    'fill': 'none'
  });
}, 63000);

setTimeout(function() {
  t17.attr({
    'fill': 'black'
  });
}, 64000);
setTimeout(function() {
  t17.attr({
    'fill': 'none'
  });
}, 65000);
setTimeout(function() {
  t17.attr({
    'fill': 'black'
  });
  tt17.attr({
    'fill': 'black'
  });
}, 66000);
setTimeout(function() {
  t17.attr({
    'fill': 'none'
  });
  tt17.attr({
    'fill': 'none'
  });
}, 67000);

setTimeout(function() {
  t18.attr({
    'fill': 'black'
  });
}, 68000);
setTimeout(function() {
  t18.attr({
    'fill': 'none'
  });
}, 69000);
setTimeout(function() {
  t18.attr({
    'fill': 'black'
  });
  tt18.attr({
    'fill': 'black'
  });
}, 70000);
setTimeout(function() {
  t18.attr({
    'fill': 'none'
  });
  tt18.attr({
    'fill': 'none'
  });
}, 71000);

setTimeout(function() {
  t19.attr({
    'fill': 'black'
  });
}, 72000);
setTimeout(function() {
  t19.attr({
    'fill': 'none'
  });
}, 73000);
setTimeout(function() {
  t19.attr({
    'fill': 'black'
  });
  tt19.attr({
    'fill': 'black'
  });
}, 74000);
setTimeout(function() {
  t19.attr({
    'fill': 'none'
  });
  tt19.attr({
    'fill': 'none'
  });
}, 75000);

setTimeout(function() {
  t20.attr({
    'fill': 'black'
  });
}, 76000);
setTimeout(function() {
  t20.attr({
    'fill': 'none'
  });
}, 77000);
setTimeout(function() {
  t20.attr({
    'fill': 'black'
  });
  tt20.attr({
    'fill': 'black'
  });
}, 78000);
setTimeout(function() {
  t20.attr({
    'fill': 'none'
  });
  tt20.attr({
    'fill': 'none'
  });
}, 79000);

setTimeout(function() {
  t21.attr({
    'fill': 'black'
  });
}, 80000);
setTimeout(function() {
  t21.attr({
    'fill': 'none'
  });
}, 81000);
setTimeout(function() {
  t21.attr({
    'fill': 'black'
  });
  tt21.attr({
    'fill': 'black'
  });
}, 82000);
setTimeout(function() {
  t21.attr({
    'fill': 'none'
  });
  tt21.attr({
    'fill': 'none'
  });
}, 83000);

setTimeout(function() {
  t22.attr({
    'fill': 'black'
  });
}, 84000);
setTimeout(function() {
  t22.attr({
    'fill': 'none'
  });
}, 85000);
setTimeout(function() {
  t22.attr({
    'fill': 'black'
  });
  tt22.attr({
    'fill': 'black'
  });
}, 86000);
setTimeout(function() {
  t22.attr({
    'fill': 'none'
  });
  tt22.attr({
    'fill': 'none'
  });
}, 87000);

setTimeout(function() {
  t23.attr({
    'fill': 'black'
  });
}, 88000);
setTimeout(function() {
  t23.attr({
    'fill': 'none'
  });
}, 89000);
setTimeout(function() {
  t23.attr({
    'fill': 'black'
  });
  tt23.attr({
    'fill': 'black'
  });
}, 90000);
setTimeout(function() {
  t23.attr({
    'fill': 'none'
  });
  tt23.attr({
    'fill': 'none'
  });
}, 91000);

setTimeout(function() {
  t24.attr({
    'fill': 'black'
  });
}, 92000);
setTimeout(function() {
  t24.attr({
    'fill': 'none'
  });
}, 93000);
setTimeout(function() {
  t24.attr({
    'fill': 'black'
  });
  tt24.attr({
    'fill': 'black'
  });
}, 94000);
setTimeout(function() {
  t24.attr({
    'fill': 'none'
  });
  tt24.attr({
    'fill': 'none'
  });
}, 95000);

setTimeout(function() {
  t25.attr({
    'fill': 'black'
  });
}, 96000);
setTimeout(function() {
  t25.attr({
    'fill': 'none'
  });
}, 97000);
setTimeout(function() {
  t25.attr({
    'fill': 'black'
  });
  tt25.attr({
    'fill': 'black'
  });
}, 98000);
setTimeout(function() {
  t25.attr({
    'fill': 'none'
  });
  tt25.attr({
    'fill': 'none'
  });
}, 99000);

setTimeout(function() {
  t26.attr({
    'fill': 'black'
  });
}, 100000);
setTimeout(function() {
  t26.attr({
    'fill': 'none'
  });
}, 101000);
setTimeout(function() {
  t26.attr({
    'fill': 'black'
  });
  tt26.attr({
    'fill': 'black'
  });
}, 102000);
setTimeout(function() {
  t26.attr({
    'fill': 'none'
  });
  tt26.attr({
    'fill': 'none'
  });
}, 103000);

setTimeout(function() {
  t27.attr({
    'fill': 'black'
  });
}, 104000);
setTimeout(function() {
  t27.attr({
    'fill': 'none'
  });
}, 105000);
setTimeout(function() {
  t27.attr({
    'fill': 'black'
  });
  tt27.attr({
    'fill': 'black'
  });
}, 106000);
setTimeout(function() {
  t27.attr({
    'fill': 'none'
  });
  tt27.attr({
    'fill': 'none'
  });
}, 107000);

setTimeout(function() {
  t28.attr({
    'fill': 'black'
  });
}, 108000);
setTimeout(function() {
  t28.attr({
    'fill': 'none'
  });
}, 109000);
setTimeout(function() {
  t28.attr({
    'fill': 'black'
  });
  tt28.attr({
    'fill': 'black'
  });
}, 110000);
setTimeout(function() {
  t28.attr({
    'fill': 'none'
  });
  tt28.attr({
    'fill': 'none'
  });
}, 111000);

setTimeout(function() {
  t29.attr({
    'fill': 'black'
  });
}, 112000);
setTimeout(function() {
  t29.attr({
    'fill': 'none'
  });
}, 113000);
setTimeout(function() {
  t29.attr({
    'fill': 'black'
  });
  tt29.attr({
    'fill': 'black'
  });
}, 114000);
setTimeout(function() {
  t29.attr({
    'fill': 'none'
  });
  tt29.attr({
    'fill': 'none'
  });
}, 115000);

setTimeout(function() {
  t30.attr({
    'fill': 'black'
  });
}, 116000);
setTimeout(function() {
  t30.attr({
    'fill': 'none'
  });
}, 117000);
setTimeout(function() {
  t30.attr({
    'fill': 'black'
  });
  tt30.attr({
    'fill': 'black'
  });
}, 118000);
setTimeout(function() {
  t30.attr({
    'fill': 'none'
  });
  tt30.attr({
    'fill': 'none'
  });
}, 119000);

setTimeout(function() {
  cha03.use().transform('t115, 200').appendTo(Paper);
  var redB = Paper.rect(36, 410, 120, 40).attr({
    'fill': '#e69138ff',
    'rx': 8,
    'ry': 8
  });
  var redBT = Paper.text(70, 435, '처음으로').click(handlerCard).attr({
    'fill': 'white',
    'font-size': 15
  });
  var red = Paper.g(redB, redBT).attr({
    'cursor': 'pointer'
  });
  function handlerCard() {
    location.replace('level08_cardMain.html');
  }

  var orangeB = Paper.rect(200, 410, 120, 40).attr({
    'fill': '#ea9999ff',
    'rx': 8,
    'ry': 8
  });
  var orangeBT = Paper.text(248, 435, '게임').click(handlerGame).attr({
    'fill': 'white',
    'font-size': 15
  });
  var orange = Paper.g(orangeB, orangeBT).attr({
    'cursor': 'pointer'
  });

  function handlerGame() {
    location.replace('game_08.html');
  }
}, 120000);
