import styles from "./style.module.scss";

export const PerfilSection = ({user}) =>{
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