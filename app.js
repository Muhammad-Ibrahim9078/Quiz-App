let print = document.getElementById("print");

fetch('https://the-trivia-api.com/v2/questions')
.then(data => data.json())
.then((data) => {
    console.log(data)
    console.log(data[0])

    for(i=0; i < data.length; i++){

        print.innerHTML = ` <div>
                                <h2>${data[i].question.text}</h2>
                                <p>◆ ${data[i].incorrectAnswers[0]}</p>
                                <p>◆ ${data[i].incorrectAnswers[1]}</p>
                                <p>◆ ${data[i].incorrectAnswers[2]}</p>
                                <p>◆ ${data[i].correctAnswer}</p>
                            </div>`
    }
   

})


