import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Tabela from '../../components/tabela/Tabela';
import "./Consultas.css";

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Suas consultas do dia</h1>
        <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50"/>
        <div className="btn-holder">
          <Link to="/consultas">
            <Button botao="CADASTRAR" classe="cadastrar" />
          </Link>
          <Link to="/consultas">
            <Button botao="DELETAR" classe="deletar" />
          </Link>
        </div>
      </div >
    </>
  );
};

export default Consultas;
