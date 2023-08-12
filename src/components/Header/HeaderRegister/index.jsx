import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import styles from "./style.module.scss";

export const HeaderRegister = () =>{
    return(
        <header>
            <div className={`${styles.gridContainer} container`}>
                <div className={styles.header}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <Link className={`${styles.buttonReturn} btn grey `} to={"/"}>Voltar</Link>
                </div>
            </div>
        </header>
    )
}