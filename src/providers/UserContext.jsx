import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-hot-toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          navigate("/dashboard");
          setUser(data);
        } catch (error) {
          toast.error("Token inspirado");
          setUser(null);
          navigate("/");
        }
      }
    };
    getUser();
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      toast.success("Usuario logado com sucesso");
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Senha ou email errado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      navigate("/");
      toast.success("Usuario cadastrado com sucesso");
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        toast.error("O email já existe");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <UserContext.Provider
      value={{ setUser, user, userLogin, userRegister, logout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
