import { createContext, useEffect, useState } from "react";
import { hubApi } from "../service/api";

export const DragonContext = createContext({});

export const DragonProvider =({ children })=>{
    const [dragonList, setDragonList] = useState([])
    const [editingDragon, setEditingDragon] = useState(null)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)


    useEffect(()=>{
        const getDragons = async ()=>{
            try{
                const {data} = await hubApi.get('/');
                setDragonList(data)
            } catch(error){
                console.log(error)
            }
        }
        getDragons();
    },[])

    const deleteDragon = async (id) =>{
        try{
            await hubApi.delete(`/${id}`)
            const newDragonList = dragonList.filter(dragon => dragon.id !== id);
            setDragonList(newDragonList)
        }catch(error){
            console.log(error)
        }
    }

    const createDragon = async (formData) =>{
        try{
            const {data} = await hubApi.post('/', formData)
            setDragonList([...dragonList, data])
        }catch(error){
            console.log(error)
        } 
    }
    
    return(
        <DragonContext.Provider value={{dragonList, setDragonList, editingDragon, setEditingDragon, editModalVisible, setEditModalVisible, deleteModalVisible, setDeleteModalVisible, deleteDragon, createDragon}}>
            {children}
        </DragonContext.Provider>
    )
}