const totalQuestions = 5
const result = document.getElementById('result')
let selectedAnswer = null
let confirmedAnswer = false

function selectOption(option) {
    selectedAnswer = option
    confirmedAnswer = false

    document.getElementById("confirm").disabled = false

    document.getElementById("a").style.backgroundColor = "#0077b6"
    document.getElementById("b").style.backgroundColor = "#0077b6"
    document.getElementById("c").style.backgroundColor = "#0077b6"
    document.getElementById("d").style.backgroundColor = "#0077b6"

    document.getElementById(option).style.backgroundColor = "#1d3557"
}

function checkAnswer(question) {
    if (selectedAnswer) {
        confirmedAnswer = true
        document.getElementById("confirm").disabled = true;
        document.getElementById("next").style.display = "inline-block"

        document.getElementById("a").disabled = true
        document.getElementById("b").disabled = true
        document.getElementById("c").disabled = true
        document.getElementById("d").disabled = true
    }

    switch(question) {
        case 1:
            if (selectedAnswer == 'b') {
                addPoint()
            }
            else {
                if (selectedAnswer == 'a') {
                    document.getElementById("a_wrong").classList.remove("hidden")
                    document.getElementById("a_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'c') {
                    document.getElementById("c_wrong").classList.remove("hidden")
                    document.getElementById("c_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'd') {
                    document.getElementById("d_wrong").classList.remove("hidden")
                    document.getElementById("d_wrong").classList.add("fade-in")
                }
            }

            break
        case 2:
            if (selectedAnswer == 'c') {
                addPoint()
            }
            else {
                if (selectedAnswer == 'a') {
                    document.getElementById("a_wrong").classList.remove("hidden")
                    document.getElementById("a_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'b') {
                    document.getElementById("b_wrong").classList.remove("hidden")
                    document.getElementById("b_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'd') {
                    document.getElementById("d_wrong").classList.remove("hidden")
                    document.getElementById("d_wrong").classList.add("fade-in")
                }
            }

            break
        case 3:
            if (selectedAnswer == 'c') {
                addPoint()
            }
            else {
                if (selectedAnswer == 'a') {
                    document.getElementById("a_wrong").classList.remove("hidden")
                    document.getElementById("a_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'b') {
                    document.getElementById("b_wrong").classList.remove("hidden")
                    document.getElementById("b_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'd') {
                    document.getElementById("d_wrong").classList.remove("hidden")
                    document.getElementById("d_wrong").classList.add("fade-in")
                }
            }

            break
        case 4:
            if (selectedAnswer == 'a') {
                addPoint()
            }
            else {
                if (selectedAnswer == 'b') {
                    document.getElementById("b_wrong").classList.remove("hidden")
                    document.getElementById("b_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'c') {
                    document.getElementById("c_wrong").classList.remove("hidden")
                    document.getElementById("c_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'd') {
                    document.getElementById("d_wrong").classList.remove("hidden")
                    document.getElementById("d_wrong").classList.add("fade-in")
                }
            }

            break
        case 5:
            if (selectedAnswer == 'd') {
                addPoint()
            }
            else {
                if (selectedAnswer == 'a') {
                    document.getElementById("a_wrong").classList.remove("hidden")
                    document.getElementById("a_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'b') {
                    document.getElementById("b_wrong").classList.remove("hidden")
                    document.getElementById("b_wrong").classList.add("fade-in")
                }
                else if (selectedAnswer == 'c') {
                    document.getElementById("c_wrong").classList.remove("hidden")
                    document.getElementById("c_wrong").classList.add("fade-in")
                }
            }

            break
    }

    document.getElementById("correct").classList.remove("hidden")
    document.getElementById("correct").classList.add("fade-in")
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
    window.location.href = 'index.html'
}

let points = localStorage.getItem("points") || 0
result.innerText = points + "/" + totalQuestions