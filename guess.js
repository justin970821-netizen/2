const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

let answer = Math.floor(Math.random() * 100) + 1;
console.log("答案：", answer);

let countNum = 0;

function checkGuess() {
    countNum++;
    count.textContent = "猜測次數：" + countNum;

    const userGuess = Number(guessField.value);

    guesses.textContent += userGuess + " ";

    if (answer === userGuess) {
        result.textContent = "猜測結果：Congratulations!";
        endGame();
    } 
    else if (userGuess > answer) {
        result.textContent = "猜測結果：數字太大!";
    } 
    else if (userGuess < answer) {
        result.textContent = "猜測結果：數字太小!";
    }

    // 可限制次數，例如 10 次
    if (countNum >= 10 && userGuess !== answer) {
        result.textContent = "遊戲結束！答案是：" + answer;
        endGame();
    }

    guessField.value = "";
    guessField.focus();
}

// 遊戲結束
function endGame() {
    result.style.backgroundColor = "red";
    alert("遊戲結束");
    setGameOver();
}

// 停用輸入
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

// 重啟遊戲
function initGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("新答案：", answer);

    countNum = 0;
    count.textContent = "猜測次數：0";
    result.textContent = "";
    guesses.textContent = "";

    guessField.disabled = false;
    guessSubmit.disabled = false;

    result.style.backgroundColor = "";
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", initGame);