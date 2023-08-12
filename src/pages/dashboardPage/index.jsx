import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { PerfilSection } from "../../components/PerfilSection";
import { PostSection } from "../../components/PostSection";

export const DashboardPage = ({user, logout}) =>{
    return(
        <>
            <HeaderDashboard logout={logout}/>
            <main>
                <PerfilSection user={user}/>
                <PostSection/>
            </main>
        </>
    )
}