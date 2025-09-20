import React from "react";

function BookList({ books, onRemoveBook }) {
  return (
    <ul className="book-list">
      {books.map((book, index) => (
        <li key={index} className="book-item">
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
          <button onClick={() => onRemoveBook(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
