import styles from './Navbar.module.css'
const Navbar = ({totalItems}) => {
    return ( 
        <header className={styles.header}>
            <h2>FroshgahApp</h2>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default Navbar;