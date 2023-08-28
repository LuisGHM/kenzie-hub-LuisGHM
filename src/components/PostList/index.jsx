import React, { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import { PostCard } from "./PostCard";
import styles from "./style.module.scss";
import { FiPlus } from "react-icons/fi";

export const PostList = () => {
   const { postList, setisOpenAdd } = useContext(PostContext);

   return (
      <div className="container">
         <div className={`${styles.headerPostSection}`}>
            <h1 className="title2">Tecnologias</h1>
            <button onClick={() => setisOpenAdd(true)} className={`${styles.buttonPlus} btn grey2`}><FiPlus/></button>
         </div>
         <ul className={`${styles.listContainer}`}>
            {postList !== undefined && postList.length !== 0 ? (
               postList.map((item) => <PostCard key={item.id} post={item} />)
            ) : (
               <h3>Você ainda não tem nenhuma tecnologia cadastrada</h3>
            )}
         </ul>
      </div>
   );
};
