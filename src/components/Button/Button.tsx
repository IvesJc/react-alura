import React from "react";
import ButtonStyle from './Button.module.scss'

// class Botao extends React.Component {
//     render(): React.ReactNode {
//         return (
//             <button>Botão</button>
//         )
//     }
// }


// export default Botao;

interface ButtonProps{
  texto: string
}

export const Botao = ({texto}: ButtonProps) => {
  return (
    <button className={ButtonStyle.botao}>
      {texto}
      </button>
  )
}