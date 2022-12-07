const { each } = require("jquery");

const quotes = ["“Adventure is worthwhile.” – Aesop", 
    "“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta", 
    "“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin", 
	"“A journey is best measured in friends, rather than miles.” – Tim Cahill", 
    "“I am not the same, having seen the moon shine on the other side of the world.” – Mary Anne Radmacher", 
	"“The world is a book, and those who do not travel read only one page.” – Saint Augustine", 
    "“Travel is the only thing you buy that makes you richer.” – Anonymous", 
    "“Better to see something once than hear about it a thousand times.” – Asian Proverb"];
const variable = 0;



// Pick random quote
function getQuote(){
    let rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
}

exports.generateQuote = ()=>{return getQuote();}
