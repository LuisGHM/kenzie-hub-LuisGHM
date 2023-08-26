import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { ModalAdd } from "../../components/Modal/ModalAdd";
import { ModalEdit } from "../../components/Modal/ModalEdit";
import { PerfilSection } from "../../components/PerfilSection";
import { PostList } from "../../components/PostList";
import { PostProvider } from "../../providers/PostContext";

export const DashboardPage = () =>{
    return(
        <>
            <HeaderDashboard/>
            <main>
                <PerfilSection/>
                <PostProvider>
                    <PostList/>
                    <ModalAdd/>
                    <ModalEdit/>
                </PostProvider>
            </main>
        </>
    )
}