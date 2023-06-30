import { useEffect, useState, useContext } from 'react';
import { DialogModal, useModal } from 'react-dialog-confirm';
import ConsultasContext from '../../contexts/ConsultasContext';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

const TabelaDeleteConsulta = () => {
  const { consultas, listConsultas, removerConsulta } = useContext(ConsultasContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const consultasFiltradas = consultas.filter((consulta) => consulta.userId === userId);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listConsultas();
      setLoading(false);
    }

    carrega();
  }, []);

  async function handleRemover(key) {
    await removerConsulta(key);
    closeModal();
    navigate('/consultas');
  }

  const openModal = useModal()?.openModal;
  const closeModal = useModal()?.closeModal;

  const handleClick = (key) => {
    openModal(
      <DialogModal
        icon="warning"
        title="Remover consulta"
        description={'Tem certeza que deseja remover esta consulta?'}
        cancel="Não"
        hasCancel={true}
        confirm="Sim"
        hasConfirm={true}
        onConfirm={() => handleRemover(key)}
      />
    );
  };
  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {consultasFiltradas.map((consulta, key) => {
            return (
              <li key={key}>
                <p>
                  {consulta.especialidade} - {consulta.clinica} - {consulta.local} - {consulta.dia} - {consulta.horario}
                </p>
                <button onClick={() => handleClick(consulta.key)}>DELETAR CONSULTA</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteConsulta;
