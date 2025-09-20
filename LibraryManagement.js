import React, { useState } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";

function LibraryManagement() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Add new book
  const addBook = (title, author) => {
    if (title.trim() && author.trim()) {
      setBooks([...books, { title, author }]);
    }
  };

  // Remove book
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Filter books by search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h2>Library Management</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Add Book Form */}
      <BookForm onAddBook={addBook} />

      {/* Book List */}
      <BookList books={filteredBooks} onRemoveBook={removeBook} />
    </div>
  );
}

export default LibraryManagement;
