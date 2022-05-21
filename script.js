data = [
  {
    id: 0,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
  },
  {
    id: 1,
    question: "What are the data types supported by JavaScript?",
    answer: "Undefined,Null,Boolean,String,Symbol,Number,Object.",
  },
  {
    id: 2,
    question: "What are the features of JavaScript?",
    answer: "It is a lightweight, interpreted programming language.",
  },
  {
    id: 3,
    question: "How can you create an object in JavaScript?",
    answer: `var person = {
                name: "Daniel",
                age: 23
            };`,
  },
  {
    id: 4,
    question: "How can you create an Array in JavaScript?",
    answer: `var x = [];
            var y = [11,2,3,4,5];`,
  },
  {
    id: 5,
    question: "Which company developed JavaScript?",
    answer: "Netscape is the software company that developed JavaScript.",
  },
  {
    id: 6,
    question: "What are undeclared and undefined variables?",
    answer:
      "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.",
  },
  {
    id: 7,
    question: "Does JavaScript support automatic type conversion?",
    answer:
      "Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers",
  },
];

let cardsContainer = document.querySelector("#cards-container");

for (let i = 0; i < data.length; i++) {
  let newCard = document.createElement("div");
  let cardFront = document.createElement("div");
  let cardBack = document.createElement("div");
  let question = document.createElement("h3");
  let answer = document.createElement("p");
  let showAnswerBtn = document.createElement("button");
  let correctBtn = document.createElement("button");
  let incorrectBtn = document.createElement("button");

  newCard.classList.add("card");
  cardBack.classList.add("hidden");
  showAnswerBtn.classList.add("show-answer-btn");
  correctBtn.classList.add("correct-btn");
  incorrectBtn.classList.add("incorrect-btn");

  question.innerText = data[i].question;
  answer.innerText = data[i].answer;
  showAnswerBtn.innerText = "Show Answer";
  correctBtn.innerText = "Mark Correct";
  incorrectBtn.innerText = "Mark Incorrect";

  newCard.append(cardFront);
  newCard.append(cardBack);
  cardFront.append(question);
  cardFront.append(showAnswerBtn);
  cardBack.append(answer);
  cardBack.append(correctBtn);
  cardBack.append(incorrectBtn);
  cardsContainer.append(newCard);

  showAnswerBtn.addEventListener("click", () => {
    cardFront.classList.add("hidden");
    cardBack.classList.remove("hidden");
  });

  correctBtn.addEventListener("click", () => {
    cardBack.classList.add("hidden");
    cardFront.classList.add("correct");
    cardFront.classList.remove("incorrect");
    cardFront.classList.remove("hidden");
  });

  incorrectBtn.addEventListener("click", () => {
    cardBack.classList.add("hidden");
    cardFront.classList.add("incorrect");
    cardFront.classList.remove("correct");
    cardFront.classList.remove("hidden");
  });
}
