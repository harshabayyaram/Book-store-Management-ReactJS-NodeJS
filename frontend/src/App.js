import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./Book";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />}></Route>
          <Route path="/addBook" element={<AddBook />}></Route>
          <Route path="/update/:id" element={<UpdateBook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
