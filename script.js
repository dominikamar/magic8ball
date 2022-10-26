const ballImg = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArray = [
	"Tak",
	"Nie",
	"Może",
	"Nie licz na to",
	"Chyba żartujesz!",
	"Jasne, że tak!",
	"Jeśli bardzo się postarasz...",
	"Nigdy w życiu",
	"Masz to jak w banku",
];

const startAnimation = () => {
	ballImg.classList.add("shake-animation");
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== "" && input.value.slice(-1) === "?") {
		answerDraw();
		error.textContent = "";
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = "Pytanie musi być zakończone znakiem zapytania.";
		answer.textContent = "";
	} else {
		error.textContent = "Musisz zadać jakieś pytanie!";
		answer.textContent = "";
	}
	ballImg.classList.remove("shake-animation");
};

const answerDraw = () => {
	const number = Math.floor(Math.random() * answersArray.length);
	answer.innerHTML = `<span> Odpowiedź: </span> ${answersArray[number]}`;
};

ballImg.addEventListener("click", startAnimation);
