import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import { UserProvider } from "./providers/UserContext";

export const App = () => {
  return (
    <UserProvider>
      <RoutesMain />
      <Toaster/>
    </UserProvider>
  );
};
