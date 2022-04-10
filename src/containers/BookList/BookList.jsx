import styles from "./BookList.module.scss";
import BookCard from "../../components/BookCard";
import {books} from "./../../App.js";

const BookList = ({books}) => {
	return (
		<div className={styles.BookList}>
			{books.map((book) => {
				console.log(book.volumeInfo.authors)
				return <BookCard key={book?.id} book={book}/>
			})}
		</div>
	);
};

export default BookList;
