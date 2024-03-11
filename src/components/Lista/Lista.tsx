import Item from './Item/item'
import ListaStyle from './Lista.module.scss'

export const Lista = () => {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Java',
        tempo: '01:00:00'
    },{
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]

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