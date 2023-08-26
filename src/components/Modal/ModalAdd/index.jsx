import { useContext } from "react"
import { PostContext } from "../../../providers/PostContext"
import { AiOutlineClose } from "react-icons/ai"
import { AddTechForm } from "../../Form/AddTechForm";

export const ModalAdd = () => {
    const {setisOpenAdd, isOpenAdd, editingPost } = useContext(PostContext);

    return(
        isOpenAdd ? (
            <div role="dialog" className={"modalOverlay"}>
                <div className={"modalBox"}>
                    <div className={"modalHeaderContainer"}>
                        {editingPost ? <h3 className="headline bold">Tecnologia Detalhes</h3> : <h3 className="headline bold">Cadastrar Tecnologia</h3>}
                        <button className={`${"closeButton"} btn grey1`} onClick={() => setisOpenAdd(false)}><AiOutlineClose/></button>
                    </div>
                    <div>
                        {editingPost ? null : <AddTechForm/>}
                    </div>
                </div>
            </div>
        ) : null
    )
}