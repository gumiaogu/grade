var GAME02 = {
  paper: Paper.g(),
  type: 0, // 0: 한자 gen, 1: 뜻음 gen
  count: 0,
  repeatCount: 43,
  progress: {},
  gen: {},
  condition: {
    grade: '네',
    setRange: [7]
  },
  choiceCount: 4,
  result: [],
  configure: function() {
    var self = GAME02;

    // progress 인스턴스 생성
    self.progress = new Library.Progress(self.repeatCount);

    // generate 인스턴스 생성
    self.gen = new Library.Generate({
      type: self.type,
      condition: self.condition,
      choiceCount: self.choiceCount
    });
  },

  generate: function() {
    var self = GAME02;
    self.gen.generate();
  },

  makeQuestion: function() {
    var self = GAME02;
    type = self.type;
    self.questionInfo = type === 0 ? self.gen.hanjaTango : self.gen.goyi;

    Library.drawQuestion({
      paper: self.paper,
      type: self.type,
      questionInfo: self.questionInfo,
    });
  },

  makeChoice: function() {
    var self = GAME02;
    var exampleInfo = self.gen.choiceInfo;
    self.feed = self.gen.idiom;

    var choices = Library.drawChoice({
      paper: self.paper,
      type: self.type,
      exampleInfo: exampleInfo
    });

    Library.choiceCheck({
      type: self.type,
      choices: choices,
      exampleInfo: exampleInfo,
      callback: self.control,
      feed: self.feed
    });
  },

  control: function(bool, userChoice) {
    var self = GAME02;

    self.result.push({
      result: bool,
      userChoice: userChoice,
      question: self.questionInfo,
      choiceInfo: self.gen.choiceInfo
    });

    self.count += 1;

    if (self.count === self.repeatCount) {
      self.report();
    } else {
      self.paper.clear();
      self.generate();
      self.makeQuestion();
      self.makeChoice();
      self.progress.countUp();
    }
  },

  report: function() {
    var self = GAME02;
    self.paper.clear();
    self.progress.remove();

    var result = self.result;
    var reportG = self.paper.g();

    var rightCount = 0;
    result.forEach(function(el) {
      if (el.result) rightCount += 1;
    });

    reportG.rect(0, 0, 360, 640, 6).attr({
      'stroke': 'gray',
      'fill': '#6ab6cf13'
    });

    reportG.image('img/cha03.png', 105, 150, 170, 170);

    var redB = reportG.rect(36, 410, 120, 40).attr({
      'fill': '#e69138ff',
      'rx': 8,
      'ry': 8
    });
    var redBT = reportG.text(77, 435, '재도전').attr({
      'fill': 'white',
      'font-size': 15
    });
    var red = reportG.g(redB, redBT).click(handler01).attr({
      'cursor': 'pointer'
    });

    function handler01() {
      location.reload();
    }

    var orangeB = reportG.rect(200, 410, 120, 40).attr({
      'fill': '#ea9999ff',
      'rx': 8,
      'ry': 8
    });
    var orangeBT = reportG.text(235, 435, '처음으로').attr({
      'fill': 'white',
      'font-size': 15
    });
    var orange = reportG.g(orangeB, orangeBT).click(handler02).attr({
      'cursor': 'pointer'
    });

    function handler02() {
      location.replace('start_level07.html');
    }
  },

  start: function() {
    var self = GAME02;
    self.configure();
    self.generate();
    self.makeQuestion();
    self.makeChoice();
  }
};

GAME02.start();
