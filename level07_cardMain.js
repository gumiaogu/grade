// 8급
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();

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
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('start.html');
}

topBox.text(315, 27, '7급').attr({
  'font-size': 18
});

// 상단
var topArea = Paper.g();

// topArea.text(85, 95, '한자를 클릭해서 뜻음 확인하기!').attr({
//   'font-size': 15
// });

// 한자
var bottomArea = Paper.g();

for (var i = 0; i < 5; i++) {
  bottomArea.rect(30, (i * 95) + 75, 300, 60, 5).attr({
    'fill': '#f1f3f4'
  });
}

var hanjaChoices = Paper.g();
var conData = data.slice(0, 50);

hanjaChoices.text(45, 115, conData[30].hanja).click(handler05).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(125, 115, conData[31].hanja).click(handler06).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(205, 115, conData[32].hanja).click(handler07).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 115, conData[33].hanja).click(handler08).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 210, conData[34].hanja).click(handler09).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(125, 210, conData[35].hanja).click(handler10).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(205, 210, conData[36].hanja).click(handler11).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 210, conData[37].hanja).click(handler12).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 305, conData[38].hanja).click(handler13).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(125, 305, conData[39].hanja).click(handler14).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(205, 305, conData[40].hanja).click(handler15).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 305, conData[41].hanja).click(handler16).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 400, conData[42].hanja).click(handler17).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(125, 400, conData[43].hanja).click(handler18).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(205, 400, conData[44].hanja).click(handler19).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 400, conData[45].hanja).click(handler20).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 495, conData[46].hanja).click(handler21).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(125, 495, conData[47].hanja).click(handler22).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(205, 495, conData[48].hanja).click(handler23).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 495, conData[49].hanja).click(handler24).attr({
  'font-size': 32,
  'cursor': 'pointer'
});


// 핸들러 함수
function handler05() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[30].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler06() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[31].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler07() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[32].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler08() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[33].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler09() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[34].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler10() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[35].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler11() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[36].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler12() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[37].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler13() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[38].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler14() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[39].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler15() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[40].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler16() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[41].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler17() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[42].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler18() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[43].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler19() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[44].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler20() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[45].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler21() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[46].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler22() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[47].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler23() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[48].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler24() {
  var group = Paper.g();
  group.rect(50, 208, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 315, conData[49].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

// 하단 버튼
var buttonArea = Paper.g();

var redB = buttonArea.rect(130, 548, 90, 25).attr({
  'fill': '#e69138ff',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var redBT = buttonArea.text(141, 566, '깜빡이 카드').attr({
  'fill': 'black',
  'font-size': 15
});
var red = buttonArea.g(redB, redBT).click(handlerCard).attr({
  'cursor': 'pointer'
});

var orangeB = buttonArea.rect(240, 548, 90, 25).attr({
  'fill': '#ea9999ff',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var orangeBT = buttonArea.text(256, 566, '게임 도전!').attr({
  'fill': 'black',
  'font-size': 15
});
var orange = buttonArea.g(orangeB, orangeBT).click(handlerGame).attr({
  'cursor': 'pointer'
});

function handlerCard() {
  location.replace('flash_07-01.html');
}

function handlerGame() {
  location.replace('game_07.html');
}
