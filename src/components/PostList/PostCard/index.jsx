import styles from "./style.module.scss";
import { BiPencil } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs"

export const PostCard = ({ post }) => {
  return (
    <li className={`${styles.cardContainer}`}>
      <h1 className="paragraph">{post.title}</h1>
      <div className={styles.infoContainerCard}>
        <span className="headline grey1">{post.status}</span>
        <div className={styles.btnContainer}>
            <button className="btn grey3"><BiPencil/></button>
            <button className="btn grey3"><BsFillTrash3Fill/></button>
        </div>
      </div>
    </li>
  );
};
