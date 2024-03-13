import React, { SetStateAction, useState } from "react"
import { Button } from "../Button/Button"
import FormularioStyle from './Formulario.module.scss'
import { ITarefa } from "../Lista/Lista"

interface FormularioProps {
    setTarefas: (tarefas: ITarefa[]) => void
}

export const Formulario = ({setTarefas}: FormularioProps) => {

    const [tarefa, setTarefa] = useState<string>("");
    const [tempo, setTempo] = useState<string>("00:00");

    const handleTarefaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTarefa(event.target.value);
    }

    const handleTempoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempo(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        tarefa: tarefa,
        tempo: tempo
      }
      console.log(data);
      
    }


    return (
        <form className={FormularioStyle.novaTarefa} onSubmit={handleSubmit}>
            <div className={FormularioStyle.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={handleTarefaChange}
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={FormularioStyle.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label >
                <input
                    type="time" 
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={handleTempoChange}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}
