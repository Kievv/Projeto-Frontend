import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Tabela from '../../components/tabela/Tabela';
import './Consultas.css';

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Suas consultas do dia</h1>
        <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" />
        <div className="btn-holder">
          <Link to="/consultas/cadastrar">
            <Button botao="CADASTRAR" classe="cadastrar" />
          </Link>
          <Link to="/consultas/deletar">
            <Button botao="DELETAR" classe="deletar" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default Consultas;
