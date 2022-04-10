import styles from "./SearchBar.module.scss";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBar = ({setSearch, toggleInput, handleKeyPress}) => {
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className={styles.SearchBar}>
			<input
				type="text"
				placeholder="search for a book..."
				autoComplete="off"
				className={styles.SearchBar__Input}
				id="searchInput"
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
			<button className={styles.SearchBar__Submit} onClick={toggleInput}>
				<FontAwesomeIcon
					className={styles.SearchBar__Submit__Icon}
					icon={faMagnifyingGlass}
					size="2x"
				/>
			</button>
		</div>
	);
};

export default SearchBar;
