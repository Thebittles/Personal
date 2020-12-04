const { getRandomQuote, getQuoteByYear, getQuotesByMovie } = require('popular-movie-quotes')
const movie = require('popular-movie-quotes')


var randomQuote = getRandomQuote()
console.log(randomQuote)

// Display quotes from years 2013-2016

var yearQuote = getQuoteByYear(2013, 2016)
//console.log(yearQuote)


//Display quote from YOUR favorite movie

console.log(movie.getQuotesByMovie("Matrix"));
