function randomNumber() {
    return Math.floor( Math.random() * 100 + 1);
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function firstLetter(string) {
    return string[0];
}

function joinWords(string1, string2) {
    return string1 + string2;
}

function dogPictures() {
    return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json()
        .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
    }


export { randomNumber, toUpperCase, firstLetter, joinWords, dogPictures };