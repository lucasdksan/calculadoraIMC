import styles from "../styles/components/Header.module.css";
import logo from "../assets/powered.png";

const Header = ()=>{
    return(
        <header>
            <div className={styles.headerContainer}>
                <img src={logo} alt="Logo" width={150}/>
            </div>
        </header>
    );
}

export default Header;