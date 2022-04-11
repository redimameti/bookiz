import styles from "./NavBar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<nav className={styles.NavBar}>
			<a href="" className={styles.NavBar__Header}>
				<FontAwesomeIcon icon={faBook} size="2x" />
        <h1>bookiz</h1>
			</a>
			<div className={styles.NavBar__Links}>
				<span className={styles.NavBar__Links__LogIn} href="#">
					LOG IN
				</span>
				<span className={styles.NavBar__Links__SignUp} href="#">
					SIGN UP
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
