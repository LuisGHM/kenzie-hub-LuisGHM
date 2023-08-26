import { Input } from "../input"

export const EditTechForm = () =>{
    return(
        <form className={"formContainer"} /* onSubmit={handleSubmit(submit)} */>
            <Input className={`input`} asside={true} type="text" label={"Nome"} placeholder="Digite aqui o nome da tecnologia"  /* {...register("title")} error={errors.title} *//>
            <label className="headline">Selecionar status</label>
            <select className={`input`} /* {...register("status")} error={errors.status} */ defaultValue="">
                <option value="">Selecione o seu nível</option>
                <option value={"Iniciante"}>Iniciante</option>
                <option value={"Intermediário"}>Intermediário</option>
                <option value={"Avançado"}>Avançado</option>
            </select>
           {/*  {errors.status ? <span className="headline">{errors.status.message}</span> : null} */}
            <button type="submit" className={`${"buttonSubmit"} btn`}>Cadastar Tecnologia</button>
        </form>
    )
}