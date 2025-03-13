// Array of quotes
const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
];
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("share-twitter");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 100);
}

function shareOnTwitter() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote + " " + author
  )}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", generateQuote);
twitterBtn.addEventListener("click", shareOnTwitter);

window.onload = generateQuote;
