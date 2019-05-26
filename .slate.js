// ConfiG
S.cfga({
  "defaultToCurrentScreen": true,
  "secondsBetweenRepeat": 0.1,
  "checkDefaultsOnLoad": true,
  "focusCheckWidthMax": 3000,
  "orderScreensLeftToRight": true
});

// Monitors
var monTbolt = "3440x1440";
var monLaptop = "1680x1050";
var slackScreen = "1080x1920"

// Operations
var lapFull = S.op("move", {
  "screen": monLaptop,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY"
});
var lapChat = S.op("corner", {
  "screen": monLaptop,
  "direction": "top-left",
  "width": "screenSizeX/9",
  "height": "screenSizeY"
});
var lapMain = lapChat.dup({ "direction": "top-right", "width": "8*screenSizeX/9" });

var tboltFull = S.op("move", {
  "screen": monTbolt,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY"
});
var tboltBig = S.op("move", {
  "screen": monTbolt,
  "x": "screenOriginX+screenSizeX/3",
  "y": "screenOriginY",
  "width": "screenSizeX*2/3",
  "height": "screenSizeY",
});

// Batch bind everything. Less typing.
S.bnda({
  // Layout Bindings
  /*"padEnter:ctrl" : universalLayout,
  "space:ctrl" : universalLayout,

  // Basic Location Bindings
  "pad0:ctrl" : lapChat,
  "[:ctrl" : lapChat,
  "pad.:ctrl" : lapMain,
  "]:ctrl" : lapMain,
  "pad1:ctrl" : tboltLeftBot,
  "pad2:ctrl" : tboltMidBot,
  "pad3:ctrl" : tboltRightBot,
  "pad4:ctrl" : tboltLeftTop,
  "pad5:ctrl" : tboltMidTop,
  "pad6:ctrl" : tboltRightTop,
  "pad7:ctrl" : tboltLeft,
  "pad8:ctrl" : tboltMid,
  "pad9:ctrl" : tboltRight,
  "pad=:ctrl" : tboltFull,
*/

  // Resize Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"right:ctrl" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  //"left:ctrl" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
  //"up:ctrl" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
  //"down:ctrl" : S.op("resize", { "width" : "+0", "height" : "+10%" }),
  //"right:alt" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
  //"left:alt" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
  //"up:alt" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
  //"down:alt" : S.op("resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }),

  // Push Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;shift": S.op("push", { "direction": "right", "style": "bar-resize:screenSizeX/2" }),
  "left:ctrl;shift": S.op("push", { "direction": "left", "style": "bar-resize:screenSizeX/2" }),
  "up:ctrl;shift": S.op("push", { "direction": "up", "style": "bar-resize:screenSizeY/2" }),
  "down:ctrl;shift": S.op("push", { "direction": "down", "style": "bar-resize:screenSizeY/2" }),

  // Nudge Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  "right:ctrl;alt": S.op("nudge", { "x": "+10%", "y": "+0" }),
  "left:ctrl;alt": S.op("nudge", { "x": "-10%", "y": "+0" }),
  "up:ctrl;alt": S.op("nudge", { "x": "+0", "y": "-10%" }),
  "down:ctrl;alt": S.op("nudge", { "x": "+0", "y": "+10%" }),

  // Throw Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"pad1:ctrl;alt" : S.op("throw", { "screen" : "2", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "pad2:ctrl;alt" : S.op("throw", { "screen" : "1", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "pad3:ctrl;alt" : S.op("throw", { "screen" : "0", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "right:ctrl;alt;cmd" : S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "left:ctrl;alt;cmd" : S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "up:ctrl;alt;cmd" : S.op("throw", { "screen" : "up", "width" : "screenSizeX", "height" : "screenSizeY" }),
  // "down:ctrl;alt;cmd" : S.op("throw", { "screen" : "down", "width" : "screenSizeX", "height" : "screenSizeY" }),


  // Focus Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"l:cmd" : S.op("focus", { "direction" : "right" }),
  //"h:cmd" : S.op("focus", { "direction" : "left" }),
  //"k:cmd" : S.op("focus", { "direction" : "up" }),
  //"j:cmd" : S.op("focus", { "direction" : "down" }),
  //"k:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "j:cmd;alt": S.op("focus", { "direction": "behind" }),
  "right:cmd": S.op("focus", { "direction": "right" }),
  "left:cmd": S.op("focus", { "direction": "left" }),
  "up:cmd": S.op("focus", { "direction": "up" }),
  "down:cmd": S.op("focus", { "direction": "down" }),
  "up:cmd;alt": S.op("focus", { "direction": "behind" }),
  "down:cmd;alt": S.op("focus", { "direction": "behind" }),

  // Window Hints
  "esc:cmd": S.op("hint"),

  // Switch currently doesn't work well so I'm commenting it out until I fix it.
  //"tab:cmd" : S.op("switch"),

})

var grid = slate.operation("grid", {
  "grids": {
    "1680x1050": {
      "width": 3,
      "height": 2
    },
    "3440x1440": {
      "width": 6,
      "height": 3
    },
    "1080x1920": {
      "width": 2,
      "height": 3
    }
  },
  "padding": 5
});
slate.bind("g:cmd;ctrl", grid);

// Test Cases
//S.src(".slate.test", true);
//S.src(".slate.test.js", true);

var leftState, rightState = 0;

var resetLoopState = function () {
  leftState = 0;
  rightState = 0;
}

var pushRight = slate.operation("push", {
  "direction": "right",
  "style": "bar-resize:screenSizeX/2"
});

var pushTopRight = slate.operation("move", {
  "x": "screenOriginX + screenSizeX / 2",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2"
});

var pushBottomRight = slate.operation("move", {
  "x": "screenOriginX + screenSizeX / 2",
  "y": "screenOriginY + screenSizeY / 2",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2"
});

var pushLeft = slate.operation("push", {
  "direction": "left",
  "style": "bar-resize:screenSizeX/2"
});

var pushTopLeft = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2"
});

var pushBottomLeft = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY + screenSizeY / 2",
  "width": "screenSizeX / 2",
  "height": "screenSizeY / 2"
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
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY"
});

var throwNextFullscreen = slate.operation("throw", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY",
  "screen": "next"
});

var throwNext = function (win) {
  if (!win) {
    return;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  var newX = (winRect.x - screen.x) / screen.width + "*screenSizeX+screenOriginX";
  var newY = (winRect.y - screen.y) / screen.height + "*screenSizeY+screenOriginY";
  var newWidth = winRect.width / screen.width + "*screenSizeX";
  var newHeight = winRect.height / screen.height + "*screenSizeY";
  var throwNext = slate.operation("throw", {
    "x": newX,
    "y": newY,
    "width": newWidth,
    "height": newHeight,
    "screen": "next"
  });
  win.doOperation(throwNext);
};

var pushedLeft = function (win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
    winRect.y === screen.y &&
    winRect.width === screen.width / 2 &&
    winRect.height === screen.height
  ) {
    return true;
  }
  return false;
};

var pushedTopLeft = function (win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
    winRect.y === screen.y + screen.height / 2 &&
    winRect.width === screen.width / 2 &&
    winRect.height === screen.height / 2
  ) {
    return true;
  }
  return false;
};

var pushedBottomLeft = function (win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
    winRect.y === screen.y &&
    winRect.width === screen.width / 2 &&
    winRect.height === screen.height / 2
  ) {
    return true;
  }
  return false;
};

var pushedRight = function (win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x + screen.width / 2 &&
    winRect.y === screen.y &&
    winRect.width === screen.width / 2 &&
    winRect.height === screen.height
  ) {
    return true;
  }
  return false;
};

var isFullscreen = function (win) {
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
slate.bind("left:ctrl,cmd", function (win) {
  if (!win) {
    return;
  }

  var t = leftState
  resetLoopState();
  leftState = t;

  if (leftState == 0) {
    win.doOperation(pushLeft);
    leftState++;
  } else if (leftState == 1) {
    win.doOperation(pushTopLeft);
    leftState++;
  } else {
    win.doOperation(pushBottomLeft);
    leftState = 0;
  }
});

slate.bind("right:ctrl,cmd", function (win) {
  if (!win) {
    return;
  }

  var t = rightState
  resetLoopState();
  rightState = t;

  if (rightState == 0) {
    win.doOperation(pushRight);
    rightState++;
  } else if (rightState == 1) {
    win.doOperation(pushTopRight);
    rightState++;
  } else {
    win.doOperation(pushBottomRight);
    rightState = 0;
  }
});

slate.bind("up:ctrl,cmd", function (win) {
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

slate.bind("down:ctrl,cmd", function (win) {
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

// Log that we're done configuring
S.log("[SLATE] -------------- Finished Loading Config --------------");
