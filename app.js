// $('body').click(function(){
//     var QuoteAPI = "https://talaikis.com/api/quotes/random/?jsoncallback=?";
//     var quote = $(this).text();
//     var QuoteOptions = {
//         tags: quote,
//         format: json
//     };
//     function displayQuote(data) {

//     };
//     $.getJSON(QuoteAPI, QuoteOptions, displayQuote)
// }); //end click

const body = document.querySelector('body');
const endpoint = 'https://talaikis.com/api/quotes/random/';
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
function getQuote() {
    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayQuote(data.quote);
      })
      .catch(function () {
            console.log("An error occured");
      });
  }
  function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
  }
   function colors() {
       body.style.backgroundColor = hue;
   };
body.addEventListener('click', getQuote);
body.addEventListener('click', colors);

getQuote()