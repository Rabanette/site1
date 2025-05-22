
import {livros} from './data.js';

let myBooks = [...livros];

export const getBooks = () => myBooks;
export const getReadBooks = () => myBooks.filter( livro => livro.alreadyRead === true);
export const getNotReadBooks = () => myBooks.filter( livro => livro.alreadyRead === false);
export const getBooksByAuthorTitle = (text) => myBooks.filter( livro => {
    let title = livro.title.toLowerCase();
    let author = livro.author.toLowerCase();

    return (author.search(text) > -1 ) || (title.search(text) > -1 )
});


export const deleteBook = (id) => myBooks = myBooks.filter( livro => livro.id !== Number(id));


export const addBook = (book) => {
    myBooks.push(book);
    return myBooks;
}


export const getBookById = (id) => myBooks.find( b => b.id === Number(id))


export const updateBooks = book => myBooks = myBooks.map ( b => {

    if (b.id == book.id){
        return {
            ...b,
            title : book.title,
            author : book.author,
            alreadyRead : book.alreadyRead,
            imageUrl : book.imageUrl,
            imageUrlGr : book.imageUrlGr,
        }
    } else {
        return b;
    }
})


export const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}

export const closePopup = () => popup.classList.remove('open');