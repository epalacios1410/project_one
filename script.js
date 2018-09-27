// Random Quote Generator

// Create array 'quotes' of seven quote objects
var quotes = [
  {
    quote: "Try again, fail again, fail better.",
    source: 'Samuel Becket'},
  {
    quote: "I think therefore I am.",
    source: 'René Descartes',
    citation: 'Discource on the Method'},
  {
    quote: "Man is nothing else but what he makes of himself.",
    source: 'Jean-Paul Sarte',
    citation: 'Existentialism & Humanism'},
  {
    quote: "One thought-murder a day keeps the psychiatrist away.",
    source: 'Saul Bellow',
    citation: 'Herzog'},
  {
    quote: "He who jumps in to the void owes no explanation to those who stand and watch.",
    source: 'Jean-Luc Godard'},
  {
    quote:"Liberty consists in doing what one desires.",
    source: 'John Stuart Mill',
    citation: 'On Liberty'},
  {
    quote: "After a while you could get used to anything.",
    source: 'Albert Camus',
    citation: 'The Stranger'}
];

// Create the getRandomQuuote function
function getRandomQuote(quotes){
  num = Math.floor(Math.random() * quotes.length); //Generate number between 0 and array length
  return quotes[num];  //Returns object at position [num]
};

function printQuote(){
  var free_str = '';  //Create empty string for concatenation
  var random_quote = getRandomQuote(quotes); //Save randomly chosen quote in variable
  free_str = '<p class="quote">' + random_quote.quote + '</p>'; //Add quote object to empty string
  free_str += '<p class="source">' + random_quote.source + '</p>'; //Add source object to string
  if (random_quote.hasOwnProperty('citation')){     //Check if random_quote has citation object
    free_str += '<span class="citation">' + random_quote.citation + '</span>';  //Add citation object to string
  };
  document.getElementById('quote-box').innerHTML = free_str;   //Pick location --> getElementById() <-- for insertion of --> innerHTML <--
};

printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);
