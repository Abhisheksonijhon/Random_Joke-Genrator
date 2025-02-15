const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount";


let getJoke = () => {
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade")
    });
};

btn.addEventListener("click", getJoke);
getJoke();
