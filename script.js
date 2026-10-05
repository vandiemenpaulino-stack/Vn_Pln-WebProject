/* ======================
   SECTION SWITCHER
====================== */
function showSection(sectionId) {
    const sections = document.querySelectorAll(".page-section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

/* ======================
   EXERCISE 2
====================== */

function activity1(){
    alert("Welcome to JavaScript!");
    console.log("This is my first JS program.");
}

function activity2(){
    alert("Check the Console.");
    let name = "Vandiemen";
    let age = 20;
    let isStudent = true;

    console.log(name, age, isStudent);
    console.log(`My name is ${name}, I am ${age} years old.`);
}

function activity3(){
    alert("Check the Console.");

    let num1 = 10;
    let num2 = 5;

    console.log("Sum:", num1 + num2);
    console.log("Difference:", num1 - num2);
    console.log("Product:", num1 * num2);
    console.log("Quotient:", num1 / num2);
}

function activity4(){
    let userName = prompt("What is your name?");
    let favoriteNumber = prompt("What is your favorite number?");
    alert(`Hello ${userName}! Your favorite number is ${favoriteNumber}.`);
}

function activity5(){
    let userAge = Number(prompt("Enter your age:"));
    alert(userAge >= 18 ? "You are eligible." : "You are not eligible.");
}

function activity6(){
    alert("Check Console for loop output.");

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    let j = 10;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

/* ======================
   EXERCISE 3
====================== */

/* Background Color */
/* ======================
   THEME SYSTEM
====================== */

const body = document.body;
const darkBtn = document.getElementById("darkmodeBtn");
const bgBtn = document.getElementById("changebgBtn");

/* ---------- Load Saved Theme ---------- */
document.addEventListener("DOMContentLoaded", () => {

    // Auto-detect system preference
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
        body.classList.remove("dark-mode");
    } else if (systemDark) {
        body.classList.add("dark-mode");
    }

});

/* ---------- Dark Mode Toggle ---------- */
darkBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

/* ---------- Background Toggle ---------- */
bgBtn.addEventListener("click", () => {

    body.classList.toggle("alt-background");

});
/* Add List Item */
document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("itemInput");
    const list = document.getElementById("itemList");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
});

/* Remove Paragraph */
document.getElementById("removeBtn").addEventListener("click", () => {
    const para = document.getElementById("removePara");
    if (para) para.remove();
    alert("Paragraph removed!");
});

/* Character Counter */
document.getElementById("charInput").addEventListener("input", (e) => {
    document.getElementById("charCount").textContent = e.target.value.length;
});

/* Calculator */
document.getElementById("addCalcBtn").addEventListener("click", () => {
    const value1 = Number(document.getElementById("num1").value);
    const value2 = Number(document.getElementById("num2").value);
    document.getElementById("result").textContent = value1 + value2;
});

/* Change Image */
document.getElementById("changeImgBtn").addEventListener("click", () => {
    const image = document.getElementById("myImage");

    image.src = image.src.includes("image1.jpg")
        ? "images/image2.jpg"
        : "images/image1.jpg";
});

/* To-Do List */
document.getElementById("addTodoBtn").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    const list = document.getElementById("todoList");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }
});

/* ======================
   EXERCISE 4
====================== */

document.addEventListener("DOMContentLoaded", () => {

const calcBtn = document.getElementById("calcGradeBtn");
const resetBtn = document.getElementById("resetGradeBtn");

if(calcBtn){

calcBtn.addEventListener("click", () => {

    const quiz = Number(document.getElementById("quizScore").value);
    const exam = Number(document.getElementById("examScore").value);
    const mco = Number(document.getElementById("mcoScore").value);

    if(isNaN(quiz) || isNaN(exam) || isNaN(mco)){
        alert("Please enter all scores.");
        return;
    }

    const grade = (quiz * 0.20) + (exam * 0.30) + (mco * 0.50);

    let equivalent = "";

    if(grade >= 90) equivalent = "A";
    else if(grade >= 80) equivalent = "B";
    else if(grade >= 70) equivalent = "C";
    else if(grade >= 60) equivalent = "D";
    else equivalent = "F";

    document.getElementById("finalGrade").textContent = grade.toFixed(2);
    document.getElementById("gradeEquivalent").textContent = equivalent;

});

}

if(resetBtn){

resetBtn.addEventListener("click", () => {

    document.getElementById("quizScore").value = "";
    document.getElementById("examScore").value = "";
    document.getElementById("mcoScore").value = "";

    document.getElementById("finalGrade").textContent = "-";
    document.getElementById("gradeEquivalent").textContent = "-";

});

}

});