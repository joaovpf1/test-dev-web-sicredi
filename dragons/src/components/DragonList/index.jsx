import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"
import editIcon from "../../assets/editIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg"
import plusIcon from "../../assets/plusIcon.svg";
import dragonIcon from "../../assets/dragon16x16.png"

export function DragonList() {
    const {dragonList, deleteDragon, setEditingDragon, setEditModalVisible, findDragonById} = useContext(DragonContext);

    const dragonsListAZ = dragonList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    const editBttn = (dragon) => {
      setEditingDragon(dragon);
      setEditModalVisible(true);
    }
    
    return (
      <>
        <ul className="w-3/5 h-80 flex justify-around flex-wrap items-center gap-3 overflow-x-auto pt-3.5">
           {dragonsListAZ.map(dragon=>(
            <li className="min-w-[120px]  h-32 bg-zinc-900 rounded flex flex-col items-center justify-around border-2 border-red-700" key={dragon.id}>
                <div>
                   <h2 className="flex gap-2 text-red-500 font-semibold">{dragon.name} <img src={dragonIcon} alt="Dragon icon" /></h2>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:border-2 border-red-700 rounded" onClick={()=> findDragonById(dragon.id)}>
                      <img src={plusIcon} alt="Plus icon" />
                    </button>
                    <button className="hover:border-2 border-red-700 rounded" onClick={()=> editBttn(dragon)}> 
                      <img src={editIcon} alt="Edit icon" />
                    </button>
                    <button className="hover:border-2 border-red-700 rounded" onClick={()=> deleteDragon(dragon.id)}> 
                      <img className="bg-transparent" src={deleteIcon} alt="Delete icon" />
                    </button>
                </div>
            </li>
           ))}
        </ul>
      </>
    )
  }