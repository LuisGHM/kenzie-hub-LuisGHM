import Logo from "../../../assets/logo.svg";
import styles from "./style.module.scss";

export const HeaderLogin = () =>{
    return(
        <header>
            <div className="container">
                <div className={styles.header}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                </div>
            </div>
        </header>
    )
}