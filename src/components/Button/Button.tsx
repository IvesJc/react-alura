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

export const Botao = () => {
  return (
    <button className={ButtonStyle.botao}>Botão</button>
  )
}