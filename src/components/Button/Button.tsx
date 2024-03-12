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
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({children, type}: ButtonProps) => {
  // const { type = "button" } = this.props;
  return (
    <button type={type = "button"} className={ButtonStyle.botao}>
      {children}
      </button>
  )
}