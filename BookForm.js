import React, { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAdd = () => {
    onAddBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default BookForm;
