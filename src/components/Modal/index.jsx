import { useContext } from "react"
import { PostContext } from "../../providers/PostContext"
import { AiOutlineClose } from "react-icons/ai"
import { AddTechForm } from "../Form/AddTechForm";
import styles from "./style.module.scss";

export const Modal = () => {
    const {setIsOpen, isOpen, editingPost } = useContext(PostContext);

    return(
        isOpen ? (
            <div role="dialog" className={styles.modalOverlay}>
                <div className={styles.modalBox}>
                    <div className={styles.modalHeaderContainer}>
                        {editingPost ? <h3 className="headline bold">Tecnologia Detalhes</h3> : <h3 className="headline bold">Cadastrar Tecnologia</h3>}
                        <button className={`${styles.closeButton} btn grey1`} onClick={() => setIsOpen(false)}><AiOutlineClose/></button>
                    </div>
                    <div>
                        {editingPost ? null : <AddTechForm/>}
                    </div>
                </div>
            </div>
        ) : null
    )
}