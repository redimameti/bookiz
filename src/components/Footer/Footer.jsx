import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			Built by{" "}
			<span>
				<a
					target="_blank"
					href="https://redimameti.github.io/Portfolio/">
					Redim
				</a>
			</span>
		</footer>
	);
};

export default Footer;
