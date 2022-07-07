const jokeButton = document.getElementById("jokeButton");
const jokeTitleH1 = document.getElementById("jokeTitle");
const jokeSentenceBody = document.getElementById("theJoke");

jokeButton.addEventListener("click", async function() {
    const jokeAPI_URL = "https://api.jokes.one/jod";
    
    const resp = await fetch(jokeAPI_URL, {
        method: "GET",
    });

    const theJoke = await resp.json();

    const jokeTitle = theJoke.contents.jokes[0].joke.title;
    const jokeSentence = theJoke.contents.jokes[0].joke.text;

    jokeTitleH1.textContent = jokeTitle;
    jokeSentenceBody.textContent = jokeSentence;
})