import { useContext } from "react";
import BooksContext from "./BooksContext";

export const useBooks = () => useContext(BooksContext);
