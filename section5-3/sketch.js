// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);

  

const mounthNumber = [1,4,3,6,1,4,6,3,5,0,3,5];
const dateNumber = ["日曜","月曜","火曜","水曜","木曜","金曜","土曜"];
let num;
let date;
let year4;
let j;

function dayOfWeek(y, m, d){
  
  if(m == 1||m == 2){
    year4 = y-1
  }else{
    year4 = y
  };
    
  if(y < 2000){
    j =1
  }else{
    j = 0
  };
  let year2 = year4 % 100;
  num = year2 + (Math.floor(year2 / 4)) + mounthNumber[m-1] + d + j;
  date = dateNumber[(num % 7)-1]
  console.log(y+"年"+m+"月"+d+"日は"+date+"です");
  
 
}

dayOfWeek(2015, 5, 29)
}










/*
function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
*///

