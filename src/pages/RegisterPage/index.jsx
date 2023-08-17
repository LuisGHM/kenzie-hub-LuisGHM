import { RegisterForm } from "../../components/Form/RegisterFrom";
import { HeaderRegister } from "../../components/Header/HeaderRegister";


export const RegisterPage = () =>{
    return(
        <>
            <HeaderRegister/>
            <main>
                <>
                    <RegisterForm/>
                </>
            </main>
        </>
    )
}