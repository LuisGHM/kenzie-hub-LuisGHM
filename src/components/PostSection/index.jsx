import styles from "./style.module.scss";

export const PostSection = () =>{
    return(
        <section>
            <div className="container">
                <div className={styles.postContainer}>
                    <h1 className="title1">Que pena! Estamos em desenvolvimento :(</h1>
                    <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </div>
        </section>
    )
}