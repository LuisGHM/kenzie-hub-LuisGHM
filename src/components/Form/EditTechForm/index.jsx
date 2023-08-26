import { useForm } from "react-hook-form"
import { Input } from "../input"
import { useContext } from "react"
import { PostContext } from "../../../providers/PostContext"

export const EditTechForm = () =>{

    const { editingPost, postUpdate } = useContext(PostContext);

    const { register, handleSubmit } = useForm({
        values:{
            title: editingPost.title,
            status: editingPost.status,
        }
    })

    const submit = (formData) => {
        postUpdate.mutate(formData);
    }

    return(
        <form className={"formContainer"} onSubmit={handleSubmit(submit)} >
            <Input className={`input`} asside={true} type="text" label={"Nome"} placeholder="Digite aqui o nome da tecnologia" {...register("title")}/>
            <label className="headline">Selecionar status</label>
            <select className={`input`} {...register("status")} defaultValue="">
                <option value="">Selecione o seu nível</option>
                <option value={"Iniciante"}>Iniciante</option>
                <option value={"Intermediário"}>Intermediário</option>
                <option value={"Avançado"}>Avançado</option>
            </select>
            <button type="submit" className={`${"buttonSubmit"} btn`}>Cadastar Tecnologia</button>
        </form>
    )
}