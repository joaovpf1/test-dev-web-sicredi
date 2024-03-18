import { useContext } from "react"
import { DragonContext } from "../../providers/dragonContext"
import { Header } from "../Header";

export function CreatePage() {
    const {dragonList} = useContext(DragonContext);
    
    return (
      <>
        <Header/>
        <main>
            <div>
                <h1>Criação de dragão:</h1>
            </div>
            <form onSubmit={""}>
                    <div>
                        <label>Name</label>
                        <input name='name' placeholder='Type name here...' type='text'/>
                    </div>

                    <div>
                        <label>Type</label>
                        <input name='type' placeholder='Type the type here...' type='type'/>
                    </div>

                    <div>
                        <label>History</label>
                        <input name='history' placeholder='Type the history here...' type='history'/>
                    </div>

                    <button type='submit'>Save</button>
                </form> 
        </main>
      </>
    )
  }