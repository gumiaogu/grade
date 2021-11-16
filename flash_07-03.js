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
  'fill': '#adcf9eff'
});

home.use().transform('t12, 6').appendTo(topBox).click(handlerHome).attr({
    'cursor' : 'pointer'
});

function handlerHome() {
  location.replace('start.html');
}

topBox.text(315, 27, '7급').attr({
  'font-size': 18
});

// 한자 카드 카운팅
var progress = Paper.g();
var p0 = progress.text(170, 100, '/ 20').attr({
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
  p0.attr({
    'fill': 'none'
  });
}, 79000);


// 한자 깜빡이 카드
var blinkArea = Paper.g();
var conData = data.slice(0, 50);

var t1 = blinkArea.text(180, 330, conData[30].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt1 = blinkArea.text(180, 500, conData[30].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t2 = blinkArea.text(180, 330, conData[31].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt2 = blinkArea.text(180, 500, conData[31].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t3 = blinkArea.text(180, 330, conData[32].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt3 = blinkArea.text(180, 500, conData[32].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t4 = blinkArea.text(180, 330, conData[33].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt4 = blinkArea.text(180, 500, conData[33].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t5 = blinkArea.text(180, 330, conData[34].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt5 = blinkArea.text(180, 500, conData[34].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t6 = blinkArea.text(180, 330, conData[35].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt6 = blinkArea.text(180, 500, conData[35].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t7 = blinkArea.text(180, 330, conData[36].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt7 = blinkArea.text(180, 500, conData[36].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t8 = blinkArea.text(180, 330, conData[37].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt8 = blinkArea.text(180, 500, conData[37].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t9 = blinkArea.text(180, 330, conData[38].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt9 = blinkArea.text(180, 500, conData[38].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t10 = blinkArea.text(180, 330, conData[39].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt10 = blinkArea.text(180, 500, conData[39].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t11 = blinkArea.text(180, 330, conData[40].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt11 = blinkArea.text(180, 500, conData[40].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t12 = blinkArea.text(180, 330, conData[41].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt12 = blinkArea.text(180, 500, conData[41].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t13 = blinkArea.text(180, 330, conData[42].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt13 = blinkArea.text(180, 500, conData[42].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t14 = blinkArea.text(180, 330, conData[43].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt14 = blinkArea.text(180, 500, conData[43].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t15 = blinkArea.text(180, 330, conData[44].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt15 = blinkArea.text(180, 500, conData[44].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t16 = blinkArea.text(180, 330, conData[45].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt16 = blinkArea.text(180, 500, conData[45].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t17 = blinkArea.text(180, 330, conData[46].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt17 = blinkArea.text(180, 500, conData[46].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t18 = blinkArea.text(180, 330, conData[47].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt18 = blinkArea.text(180, 500, conData[47].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t19 = blinkArea.text(180, 330, conData[48].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt19 = blinkArea.text(180, 500, conData[48].mean).attr({
  'fill': 'none',
  'font-size': 70,
  'text-anchor': 'middle'
});

var t20 = blinkArea.text(180, 330, conData[49].hanja).attr({
  'fill': 'none',
  'font-size': 200,
  'text-anchor': 'middle'
});
var tt20 = blinkArea.text(180, 500, conData[49].mean).attr({
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
    location.replace('level07_cardMain.html');
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
    location.replace('game_07.html');
  }
}, 80000);
