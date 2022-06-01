// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

 const result = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const jokeH2 = document.getElementById('jokeContainer');
        jokeH2.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();