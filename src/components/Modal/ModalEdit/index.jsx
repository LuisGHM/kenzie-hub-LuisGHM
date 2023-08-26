import { useContext } from "react"
import { PostContext } from "../../../providers/PostContext"
import { AiOutlineClose } from "react-icons/ai"
import { AddTechForm } from "../../Form/AddTechForm";
import { EditTechForm } from "../../Form/EditTechForm";

export const ModalEdit = () => {

    const { editingPost, setEditingPost } = useContext(PostContext);

    return(
        editingPost ? (
            <div role="dialog" className={"modalOverlay"}>
                <div className={"modalBox"}>
                    <div className={"modalHeaderContainer"}>
                        <h3 className="headline bold">Tecnologia Detalhes</h3>
                        <button className={`${"closeButton"} btn grey1`} onClick={() => setEditingPost(null)}><AiOutlineClose/></button>
                    </div>
                    <div>
                        <EditTechForm/>
                    </div>
                </div>
            </div>
        ) : null
    )
}