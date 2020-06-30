'use strict';

function times(goal1) {
  const nowtime = new Date();

  const counttime = goal1.getTime() - nowtime.getTime();     // goalは別で定義している

  const days  = Math.floor(counttime / 1000 / 60 / 60 / 24)  // 日
  const hours = Math.floor(counttime / 1000 / 60 / 60) % 24; // 時間
  const min   = Math.floor(counttime / 1000 / 60) % 60;      // 分
  const sec   = Math.floor(counttime / 1000) % 60;           // 秒
  const count = [days, hours, min, sec];

  return count;
}

function countdown(countdown) {
  // console.log(times(goal));
  const goal2 = times(goal);
  const time = `${goal2[0]}日${String(goal2[1]).padStart(2,'0')}時間${String(goal2[2]).padStart(2,'0')}分${String(goal2[3]).padStart(2,'0')}秒`
  document.getElementById('timer').textContent = time;
  reset(reset);
}

function reset(reset) {
  setTimeout(countdown,1000);
}

// let goal = new Date();
//   goal.setHours(23);
//   goal.setMinutes(59);
//   goal.setSeconds(59);

const goal = new Date(2030,4,1) 

countdown(countdown);



