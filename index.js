const btnLike1 = document.getElementById("btnLike1");
const countLike1 = document.getElementById("countLike1");
const btnDislike1 = document.getElementById("btnDislike1");
const countDislike1 = document.getElementById("countDislike1");

function clickLike1() {
  let totalLikes = parseInt(countLike1.textContent) + 1;
  countLike1.textContent = totalLikes.toString();
}

function clickDislike1() {
  let totalDislikes = parseInt(countDislike1.textContent) + 1;
  countDislike1.textContent = totalDislikes.toString();
}

btnLike1.addEventListener("click", clickLike1);
btnDislike1.addEventListener("click", clickDislike1);

const btnLike2 = document.getElementById("btnLike2");
const countLike2 = document.getElementById("countLike2");
const btnDislike2 = document.getElementById("btnDislike2");
const countDislike2 = document.getElementById("countDislike2");

function clickLike2() {
  let totalLikes = parseInt(countLike2.textContent) + 1;
  countLike2.textContent = totalLikes.toString();
}

function clickDislike2() {
  let totalDislikes = parseInt(countDislike2.textContent) + 1;
  countDislike2.textContent = totalDislikes.toString();
}

btnLike2.addEventListener("click", clickLike2);
btnDislike2.addEventListener("click", clickDislike2);
