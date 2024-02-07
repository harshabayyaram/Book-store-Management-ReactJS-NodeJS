import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardLeft from "./DashboardLeft";
import NavbarMain from "./NavbarMain"

function Book() {
  const [book, setBook] = useState([]);
  // console.log(book);

  useEffect(() => {
    axios
      .get("https://book-store-management-o6vv.onrender.com/books")
      // .then((res) => console.log(res.data))
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  const list = () => {
    axios
      .get("https://book-store-management-o6vv.onrender.com/books")
      // .then((res) => console.log(res.data))
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }

  const handleDelete = async (id) => {
    await axios.delete("https://book-store-management-o6vv.onrender.com/books/" + id);
    list();
  };

  return (

    <>
      <NavbarMain />
      <div className='d-flex col-lg-12 row'>
        <div className=' bg-light col-lg-4' style={{ height: '1000px' }}>
          <DashboardLeft />
        </div>
        <div className='mt-4 col-lg-8'>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white rounded">
              <table className="table">
                <thead className="">
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
        </div>
      </div>
    </>
  );
}

export default Book;
