function startQuiz() {
    window.location.href = "../questions/question-1.html"
}

function checkAnswer(question, option) {
    switch(question) {
        case 1:
            if (option == 'b') {
                alert("Correto!")
                window.location.href = "./question-2.html"
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 2:
            if (option == 'c') {
                alert("Correto!")
                window.location.href = "./question-3.html"
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 3:
            if (option == 'c') {
                alert("Correto!")
                window.location.href = "./question-4.html"
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 4:
            if (option == 'a') {
                alert("Correto!")
                window.location.href = "./question-5.html"
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
        case 5:
            if (option == 'd') {
                alert("Correto!")
                window.location.href = "../index.html"
            }
            else {
                alert("Incorreto! Tente novamente!")
            }

            break
    }
}