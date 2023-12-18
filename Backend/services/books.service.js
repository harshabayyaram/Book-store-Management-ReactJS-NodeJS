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

module.exports.BookAddOrEdit = async (obj, id = 0) => {
  const [record] = await db.query("call BookAddOrEdit(?,?,?,?,?)", [
    id,
    obj.title,
    obj.author,
    obj.genre,
    obj.publication_year,
  ]);
  return record;
};