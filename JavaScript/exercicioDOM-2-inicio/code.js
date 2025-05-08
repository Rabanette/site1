import { livros } from "./data";

let alreadyRead;


if(alreadyRead == true){
    
}

let article = document.getElementById('grid');
let section = document.getElementById('grid');

console.log(livros[0]);

call_article(livros);


function call_article(getBooks){
    getBooks.map(book => {
        section.innerHTML += `
        <article>
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <img src="livros/${book.imageUrl}" alt="${book.title}}">
            <p>Already read: ${book.alreadyRead ? '✅' : '❌' }  </p>
        </article>
        `;

    })
}

