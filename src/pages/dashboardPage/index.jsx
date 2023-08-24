import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { Modal } from "../../components/Modal";
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
                    <Modal/>
                </PostProvider>
            </main>
        </>
    )
}