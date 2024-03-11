import { Botao } from "../Button/Button"
import FormularioStyle from './Formulario.module.scss'

export const Formulario = () => {
  return(
    <form className={FormularioStyle.novaTarefa}>
        <div className={FormularioStyle.inputContainer}>
            <label htmlFor="tarefa">
                Adicione um novo estudo
            </label>
            <input 
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você quer estudar?"
                required
            />
        </div>
        <div className={FormularioStyle.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input 
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
            />
        </div>
        <Botao 
            texto="Adicionar"
        />
    </form>
  )
}