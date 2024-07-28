const remainTime = document.querySelector("#dDay");
const todays = document.querySelector("#day");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function diffDay() {
  const remainDate = new Date("2024-12-25");
  const todayTime = new Date();

  const diff = remainDate - todayTime;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);

function nowDays() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = week[today.getDay()];
  todays.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
}

nowDays();
