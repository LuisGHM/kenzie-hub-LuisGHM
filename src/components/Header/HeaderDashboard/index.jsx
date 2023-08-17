import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import styles from "./style.module.scss";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const HeaderDashboard = () => {
  const notification = () => {
    toast.success("Usuário desconectado com sucesso.");
  };

  const { logout } = useContext(UserContext);

  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <img src={Logo} alt="Logo Kenzie Hub" />
          <Link
            className={`${styles.buttonReturn} btn grey headline bold`}
            to={"/"}
            onClick={() => {
              logout();
              toast.success("Usuário desconectado com sucesso.");
            }}
          >
            Sair
          </Link>
        </div>
      </div>
    </header>
  );
};
