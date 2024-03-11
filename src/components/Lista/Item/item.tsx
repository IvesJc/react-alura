import ListaStyle from '../Lista.module.scss'

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}){

    return (
        <li className={ListaStyle.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}