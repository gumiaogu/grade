var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();

var Library = {
  //SVG 외곽선
  drawLayout: function() {
    Paper.rect(0, 0, 360, 640, 6).attr({
      'stroke': 'gray',
      'fill': 'none'
    });

    // 상단 박스
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
  },

  Generate: function(params) {
    var condition = params.condition;
    var choiceCount = params.choiceCount;
    var type = params.type;

    this.hanja = '';
    this.voca = '';
    this.choiceInfo = {};

    var conData = data.slice();

    this.generate = function() {
      conData = conData.filter(function(el) {
        if (el.jei_set.indexOf(condition.grade) === -1) return false;
        var setNum = Number(el.jei_set.slice(1, 3));
        if (setNum < condition.setRange[0] || condition.setRange[1] < setNum) return false;
        return true;
      });
      conData = shuffle(conData);

      this.hanja = conData[0].hanja;
      this.voca = conData[0].voca;
      this.idiom = conData[0].idiom;
      var que = type === 0 ? this.hanja : this.voca;
      this.choiceInfo = makeChoice(que);

      conData.shift();
    };

    // 전체 보기
    function makeChoice(que) {

      var choiceData = getChoiceData(que);
      var answerIndex = getAnswerIndex(que);

      var answer = type === 0 ? data[answerIndex].voca : data[answerIndex].hanja;
      var wholeChoice = choiceData.concat([answer]);

      return {
        choices: shuffle(wholeChoice),
        rightAnswer: shuffle(wholeChoice).indexOf(answer)
      };
    }

    // 정답 인덱스
    function getAnswerIndex(que) {
      var index;
      data.forEach(function(el, i) {
        if (type === 0) {
          if (el.hanja === que) {
            index = i;
          }
        } else {
          if (el.voca === que) {
            index = i;
          }
        }
      });
      return index;
    }

    // 오답 보기
    function getChoiceData(que) {

      var answerIndex = getAnswerIndex(que);
      var copyData = data.slice();
      var newData = [];

      for (var i = 0; i < copyData.length; i++) {
        if (type === 0) {
          if (i !== answerIndex) {
            newData.push(copyData[i].voca);
          }
        } else {
          if (i !== answerIndex) {
            newData.push(copyData[i].hanja);
          }
        }
      }
      var choiceData = shuffle(newData).slice(0, choiceCount - 1);
      return choiceData;
    }

    function shuffle(arr) {
      return arr.sort(function() {
        return Math.random() - 0.5;
      });
    }
  },

  Progress: function(totCount) {
    var paper = Paper.g();
    var count = 1;
    var countText = count + ' / ' + totCount;

    var text = paper.text(180, 30, countText).attr({
      'fill': 'gray',
      'font-size': 20,
      'text-anchor': 'middle'
    });

    this.countUp = function(bool) {
      count += 1;
      text.attr({
        'text': count + ' / ' + totCount,
      });
    };

    this.remove = function() {
      paper.remove();
    };
  },

  // 문제 만들기 함수
  drawQuestion: function(params) {
    var paper = params.paper.g();
    var type = params.type;
    var questionInfo = params.questionInfo;
    var endCallback = params.endCallback;

    if (type === 0) {
      paper.text(180, 205, questionInfo).attr({
        'font-size': 90,
        'letter-spacing': -1,
        'text-anchor': 'middle'
      });
    } else {
      paper.text(175, 190, questionInfo).attr({
        'font-size': 60,
        'text-anchor': 'middle'
      });
    }
    return paper;
  },

  // 보기 만들기 함수
  drawChoice: function(params) {
    var paper = params.paper.g();
    var exampleInfo = params.exampleInfo;
    var choices = [];
    if (type === 0) {

      for (var i = 0; i < exampleInfo.choices.length; i++) {
        choices[i] = paper.g();
        choices[i].attr({
          'cursor': 'pointer'
        });

        choices[i].rect(55, (i * 90) + 265, 250, 75).attr({
          'fill': '#6ab6cf13',
          'stroke': '#b7b7b7',
          'rx': 8,
          'ry': 8
        });

        choices[i].text(180, (i * 90) + 315, exampleInfo.choices[i]).attr({
          'font-size': 42,
          'fill': '#777777',
          'text-anchor': 'middle'
        });
      }
    } else {
      paper.rect(30, 245, 300, 350).attr({
        'fill': '#ffe6cc'
      });

      for (var k = 0; k < exampleInfo.choices.length; k++) {
        choices[k] = paper.g();
        choices[k].attr({
          'cursor': 'pointer'
        });

        choices[k].circle(110 + (k % 2) * 140, 340 + Math.floor(k / 2) * 160, 55).attr({
          'fill': 'white'
        });

        choices[k].text(110 + (k % 2) * 140, 360 + Math.floor(k / 2) * 160, exampleInfo.choices[k]).attr({
          'font-size': 55,
          'fill': '#777777',
          'text-anchor': 'middle'
        });
      }
    }
    return choices;
  },

  // 정답 체크 함수
  choiceCheck: function(params) {
    var choices = params.choices;
    var rightAnswer = params.exampleInfo.rightAnswer;
    var callback = params.callback;
    var feed = params.feed;

    // 이벤트 설정
    for (var i = 0; i < choices.length; i++) {
      choices[i].data('i', i).click(handler);
    }

    function handler() {
      choices.forEach(function(el) {
        el.attr({
          'pointer-events': 'none'
        });
      });

      handler2(this, '#E7EAFF');
      //#ffe6cc
      var userChoice = this.data('i');
      var check = userChoice === rightAnswer;
      var fdEl;
      if (check) {
        fdEl2 = Paper.image('img/cha05.png', 285, 90, 60, 60);
        fdEl1 = Paper.image('img/rightImg.png', 259, 62, 53, 50);

        fdEl = Paper.g(fdEl2, fdEl1);
      } else {
        fdEl4 = Paper.image('img/cha055.png', 15, 90, 60, 60);
        fdEl3 = Paper.image('img/wrongImg.png', 48, 62, 53, 50);

        fdEl = Paper.g(fdEl4, fdEl3);

        // 틀렸을 때, 정답 버튼 효과
        setTimeout(function() {
         handler2(choices[rightAnswer], '#54b5d593');
        }, 500);
      }

      // 다음 문제
      setTimeout(function() {
        fdEl.remove();
        callback(check, userChoice);
      }, 2000);
    }

    function handler2(el, color) {
      var text = el.select('text');
      text.attr({
        'font-weight': 'bold',
        'fill': '#000000'
      });
      if (type === 0) {
        var rect = el.select('rect');
        rect.attr({
          'fill': color
        });
      } else {
        var cir = el.select('circle');
        cir.attr({
          'fill': '#edf3f3'
        });
      }
    }
  },
};

Library.drawLayout();
