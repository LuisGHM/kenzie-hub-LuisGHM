import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormScheme } from "./loginFormSchema";
import { api } from "../../../services/api";
import { toast } from "react-hot-toast";

export const LoginForm = ({setUser}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormScheme)
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData);
            setUser(data.user);
            toast.success("Usuario logado com sucesso");
            localStorage.setItem("@TOKEN", data.token);
            navigate("/dashboard");
        } catch (error) {
            if (error.response?.data.message === "Incorrect email / password combination" ) {
                toast.error("Senha ou email errado");
            }
        } finally {
            setLoading(false);
        }
    }

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
