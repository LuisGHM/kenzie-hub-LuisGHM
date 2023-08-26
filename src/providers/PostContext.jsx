import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { api } from "../services/api";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {

    const [isOpenAdd, setisOpenAdd ] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const token = localStorage.getItem("@TOKEN");

    const { data: postList} = useQuery({ queryKey: ["posts"], queryFn: async () =>{
        const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return data.techs;
    }});

    const client = useQueryClient();

    const revalidate = () => {
        client.invalidateQueries({ queryKey: ["posts"]});
        setisOpenAdd(false)
    }

   const postCreate = useMutation({
    mutationFn: async (formData) => {
         return await api.post("/users/techs", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }); 
    },
    onSuccess: revalidate,
   });

   const postUpdate = useMutation({
        mutationFn: async (formData) => {
             return await api.put(`/users/techs/${editingPost.id}`, formData, {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            }); 
        },
        onSuccess:() =>{
            setEditingPost(null);
            revalidate();
        }
   });


    return(
        <PostContext.Provider value={{postList, isOpenAdd, setisOpenAdd, editingPost, setEditingPost, postCreate, postUpdate}}>
            {children}
        </PostContext.Provider>
    )
}

