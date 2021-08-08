const quotes = [ {
    quote: "한국 여자 양궁은 5점을 몰라",
    author: "미상의 네티즌"
},
{
    quote: "안산 3관왕 왕축하 왕사랑",
    author: "안산을 어떻게 안산랑해"
},
{
    quote: "하루하루는 성실하게, 전체는 되는 대로!",
    author: "인생목표"
},
{
    quote: "아침형 인간 그거 어떻게 하는 거죠?",
    author: "이직꿈나무"
},
{
    quote: "당신은 이미 소설을 쓰기 시작했다 재밌다",
    author: "이승우 작가 좋아"
},
{
    quote: "영화 재밌는 거 보고싶다",
    author: "CGV VVIP 2년차"
},
{
    quote: "42서울 라피신 가고 싶어요",
    author: "미래의 피시너"
},
{
    quote: "내년 초엔 꼭 이직할거양",
    author: "개발꿈나무"
},
{
    quote: "올해 목표 15% 달성! 쾌거! 하반기가 남았다!",
    author: "새해목표"
},
{
    quote: "목표는 따상!!! 가즈아!!!!",
    author: "삼성전자 제발요"
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function quotePlayer() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

quotePlayer()
setInterval(quotePlayer, 10000);