export function EditModal() {
    return (
        <div role='dialog'>
            <section>
                <div>
                    <h3>Dragon's details</h3>
                    <button onClick={""}>X</button>
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
                    <button type='submit'>Save</button>
                </form> 
            </section>
        </div>
    )
}