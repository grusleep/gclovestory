// 스크립트 파일은 필요에 따라 추가 기능을 구현하는데 사용하세요.
// 예: 인터랙티브한 요소 추가, API 호출 등
console.log("웹페이지가 로드되었습니다.");

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slideShow = document.querySelector('.slideShow');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slideShow.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

/*======================== 디데이 =========================*/

const DDay = document.querySelector("#DDay");
const daysElement = document.querySelector("#days");

function find_day() {
    const targetDate = new Date("2024-02-18");  // 디데이 설정
    const today = new Date();  // 현재 날짜와 시간
    
    const dayGap = today - targetDate;
    
    const days = Math.floor(dayGap / (1000 * 60 * 60 * 24)) + 1;  // 일수 계산
    
    daysElement.innerText = days;
}
  
find_day();
/*=======================================================*/

