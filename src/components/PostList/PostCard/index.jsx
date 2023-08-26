import { useContext } from "react";
import styles from "./style.module.scss";
import { BiPencil } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs"
import { PostContext } from "../../../providers/PostContext";

export const PostCard = ({ post }) => {
  const { setEditingPost, postDelete } = useContext(PostContext);

  return (
    <li className={`${styles.cardContainer}`}>
      <h1 className="paragraph">{post.title}</h1>
      <div className={styles.infoContainerCard}>
        <span className="headline grey1">{post.status}</span>
        <div className={styles.btnContainer}>
            <button className="btn grey3" onClick={() => setEditingPost(post)}><BiPencil/></button>
            <button className="btn grey3" onClick={() => postDelete.mutate(post)}><BsFillTrash3Fill/></button>
        </div>
      </div>
    </li>
  );
};
