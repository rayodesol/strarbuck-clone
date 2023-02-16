// MAIN HEADER
// SEARCH

// 범위 좁혀 선택하기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// // 검색창 주변 클릭하면, focus 되게
// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });

////////////////////////////////////  실 습 - 내 코드  //////////////////////////////////////////////
// 검색창 토글 구현
// 검색창 밖을 클릭해 검색창을 줄이면(unclicked 없는 상태), 2번 클릭해야 검색창 늘어남
searchEl.classList.add("unclicked");

searchEl.addEventListener("click", function () {
  if (searchEl.classList.contains("unclicked")) {
    searchEl.classList.remove("unclicked");
    searchInputEl.focus();
  } else {
    searchEl.classList.add("unclicked");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////

// focus 생길 때, "통합 검색" 뜨게
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
  // searchEl.classList.add("unclicked");
});

// focus 사라질 때(like 검색창 외부 클릭할 때), "통합 검색" 사라지게
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
  // searchEl.classList.add("unclicked");
});

// SWIPER
// SWIPER NOTICE
// 생성자 사용은 html 파일 head 에 js 파일 위에 swiper 기능이 있는 js 파일을 넣었기 때문에 가능
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical", // 수직 방향으로 돌아감
    loop: true, // 무한 반복
    autoplay: true, // 아무 동작없이도 저절로 돌아가게
  }
);

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", // 기본값이 수평. 안 써줘도 됨.
  slidesPerView: 3, // 슬라이드에서 몇장 보여줄 것인지
  spaceBetween: 10, // 아이템 간 거리
  centeredSlides: true, // 핵심 슬라이드를 어디에 보여줄 것인지
  loop: true,

  autoplay: {
    // 객체를 줘서 세부사항 설정 가능
    delay: 1000,
    disableOnInteraction: false, // 사용자가 건드려도 계속 autoplay 되게
  },

  // 페이지 목록 점 버튼
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },

  // 좌우 이동 버튼 작동
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPlay 컨트롤
// + 버튼 누르면 autoplay 되게
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    // autoplay 안 되고 있으면 되게
    swiperPromotion.autoplay.start();
  } else {
    // autoplay 되고 있으면 안 되게
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

// 토글 넣었다 뺐다 -> 클래스 이름 추가/제거
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// 애니메이션 파트
// Visual
window.onload = function () {
  // 페이지가 로딩 되자마자 실행
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// 애니메이션 스크롤 파트
// 엘살바도르
window.addEventListener("scroll", function () {
  // 사용자의 스크롤 위치를 출력
  console.log(window.scrollY);

  // if (window.scrollY > 125) {
  //   const elsalvadorSection = document.querySelector(".elsalvador");
  //   elsalvadorSection.classList.add("animate");
  // }

  // if (window.scrollY > 750) {
  //   const elsalvadorSection = document.querySelector(".ethiopia");
  //   elsalvadorSection.classList.add("animate");
  // }

  // if (window.scrollY > 1250) {
  //   const elsalvadorSection = document.querySelector(".favorite");
  //   elsalvadorSection.classList.add("animate");
  // }

  // if (window.scrollY > 2000) {
  //   const elsalvadorSection = document.querySelector(".magazine");
  //   elsalvadorSection.classList.add("animate");
  // }

  // if (window.scrollY > 2375) {
  //   const elsalvadorSection = document.querySelector(".store");
  //   elsalvadorSection.classList.add("animate");
  // }

  // 페이지 밑에 부터 로딩될 때 예외 줄이는 방법
  // JS에선 if문이 여러개인 상태에서 조건이 점차적으로 포함될 때, 맨 위 if문이 실행되면 아래 if문도 해당되므로 실행 안 시킴
  // 메모리 효율상 익명함수 안에서 객체를 계속 생성시키는 것이 아닌 전역변수로 사용하는 것이 좋음.
  if (window.scrollY > 2375) {
    // CSS 에서 .elsalvador.animate 해야
    const elsalvadorSection = document.querySelector(".store");
    elsalvadorSection.classList.add("animate");
  } else if (window.scrollY > 2000) {
    const elsalvadorSection = document.querySelector(".magazine");
    elsalvadorSection.classList.add("animate");
  } else if (window.scrollY > 1250) {
    const elsalvadorSection = document.querySelector(".favorite");
    elsalvadorSection.classList.add("animate");
  } else if (window.scrollY > 750) {
    const elsalvadorSection = document.querySelector(".ethiopia");
    elsalvadorSection.classList.add("animate");
  } else if (window.scrollY > 125) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
});
