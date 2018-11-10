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
body.addEventListener('click', getQuote);

getQuote()