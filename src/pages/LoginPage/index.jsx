import { LoginForm } from "../../components/Form/LoginForm"
import { HeaderLogin } from "../../components/Header/HeaderLogin"

export const LoginPage = ({setUser}) =>{
    return(
        <>
            <HeaderLogin/>
            <main>
                <LoginForm setUser={setUser}/>
            </main>
        </>
    )
}