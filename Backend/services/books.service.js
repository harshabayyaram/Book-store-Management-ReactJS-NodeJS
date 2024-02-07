const db = require("../db");

module.exports.getAllBooks = async () => {
  const [records] = await db.query("select * from books;");
  return records;
};

module.exports.getBook = async (id) => {
  const [record] = await db.query("select * from books where id=?", [id]);
  return record;
};

module.exports.deleteBook = async (id) => {
  const [record] = await db.query("delete from books where id=?", [id]);
  return record;
};

// module.exports.BookAddOrEdit = async (obj, id = 0) => {
//   const [record] = await db.query("call BookAddOrEdit(?,?,?,?,?)", [
//     id,
//     obj.title,
//     obj.author,
//     obj.genre,
//     obj.publication_year,
//   ]);
//   return record;
// };

module.exports.BookAddOrEdit = async (obj, id = 0) => {
  const sql = id === 0 ? "INSERT INTO books (title, author, genre, publication_year) VALUES (?, ?, ?, ?)" :
    "UPDATE books SET title = ?, author = ?, genre = ?, publication_year = ? WHERE id = ?";
  const params = id === 0 ? [obj.title, obj.author, obj.genre, obj.publication_year] :
    [obj.title, obj.author, obj.genre, obj.publication_year, id];

  const [result] = await db.query(sql, params);

  if (id === 0) {
    return { id: result.insertId, ...obj };
  } else {
    return { id, ...obj };
  }
};
