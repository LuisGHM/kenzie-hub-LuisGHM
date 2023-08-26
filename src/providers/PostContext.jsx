import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";

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
    onSuccess: () => {
        revalidate();
        toast.success("Post criado com sucesso")   
    },
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
            toast.success("Post alterado com sucesso")
        }
   });

   const postDelete = useMutation({
        mutationFn: async (formData) => {
            console.log(formData.id);
              return await api.delete(`/users/techs/${formData.id}`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            });
        },
        onSuccess:() =>{
            revalidate();
            toast.success("Post deletado")
        }
   });


    return(
        <PostContext.Provider value={{postList, isOpenAdd, setisOpenAdd, editingPost, setEditingPost, postCreate, postUpdate, postDelete}}>
            {children}
        </PostContext.Provider>
    )
}

