// 「完成」ボタンを押したら次の写真を表示させる
function NextStage(){
  const question = ['1','3','4','6','7','8','9','10','13'];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  const getQuestion = question[Math.floor(Math.random()*question.length)]
  sheet.getRange("A1:D4").setValue(getQuestion);
  addScore()
  resetBoad()
}

// マスを白に戻す
function resetBoad(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F2:J6").setBackground("white");
}

//スコア追加
function addScore(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  const nowScore = parseInt(sheet.getRange("C7:D7").getValue());
  sheet.getRange("C7:D7").setValue(nowScore+1);
}

//スコアリセット
function resetScore(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("C7:D7").setValue(0);
  resetBoad()
}

// 横軸ボタン(赤色)
function k2(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F2:J2").setBackground("red");
}

function k3(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F3:J3").setBackground("red");
}

function k4(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F4:J4").setBackground("red");
}


function k5(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F5:J5").setBackground("red");
}

function k6(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F6:J6").setBackground("red");
}

// 縦軸ボタン(緑色)

function f7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("F2:F6").setBackground("green");
}

function g7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("G2:G6").setBackground("green");
}

function h7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("H2:H6").setBackground("green");
}

function i7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("I2:I6").setBackground("green");
}

function j7(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ゲーム");
  sheet.getRange("J2:J6").setBackground("green");
}
