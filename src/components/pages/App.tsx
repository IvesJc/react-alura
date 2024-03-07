import React from 'react';
import { Formulario } from '../Formulario/Formulario';
import { Lista } from '../Lista/Lista';
import style from './App.module.scss'


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />

    </div>
  );
}

export default App;
