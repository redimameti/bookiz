import {React, useState, useEffect} from "react";
import styles from "./App.module.scss";
import BookList from "./containers/BookList";
import NavBar from "./containers/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState("");
	const [inputText, setInputText] = useState("");

	// When clicking submit in SearchBar, this sets inputText (final string used to fetch books) to what is currently in the search input field
	const handleClick = () => {
		setInputText(search);
	};

	// Sets inputText when pressing enter key in the input field
	const handleEnterKey = (e) => {
		if (e.key === "Enter") {
			// console.log("handle enter");
			setInputText(search);
		}
	};

	// Gets book titles based on inputText
	const getBooks = async (inputText) => {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${inputText}&maxResults=12`,
		);
		const results = await response.json();
		setBooks(results.items);
	};

	useEffect(() => {
		if (inputText !== "" || undefined) {
			getBooks(inputText);
		}
	}, [inputText]);

	return (
		<div className={styles.Container}>
			<NavBar />
			<SearchBar
				setSearch={setSearch}
				search={search}
				toggleInput={handleClick}
				handleKeyPress={handleEnterKey}
			/>
			<BookList books={books} />
		</div>
	);
}

export default App;
