// MAIN HEADER
// SEARCH

// 범위 좁혀 선택하기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// // 검색창 주변 클릭하면, focus 되게
// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });

////////////////////////////////////  실 습  //////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////

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
