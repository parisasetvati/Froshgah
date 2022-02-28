import { useProducts } from '../Provider/Provider';
import styles from './Navbar.module.css'
const Navbar = () => {
    const products=useProducts();
    const totalItems=products.filter((p)=>p.quantity>0).length;
    return ( 
        <header className={styles.header}>
           
            <h2>FroshgahApp</h2>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default Navbar;