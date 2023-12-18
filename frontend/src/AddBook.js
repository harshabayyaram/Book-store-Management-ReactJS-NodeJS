import axios from "axios";
import React, { useState, useSyncExternalStore } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publication_year, setPublication_year] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/books", {
        title,
        author,
        genre,
        publication_year,
      })
      .then((res) => {
        console.log(res);
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className=" m-5 w-50 bg-info rounded p-3">
        <form>
          <h2>ADD BOOK</h2>
          <div className="mb-2">
            <label>Book Title</label>
            <input
              type="text"
              placeholder="Book Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Book Author</label>
            <input
              type="text"
              placeholder="Book Author"
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Book genre</label>
            <input
              type="text"
              placeholder="Book genre"
              className="form-control"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Publication year</label>
            <input
              type="text"
              placeholder="Publication year "
              className="form-control"
              onChange={(e) => setPublication_year(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
