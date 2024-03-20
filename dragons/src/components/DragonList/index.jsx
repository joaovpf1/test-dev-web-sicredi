import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"

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
        <ul>
           {dragonsListAZ.map(dragon=>(
            <li key={dragon.id}>
                <div>
                   <h2>Name: {dragon.name}</h2>
                </div>
                <div>
                  <button onClick={()=> findDragonById(dragon.id)}>More Info</button>
                    <button onClick={()=> editBttn(dragon)}>Edit</button>
                    <button onClick={()=> deleteDragon(dragon.id)}>Delete</button>
                </div>
            </li>
           ))}
        </ul>
      </>
    )
  }