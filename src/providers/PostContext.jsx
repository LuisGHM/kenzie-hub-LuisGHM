import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { api } from "../services/api";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {

    const [isOpen, setIsOpen ] = useState(false);
    const [editingPost, setEditingPost] = useState(null);


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
        <PostContext.Provider value={{postList, isOpen, setIsOpen, editingPost, setEditingPost}}>
            {children}
        </PostContext.Provider>
    )
}