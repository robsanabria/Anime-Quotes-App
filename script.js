const quoteButton = document.getElementById('quote-button');
const quoteContainer = document.getElementById('quote-container');

quoteButton.addEventListener('click', fetchQuote);

function fetchQuote() {
  fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => {
      quoteContainer.textContent = `"${quote.quote}" - ${quote.character} (${quote.anime})`;
    })
    .catch(error => {
      console.log(error);
      quoteContainer.textContent = 'No se pudo obtener la frase. Inténtalo de nuevo más tarde.';
    });
}
