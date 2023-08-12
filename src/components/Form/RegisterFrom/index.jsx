import { useForm } from "react-hook-form";
import { Input } from "../input";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userRegister = async (formData) =>{
    try {
      setLoading(true)
      await api.post("/users", formData);
      navigate("/");
      toast.success("Usuario cadastrado com sucesso");
    } catch (error) {
      if(error.response.data.message === "Email already exists" ){
        toast.error("O email já existe");
      }
    } finally{
      setLoading(false)
    }
  }

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <div className={`${styles.formContainer} container`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="title2">Crie sua conta</h2>
        <span className="headline grey1">Rapido e grátis, vamos nessa</span>
        <Input
          className="input"
          type="text"
          label={"Nome"}
          placeholder="Digite aqui seu nome"
          {...register("name")}
          error={errors.name}
        />
        <Input
          className="input"
          type="text"
          label={"Email"}
          placeholder="Digite aqui seu email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          className="input"
          type="password"
          label={"Senha"}
          placeholder="Digite aqui sua senha"
          {...register("password")}
          error={errors.password}
        />
        <Input
          className="input"
          type="password"
          label={"Confirmar senha"}
          placeholder="Digite aqui sua senha novamente"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
        />
        <Input
          className="input"
          type="text"
          label={"Bio"}
          placeholder="Fale sobre você"
          {...register("bio")}
          error={errors.bio}
        />
        <Input
          className="input"
          type="text"
          label={"Contato"}
          placeholder="opção de contato"
          {...register("contact")}
          error={errors.contact}
        />
        <div className={`${styles.selectContainer}`}>
          <label className="headline">Selecione módulo</label>
          <select
            className={`${styles.select} input`}
            {...register("course_module")}
            error={errors.course_module}
            defaultValue=""
          >
            <option value="">Selecione um módulo</option>
            <option value={"Primeiro módulo"}>m1</option>
            <option value={"Segundo módulo"}>m2</option>
            <option value={"Terceiro módulo"}>m3</option>
            <option value={"Quarto módulo"}>m4</option>
            <option value={"Quinto módulo"}>m5</option>
            <option value={"Sexto módulo"}>m6</option>
          </select>
          {errors.course_module ? <span className="headline">{errors.course_module.message}</span> : null}
        </div>
        <button className={`btn`} disabled={loading} >{loading? "cadastrando..." : "Cadastrar"}</button>
      </form>
    </div>
  );
};
