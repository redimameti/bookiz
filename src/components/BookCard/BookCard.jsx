import styles from "./BookCard.module.scss";

const BookCard = ({book}) => {
	const image = book.volumeInfo.imageLinks.thumbnail;

	const title = book.volumeInfo.title
		? book.volumeInfo.title
		: "Unknown Title";

	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors.join(", ")
		: "Unknown Author";

	let description = book.volumeInfo.description
		? book.volumeInfo.description
		: "Sorry, there is no description for this title.";

	if (description.length > 145) {
		description = `${description.slice(0, 145)}...Read More.`;
	}

	return (
		<div className={styles.CardWrapper}>
			<a className={styles.CardWrapper__ImgContainer}>
				<div className={styles.CardWrapper__ImgContainer__Overlay}>
					See more details
				</div>
				<img
					className={styles.CardWrapper__ImgContainer__Img}
					src={image}
					alt="Book Cover"
				/>
			</a>
			<div className={styles.CardWrapper__TitleAndAuthor}>
				<h3>{title}</h3>
				<p className={styles.CardWrapper__Author}>by {authors}</p>
			</div>

			<div className={styles.CardWrapper__DescWrap}>
				<p className={styles.CardWrapper__DescWrap__Text}>
					{description}
					{/* <a
						className={styles.CardWrapper__DescWrap__Text__Link}
						href="">
						...{" "}
						<span
							className={
								styles.CardWrapper__DescWrap__Text__Link__Ul
							}>
							Read More
						</span>
						.
					</a> */}
          </p>
			</div>
		</div>
	);
};

export default BookCard;
