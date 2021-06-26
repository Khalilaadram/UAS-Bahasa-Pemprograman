window.onload = sendApiRequest

async function sendApiRequest() {
    let response = await fetch (`https://opentdb.com/api.php?amount=1`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data) {
    document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
    document.querySelector("#choice1").innerHTML = data.results[0].correct_answer
    document.querySelector("#choice2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#choice3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#choice4").innerHTML = data.results[0].incorrect_answers[2]    
}


let correctButton = document.querySelector("#choice1")

correctButton.addEventListener("click",() => {
    alert("Congratulation Correct")
    sendApiRequest()
})

let incorrectButton = document.querySelector("#choice2")

incorrectButton.addEventListener("click",() => {
    alert("Nope That Incorrect")
    sendApiRequest()
})

let falseButton = document.querySelector("#choice3")

falseButton.addEventListener("click",() => {
    alert("That Wrong Answer")
    sendApiRequest()
})

let notButton = document.querySelector("#choice4")

notButton.addEventListener("click",() => {
    alert("Try Again")
    sendApiRequest()
})