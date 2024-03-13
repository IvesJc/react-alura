import { useState } from 'react'
import { Item } from './Item/item'
import ListaStyle from './Lista.module.scss'

export interface ITarefa {
    tarefa: string,
    tempo: string
}
interface ListaProps{
    tarefas: ITarefa[]
}

export const Lista = ({ tarefas }: ListaProps) => {

  return(
    <aside className={ListaStyle.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <Item 
                    key={index}
                    {...item}
                    // tarefa={item.tarefa}
                    // tempo={item.tempo}
                />
            ))}
        </ul>
    </aside>
  )
}