// 7급 게임
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
    },

    //////////////////////////////////////////////////////////////////////////////////////////////
    generateMatchgame: function(params) {
        var condition = params.condition;
        var count = params.choiceCount;
        var pairInfo = {};
        var conData = data.slice(30, 55);
        var paper = Paper.g();

        conData = conData.filter(function(el) {
            if (el.jei_set.indexOf(condition.grade) === -1) return false;
            var setNum = Number(el.jei_set.substring(1, 3));
            if (setNum < condition.setRange[0] || condition.setRange[1] < setNum) return false;
            return true;
        });

        conData = shuffle(conData).slice(0, count);

        var choiceData = conData.map(function(el) {
            return {
                hanja: el.hanja,
                removed: false
            };
        });

        var meanData = conData.map(function(el) {
            return el.mean;
        });

        meanData = shuffle(meanData);

        meanData = meanData.map(function(el) {
            return {
                mean: el,
                answer: findIndex(el, conData)
            };
        });

        function findIndex(mean, data) {
            var index;
            for (var i = 0; i < data.length; i++) {
                if (data[i].mean === mean) {
                    index = i;
                    break;
                }
            }
            return index;
        }

        function shuffle(arr) {
            return (arr.slice()).sort(function() {
                return Math.random() - 0.5;
            });
        }

        return {
            choiceData: choiceData,
            meanData: meanData,

        };
    },

    drawQuestion04: function(params) {
        var paper = params.paper.g();
        var questionInfo = params.questionInfo; //mean

        paper.text(180, 120, questionInfo).attr({
            'font-size': 43,
            'text-anchor': 'middle'
        });

        return paper;
    },

    drawChoice04: function(params) {
        var paper = params.paper.g();
        var exampleInfo = params.exampleInfo;
        var choices = [];

        for (var i = 0; i < exampleInfo.length; i++) {
            choices[i] = paper.g();
            choices[i].attr({
                'cursor': 'pointer',
                'visibility': (exampleInfo[i].removed ? 'hidden' : 'visible')
            });
            choices[i].rect(20 + (i % 5) * 65, 165 + Math.floor(i / 5) * 65, 60, 60, 5, 5).attr({
                'fill': 'white',
                'stroke': '#a2c4c9ff',
                'stroke-width': 1.5
            });
            choices[i].text(50 + (i % 5) * 65, 205 + Math.floor(i / 5) * 65, exampleInfo[i].hanja).attr({
                'font-size': 30,
                'text-anchor': 'middle'
            });
        }

        // 시간 체크
        paper.rect(40, 524, 280, 7, 5).attr({
            'fill': '#dcdcdc'
        });
        var maskBar = paper.mask();
        var mBar = maskBar.rect(40, 523, 280, 8, 5).attr({
            'fill': 'white'
        });
        mBar.animate({
            'width': 8
        }, 15000);
        var myBar = paper.rect(40, 523, 280, 8, 5).attr({
            'fill': '#b4b4dc',
            'mask': maskBar
        });
        paper.image('img/clock.png', 32, 518, 17, 17);

        return choices;
    },

    choiceCheck04: function(params) {
        var choices = params.choices;
        var rightAnswer = params.answer;
        var callback = params.callback;

        for (var i = 0; i < choices.length; i++) {
            choices[i].data('i', i).click(handler);
        }

        function handler() {
            var userChoice = this.data('i');
            var check = userChoice === rightAnswer;
            var self = this;

            this.select('rect').attr({
                'fill': (check ? 'LemonChiffon' : 'gray')
            });

            setTimeout(function() {
                if (check) {
                    self.remove();
                    var code01 = new Audio('aud/code01.wav');
                    code01.play();
                    callback();
                } else {
                    clearColor();
                    var code02 = new Audio('aud/code02.wav');
                    code02.play();

                }
            }, 500);
        }

        function clearColor() {
            for (var i = 0; i < choices.length; i++) {
                choices[i].select('rect').attr({
                    'fill': 'white'
                });
            }
        }
    },
};

Library.drawLayout();
