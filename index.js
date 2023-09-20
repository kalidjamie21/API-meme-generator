memeBtn = document.querySelector(".meme-btn");
memeTitle = document.querySelector(".title");
memeImage = document.querySelector(".meme-image");
memeAuthor = document.querySelector(".meme-author");


const memeInfo = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        memeInfo(data.url, data.title, data.author);
    });
};

memeBtn.addEventListener("click", generateMeme);
generateMeme();
