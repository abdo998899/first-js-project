let div = document.querySelectorAll(".qna div div");
let p = document.querySelectorAll(".qna div p");

div.forEach(function (e) {
  e.onclick = function (a) {
    a.currentTarget.classList.toggle("show");
  };
});
