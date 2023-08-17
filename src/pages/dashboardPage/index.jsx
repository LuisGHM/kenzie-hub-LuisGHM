import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { PerfilSection } from "../../components/PerfilSection";
import { PostSection } from "../../components/PostSection";

export const DashboardPage = () =>{
    return(
        <>
            <HeaderDashboard/>
            <main>
                <PerfilSection/>
                <PostSection/>
            </main>
        </>
    )
}