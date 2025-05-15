import { createContext, useState, useMemo } from "react";
import { UserProvider } from "./UserContext";

const DATABASE_ID = "6825dd31001f8187ce9d";
const COLLECTION_ID = "6825dd450018b45b91b6";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      //
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  async function fetchBookById() {
    try {
      //
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  async function createBook(data) {
    try {
      //
    } catch (error) {
      console.error("Error creating book:", error);
    }
  }

  async function deleteBook(id) {
    try {
      //
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <BooksContext.Provider
      //   value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
      value={useMemo(
        () => ({ books, fetchBooks, fetchBookById, createBook, deleteBook }),
        [books]
      )}
    >
      {children}
    </BooksContext.Provider>
  );
}
