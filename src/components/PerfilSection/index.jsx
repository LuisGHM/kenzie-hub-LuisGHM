import { useContext } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const PerfilSection = () =>{
    const { user } = useContext(UserContext);

    return(
        <section className={styles.perfilSection}>
            <div className="container">
                <div className={styles.infoContainer}>
                    <h1  className="title1">Olá, {user?.name}</h1>
                    <span className="headline grey1">{user?.course_module}</span>
                </div>
            </div>
        </section>
    )
}