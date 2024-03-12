import ListaStyle from '../Lista.module.scss'

interface ItemListaProps{
    tarefa: string,
    tempo: string
}

export const Item = ({tarefa, tempo}: ItemListaProps) => {
    return (
        <li className={ListaStyle.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}