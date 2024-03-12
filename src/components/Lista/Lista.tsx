import { useState } from 'react'
import { Item } from './Item/item'
import ListaStyle from './Lista.module.scss'

interface ITarefa {
    tarefa: string,
    tempo: string
}

export const Lista = ({ tarefa }: ITarefa[]) => {

  return(
    <aside className={ListaStyle.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefa.map((item, index) => (
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