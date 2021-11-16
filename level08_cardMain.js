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
var topArea = Paper.g();

// topArea.text(85, 95, '한자를 클릭해서 뜻음 확인하기!').attr({
//   'font-size': 15
// });

// 한자
var bottomArea = Paper.g();

for (var i = 0; i < 6; i++) {
  bottomArea.rect(30, (i * 85) + 65, 300, 60, 5).attr({
    'fill': '#f1f3f4'
  });
}

var hanjaChoices = Paper.g();
var conData = data.slice(0, 30);

hanjaChoices.text(45, 105, conData[0].hanja).click(handler05).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 105, conData[1].hanja).click(handler06).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 105, conData[2].hanja).click(handler07).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 105, conData[3].hanja).click(handler08).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 105, conData[4].hanja).click(handler09).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 190, conData[5].hanja).click(handler10).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 190, conData[6].hanja).click(handler11).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 190, conData[7].hanja).click(handler12).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 190, conData[8].hanja).click(handler13).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 190, conData[9].hanja).click(handler14).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 275, conData[10].hanja).click(handler15).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 275, conData[11].hanja).click(handler16).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 275, conData[12].hanja).click(handler17).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 275, conData[13].hanja).click(handler18).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 275, conData[14].hanja).click(handler19).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 360, conData[15].hanja).click(handler20).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 360, conData[16].hanja).click(handler21).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 360, conData[17].hanja).click(handler22).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 360, conData[18].hanja).click(handler23).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 360, conData[19].hanja).click(handler24).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 445, conData[20].hanja).click(handler25).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 445, conData[21].hanja).click(handler26).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 445, conData[22].hanja).click(handler27).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 445, conData[23].hanja).click(handler28).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 445, conData[24].hanja).click(handler29).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 530, conData[25].hanja).click(handler30).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 530, conData[26].hanja).click(handler31).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 530, conData[27].hanja).click(handler32).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 530, conData[28].hanja).click(handler33).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 530, conData[29].hanja).click(handler34).attr({
  'font-size': 32,
  'cursor': 'pointer'
});


// 핸들러 함수
function handler05() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[0].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[1].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[2].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[3].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[4].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[5].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[6].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[7].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[8].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[9].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[10].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[11].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[12].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[13].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[14].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[15].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[16].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[17].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[18].mean).attr({
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
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[19].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler25() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[20].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler26() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[21].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler27() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[22].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler28() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[23].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler29() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[24].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler30() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[25].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler31() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[26].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler32() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[27].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler33() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[28].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler34() {
  var group = Paper.g();
  group.rect(50, 218, 255, 180, 5).attr({
    'fill': '#ffe599ff'
  });
  group.text(180, 325, conData[29].mean).attr({
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

var redB = buttonArea.rect(130, 568, 90, 25).attr({
  'fill': '#e69138ff',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var redBT = buttonArea.text(141, 586, '깜빡이 카드').attr({
  'fill': 'black',
  'font-size': 15
});
var red = buttonArea.g(redB, redBT).click(handlerCard).attr({
  'cursor': 'pointer'
});

var orangeB = buttonArea.rect(240, 568, 90, 25).attr({
  'fill': '#ea9999ff',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var orangeBT = buttonArea.text(256, 586, '게임 도전!').attr({
  'fill': 'black',
  'font-size': 15
});
var orange = buttonArea.g(orangeB, orangeBT).click(handlerGame).attr({
  'cursor': 'pointer'
});

function handlerCard() {
  location.replace('flash_08-01.html');
}

function handlerGame() {
  location.replace('game_08.html');
}
