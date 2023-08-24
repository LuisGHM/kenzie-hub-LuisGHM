import { useContext } from "react";
import { Input } from "../input"
import styles from "./style.module.scss";
import { PostContext } from "../../../providers/PostContext";

export const AddTechForm = () =>{
    const { setIsOpen } = useContext(PostContext);

    return(
        <form action="" className={styles.formContainer}>
            <Input className={`input`} asside={true} type="text" label={"Nome"} placeholder="Digite aqui o nome da tecnologia"  /* {...register("title")} */ /* error={errors.title} *//>
            <label className="headline">Selecionar status</label>
            <select className={`input`} /* {...register("course_module")} error={errors.course_module} */ defaultValue="">
                <option value="">Selecione o seu nível</option>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
            </select>
            <button type="submit" className={`${styles.buttonSubmit} btn`}>Cadastar Tecnologia</button>
        </form>
    )
}