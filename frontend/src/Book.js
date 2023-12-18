import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Book() {
  const [book, setBook] = useState([]);
  // console.log(book);

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      // .then((res) => console.log(res.data))
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async(id) => {
    await axios.delete("http://localhost:8080/books/" + id);
    window.location.reload();
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center">
      <div className="p-4 bg-white rounded">
        <Link to="/addBook" className="btn btn-success m-4">
          ADD +{" "}
        </Link>

        <table className="table">
          <thead className="p-6">
            <tr>
              <th className="bg-black text-white">ID</th>
              <th className="bg-black text-white">title</th>
              <th className="bg-black text-white">author</th>
              <th className="bg-black text-white">genre</th>
              <th className="bg-black text-white">publication_year</th>
              <th className="bg-black text-white">Update</th>
              <th className="bg-black text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {book.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.genre}</td>
                <td>{data.publication_year}</td>
                <td>
                  <Link to={`update/${data.id}`} className="btn btn-primary">
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Book;
