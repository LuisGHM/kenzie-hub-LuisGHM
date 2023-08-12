import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";
import "./styles/index.scss";

export const App = () => {
  return (
    <>
      <RoutesMain />
      <Toaster/>
    </>
  );
};
