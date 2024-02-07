import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import DashboardLeft from "./DashboardLeft";

function UpdateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publication_year, setPublication_year] = useState("");
  const { id } = useParams();
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("https://book-store-management-o6vv.onrender.com/books/" + id, {
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
    <>
      <NavbarMain />
      <div className='d-flex col-lg-12'>
        <div className=' bg-light col-lg-2' style={{ height: '1000px' }}>
          <DashboardLeft />
        </div>
        <div className='m-4 col-lg-10'>
          <div className="d-flex justify-content-center align-item-center">
            <div className=" m-5 w-50 bg-info rounded p-3">
              <form>
                <h2>Update BOOK</h2>
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
                    type="number"
                    placeholder="Publication year "
                    className="form-control"
                    onChange={(e) => setPublication_year(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={handleSubmit}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBook;
