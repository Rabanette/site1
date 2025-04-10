let alreadyRead;

let livros = [
    {
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
    },
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
    },
    {
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
    },
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
    },
    {
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'reacthooks.jpg',
    },
];


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

