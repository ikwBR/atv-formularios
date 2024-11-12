import React, { useState } from 'react';
// Importe os componentes, complete com os caminhos corr
etos.
import BookForm from './BookForm';
import BookList from './BookList';
import { Book } from './types';
const Principal = () => {
const [books, setBooks] = useState<Book[]>([]);
const addBook = (book: Book) => {

Roteiro - Formulários 5

setBooks((prevBooks) => [...prevBooks, book]);
};
return (
<div className="App">
<h1>Cadastro de Livros</h1>
<BookForm onAddBook={addBook} />
<BookList books={books} />
</div>
);
};
export default Principal;