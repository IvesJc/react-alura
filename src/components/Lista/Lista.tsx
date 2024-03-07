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
                <li key={index} className={ListaStyle.item}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
            ))}
        </ul>
    </aside>
  )
}