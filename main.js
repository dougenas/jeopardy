function printToPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}



fetch("http://jservice.io/api/category?id=42")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })
fetch("http://jservice.io/api/category?id=37")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })
fetch("http://jservice.io/api/category?id=139")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })
fetch("http://jservice.io/api/category?id=1079")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })
fetch("http://jservice.io/api/category?id=777")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })
fetch("http://jservice.io/api/category?id=539")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)

    })