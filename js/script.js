/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * Creating an array of quotes
***/
const quotes = [
  {quote:'It does not do to dwell on dreams and forget to live. ',
  source: 'J,K Rowling' ,
  citation: 'Harry Potter and the Sorcerer’s Stone'},

  {quote: "So many things are possible just as long as you don’t know they’re impossible.",
   source: 'Norton Juster',
   tags: '#Encouragement'},

  {quote: "Brave doesn’t mean you’re not scared. It means you go on even though you’re scared.",
   source: 'Angie Thomas',
   citation: 'The Hate U Give'},

  {quote: "Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.",
   source: 'Oprah Winfrey',
   year: '2004' },

  {quote: "'May the Force be with you' is charming but it’s not important. What’s important is that you become the Force – for yourself and perhaps for other people.",
   source: 'Harrison Ford',
   tags: '#strength'},

  {quote:"Great things in business are never done by one person. They're done by a team of people.",
   source: 'Steve Jobs',
   year:'2007' }
];
// console.log(quotes);

/***
 * Retrieving a random quote from the array
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
// getRandomQuote();
// console.log(getRandomQuote());

/***
  * Genarating a random RGB number
***/
function randomRGB(){
  return Math.floor(Math.random() * 256);
}
/***
 * Creating a random color
***/
function randomColor(){
  const color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  return color;
 }


/***
 * Genarating the html code for the quote
***/
function printQuote() {
  let randomQuote = getRandomQuote();

  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source}`;

  if (randomQuote['citation']){
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  } else if(randomQuote['year']){
    html += `<span class="year"> ${randomQuote.year} </span>`;
  } else if (randomQuote['tags']){
    html += `<span class="tags"> ${randomQuote.tags} </span>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  document.querySelector('body').style = `background-color: ${randomColor()}`;
  return html;
}

 setInterval(printQuote, 10000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
