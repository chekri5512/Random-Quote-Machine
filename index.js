window.onload = init;
        function init(){
            newQuote()
        }
        let count = 0
        let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"

        const quoteText = document.getElementById("text")
        const quoteAuthor = document.getElementById("author")
        const tweetQuoteLink = document.getElementById("tweet-quote")

        const quotes = [
            {quote:"It's not what you look at that matters, it's what you see.",
            author:"Henry David Thoreau"},
            {quote:"A writer is someone for whom writing is more difficult than it is for other people.",
            author:"Thomas Mann"},
            {quote:"A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
            author:"G.K. Chesterton"},
            {quote:"I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
            author:"Lousia May Alcott"},
            {quote:"Anybody who has survived his childhood has enough information about life to last him the rest of his days.",
            author:"Flannery O'Connor"}
        ];

        const quotesLength = quotes.length

        const newQuote = () => {
            let randomIndex = Math.floor(Math.random()*quotesLength)
            let quoteLine = quotes[randomIndex].quote
            let quoteBy = quotes[randomIndex].author

            let tweetQuoteLine = `${quoteLine.replace(/ /g,"%20")}%22%20`
            let tweetQuoteAuthor = `${quoteBy.replace(/ /g,"%20")}`
            let tweetLink = twitterURL+tweetQuoteLine+tweetQuoteAuthor

            quoteText.innerText = `${quoteLine}`
            quoteAuthor.innerText = `-By ${quoteBy}`
            tweetQuoteLink.setAttribute("href",tweetLink)
        }