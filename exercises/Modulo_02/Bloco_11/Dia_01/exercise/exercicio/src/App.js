import React from 'react'
import './App.css';

const lista = [
  'Estudar',
  'Fazer Exercicios',
  'Foco'
]

const Taks = (value) => {
  return (
    lista.map((lista) => <li>{lista}</li>)
  );
}

export default Taks;
