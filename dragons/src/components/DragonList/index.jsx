import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"

export function DragonList() {
    const {dragonList} = useContext(DragonContext);

    const dragonsListAZ = dragonList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    
    return (
      <>
        <ul>
           {dragonsListAZ.map(dragon=>(
            <li key={dragon.id}>
                <div>
                   <h2>Name: {dragon.name}</h2>
                   <p>Type:{dragon.type}</p>
                   <p>Creation date:{dragon.createdAt}</p> 
                </div>
                <div>
                    <button onClick={""}> Delete</button>
                    <button onClick={""}>Edit</button>
                </div>
            </li>
           ))}
        </ul>
      </>
    )
  }