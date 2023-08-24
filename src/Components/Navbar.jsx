import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
  <nav className={styles.navbar}>
    <div className={styles.rightSide}>
      <h1 className={styles.brandName}>Bookstore CMS</h1>
      <ul className={styles.linksContainer}>
        <li><Link to="/" className={styles.link}>Books</Link></li>
        <li><Link to="/categories" className={styles.link}>Categories</Link></li>
      </ul>
    </div>
    <div className={styles.profileContainer}>
      <img src="https://img.icons8.com/ios-filled/0290ff/20/user.png" alt="user"/>
    </div>
  </nav>)
}

export default Navbar;