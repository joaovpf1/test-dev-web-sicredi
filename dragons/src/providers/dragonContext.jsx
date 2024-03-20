import { createContext, useEffect, useState } from "react";
import { hubApi } from "../service/api";
import { useNavigate } from "react-router-dom";

export const DragonContext = createContext({});

// eslint-disable-next-line react/prop-types
export const DragonProvider =({ children })=>{
    const [dragonList, setDragonList] = useState([])
    const [editingDragon, setEditingDragon] = useState({})
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    const [detailDragon, setDetailDragon] = useState({})

    const navigate = useNavigate();

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

    const findDragonById = async (id)=>{
        const {data} = await hubApi.get(`/${id}`);
        setDetailDragon(data)
        navigate('/detail')
    }
    

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
    
    const closeEditModal = () => {
        setEditModalVisible(false);
        setEditingDragon(null)
    }

    const editDragon = async (formData)=>{
        try {
            const { data } = await hubApi.put(`/${editingDragon.id}`, formData)
            const newDragonsList = dragonList.map(dragon => {
                if (dragon.id === editingDragon.id) {
                    return data;
                } else {
                    return dragon
                }
            })
            setDragonList(newDragonsList)
            setEditingDragon(null)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <DragonContext.Provider value={{dragonList, setDragonList, editingDragon, setEditingDragon, editModalVisible, setEditModalVisible, deleteModalVisible, setDeleteModalVisible, deleteDragon, createDragon, closeEditModal, editDragon, detailDragon, setDetailDragon, findDragonById}}>
            {children}
        </DragonContext.Provider>
    )
}