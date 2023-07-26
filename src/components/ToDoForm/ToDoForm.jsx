import { useContext, useState } from "react";
import "./ToDoForm.css"
import { ToDoContext } from "../../Hooks/ToDoContext/ToDoContext";

export function ToDoForm(){
    const [ToDOText,setToDOText] = useState("")
    const {
        addTodo,
        setOpenModal
    } = useContext(ToDoContext)
    const onSubmit = (event) => {
        addTodo(ToDOText)
        event.preventDefault()
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setToDOText(event.target.value)
    }
    return(
        
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Escribe aqui..."
                rows={7}
                value={ToDOText}
                onChange={onChange}
            />
            <div className="contenedorBotones">
                <button 
                    type="button"
                    onClick={onCancel}
                    className="cancel">
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="add">
                    Añadir
                </button>
            </div>
        </form>
    )
        
}