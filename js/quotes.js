const quotes = [
  {
    quote: "강한 자가 이기는 것이 아니라, 이기는 자가 강한 것이다.",
    author: "프란츠 베켄바워",
  },
  {
    quote: "폼은 일시적이지만 클래스는 영원하다.",
    author: "빌 샹클리",
  },
  {
    quote: "힘이드는가? 오늘 멈춘다면 내일은 뛰어야 한다.",
    author: "카를레스 푸욜",
  },
  {
    quote: "신사는 숙녀가 원할때 떠나지 않는법이다.",
    author: "알레산드로 델피에로",
  },
  {
    quote: "나는 공을 막는 것이 아니라 팀의 패배를 막는 것이다.",
    author: "이케르 카시야스",
  },
  {
    quote: "나의 장점은 드리블도 스피드도 아닌 축구에 대한 열정이다.",
    author: "호나우두",
  },
  {
    quote: "베토벤이 음악을 위해 태어난 것처럼 나는 축구를 위해 태어났다.",
    author: "펠레",
  },
  {
    quote: "쓰러질지언정 무릎은 꿇지 않는다.",
    author: "박지성",
  },
  {
    quote:
      "실력이 떨어지면 남들보다 더 많은 노력을 기울여 이를 극복하면 되는 것이다. 무엇보다 가장 필요한 것은 스스로 하고자 하는 의지이다.",
    author: "거스 히딩크",
  },
  {
    quote: "미친 사람이 이성적인 사람보다 세상을 많이 변화시킨다.",
    author: "에릭 칸토나",
  },
];

const quote = document.querySelector("#quote h3:first-child");
const author = document.querySelector("#quote h3:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
