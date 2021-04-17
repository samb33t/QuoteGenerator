// Query selectors
let quote = document.querySelector('#quote')
let author = document.querySelector('#author')

// API quote
let getNewQuote = () => {
    fetch('https://quotable.io/random')
        .then(res => res.json())
        .then(data => {
            quote.innerHTML = data.content
            author.innerHTML = data.author
        })
}