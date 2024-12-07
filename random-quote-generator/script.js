// Array that store a list of qoutes and their author
const qoutes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does", author: "William James" },
    { text: "You are never too old to sed another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
];

// get html elements by their id
const qouteText =  document.getElementById("quote");
const qouteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// function to generate a random qoute
function generateQuote(){
    // Get a random index from the qoutes array
    const randomIndex = Math.floor(Math.random() * qoutes.length)
    const randomQuote = qoutes[randomIndex]

    // Update the qoute text and author in the element html
    qouteText.textContent = `"${randomQuote.text}"`
    qouteAuthor.textContent = `- ${randomQuote.author}`

}

// Add Event Listener for the button, 
newQuoteButton.addEventListener('click', generateQuote);

//Call generate qoutewhen page first loaded
generateQuote()