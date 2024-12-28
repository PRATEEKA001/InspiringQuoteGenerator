const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteElement.textContent = `"${data.content}"`;
    authorElement.textContent = `- ${data.author}`;
}

newQuoteButton.addEventListener("click", fetchQuote);

// Fetch an initial quote on page load
fetchQuote();
