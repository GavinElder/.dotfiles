var leftState, rightState = 0;

var resetLoopState = function() {
  leftState = 0;
  rightState = 0;
}

var pushRight = slate.operation("push", {
  "direction": "right",
  "style": "bar-resize:screenSizeX/2"
});

var pushTopRight = slate.operation("move", {
  "x" : "screenOriginX + screenSizeX / 2",
  "y" : "screenOriginY",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

var pushBottomRight = slate.operation("move", {
  "x" : "screenOriginX + screenSizeX / 2",
  "y" : "screenOriginY + screenSizeY / 2",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

var pushLeft = slate.operation("push", {
  "direction": "left",
  "style": "bar-resize:screenSizeX/2"
});

var pushTopLeft = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

var pushBottomLeft = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY + screenSizeY / 2",
  "width" : "screenSizeX / 2",
  "height" : "screenSizeY / 2"
});

var throwNextLeft = slate.operation("throw", {
  "width": "screenSizeX/2",
  "height": "screenSizeY",
  "screen": "next"
});

var throwNextRight = slate.operation("throw", {
  "x": "screenOriginX+(screenSizeX)/2",
  "y": "screenOriginY",
  "width": "screenSizeX/2",
  "height": "screenSizeY",
  "screen": "next"
});

var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

var throwNextFullscreen = slate.operation("throw", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY",
  "screen": "next"
});

var throwNext = function(win) {
  if (!win) {
    return;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  var newX = (winRect.x - screen.x)/screen.width+"*screenSizeX+screenOriginX";
  var newY = (winRect.y - screen.y)/screen.height+"*screenSizeY+screenOriginY";
  var newWidth = winRect.width/screen.width+"*screenSizeX";
  var newHeight = winRect.height/screen.height+"*screenSizeY";
  var throwNext = slate.operation("throw", {
    "x": newX,
    "y": newY,
    "width": newWidth,
    "height": newHeight,
    "screen": "next"
  });
  win.doOperation(throwNext);
};

var pushedLeft = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
      winRect.y === screen.y &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};

var pushedTopLeft = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
      winRect.y === screen.y + screen.height/2 &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height/2
    ) {
    return true;
  }
  return false;
};

var pushedBottomLeft = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
      winRect.y === screen.y &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height/2
    ) {
    return true;
  }
  return false;
};

var grid = slate.operation("grid", {
  "grids" : {
    "1680x1050" : {
      "width" : 16,
      "height" : 9
    },
    "3440x1440" : {
      "width" : 6,
      "height" : 3
    },
    "1800x1920" : {
      "width" : 1,
      "height" : 3
    }
  },
  "padding" : 5
});

var grid1 = slate.operation("grid", {
  "grids" : {
    "1680x1050" : {
      "width" : 6,
      "height" : 6
    },
    "3440x1440" : {
      "width" : 6,
      "height" : 3
    },
    "1800x1920" : {
      "width" : 1,
      "height" : 3
    }
  },
  "padding" : 5
});

var pushedRight = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x + screen.width/2 &&
      winRect.y === screen.y &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};

var isFullscreen = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();
  if (winRect.width === screen.width &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};

var leftState = 3;
slate.bind("left:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  var t = leftState
  resetLoopState();
  leftState = t;

  if (leftState == 0) {
    win.doOperation(pushLeft);
    leftState++;
  } else if (leftState == 1){
    win.doOperation(pushTopLeft);
    leftState++;
  } else {
    win.doOperation(pushBottomLeft);
    leftState = 0;
  }
});

slate.bind("right:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  var t = rightState
  resetLoopState();
  rightState = t;

  if (rightState == 0) {
    win.doOperation(pushRight);
    rightState++;
  } else if (rightState == 1){
    win.doOperation(pushTopRight);
    rightState++;
  } else {
    win.doOperation(pushBottomRight);
    rightState = 0;
  }
});

slate.bind("up:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  resetLoopState();

  if (isFullscreen(win)) {
    win.doOperation(throwNextFullscreen);
  } else {
    win.doOperation(fullscreen);
  }
});

slate.bind("down:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  if (pushedLeft(win)) {
    win.doOperation(throwNextLeft);
  } else if (pushedRight(win)) {
    win.doOperation(throwNextRight);
  } else if (isFullscreen(win)) {
    win.doOperation(throwNextFullscreen);
  } else {
    throwNext(win);
  }
});







