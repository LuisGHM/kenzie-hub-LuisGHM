import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { Input } from "../input";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormScheme } from "./loginFormSchema";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormScheme)
    });

    const { userLogin, loading } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData);
    }

    return (
        <div className={`${styles.formContainer} container`}>
            <form className={`form`} onSubmit={handleSubmit(submit)}>
                <h2 className="title2">Login</h2>
                <Input className={`input`} type="email" label={"Email"} placeholder="Digite aqui seu email"  {...register("email")} error={errors.email}/>
                <Input className="input" type="password" label={"Senha"} placeholder="Digite aqui sua senha"  {...register("password")} error={errors.password}/>
                <button className={`${styles.buttonEnter} btn`} type="submit" disabled={loading}>{loading? "Carregando..." : "Entrar"}</button>
                <span className="headline bold grey1">Ainda não possui uma conta?</span>
                <Link className={`btn grey`} to="/register">Cadastrar-se</Link>
            </form>
        </div>
    )
}
