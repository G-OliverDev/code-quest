const totalQuestions = 5
const result = document.getElementById('result')
let selectedAnswer = null
let confirmedAnswer = false

function selectOption(option) {
    selectedAnswer = option
    confirmedAnswer = false

    document.getElementById("confirm").disabled = false

    document.getElementById("a").style.backgroundColor = "#4caf50"
    document.getElementById("b").style.backgroundColor = "#4caf50"
    document.getElementById("c").style.backgroundColor = "#4caf50"
    document.getElementById("d").style.backgroundColor = "#4caf50"

    document.getElementById(option).style.backgroundColor = "#1e88e5"
}

function checkAnswer(question) {
    if (selectedAnswer) {
        confirmedAnswer = true
        document.getElementById("confirm").disabled = true;
        document.getElementById("next").style.display = "inline-block"
    }

    switch(question) {
        case 1:
            if (selectedAnswer == 'b') {
                alert("Correto!")
                addPoint()
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 2:
            if (selectedAnswer == 'c') {
                alert("Correto!")
                addPoint()
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 3:
            if (selectedAnswer == 'c') {
                alert("Correto!")
                addPoint()
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 4:
            if (selectedAnswer == 'a') {
                alert("Correto!")
                addPoint()
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 5:
            if (selectedAnswer == 'd') {
                alert("Correto!")
                addPoint()
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
    }
}

function addPoint() {
    let points = localStorage.getItem("points") || 0
    points++
    localStorage.setItem("points", points)
}

function next(nextQuestion) {
    if (confirmedAnswer) {
        window.location.href = nextQuestion
    }
    else {
        alert("Por favor, confirme sua escolha antes de continuar.")
    }
}

function restartQuiz() {
    localStorage.setItem("points", 0)
}

let points = localStorage.getItem("points") || 0
result.innerText = points + "/" + totalQuestions