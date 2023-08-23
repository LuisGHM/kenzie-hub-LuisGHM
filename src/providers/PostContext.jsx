import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { api } from "../services/api";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {

    const { data: postList} = useQuery({ queryKey: ["posts"], queryFn: async () =>{
        const token = localStorage.getItem("@TOKEN");
        const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return data.techs;
    }})

    return(
        <PostContext.Provider value={{postList}}>
            {children}
        </PostContext.Provider>
    )
}