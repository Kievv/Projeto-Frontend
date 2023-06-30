import { useEffect, useState, useContext } from 'react';
import { DialogModal, useModal } from 'react-dialog-confirm';
import ExamesContext from '../../contexts/ExamesContext';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

const TabelaDeleteExame = () => {
  const { exames, listExames, removerExame } = useContext(ExamesContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listExames();
      setLoading(false);
    }

    carrega();
  }, []);

  async function handleRemover(key) {
    await removerExame(key);
    closeModal();
    navigate('/exames');
  }

  const examesFiltrados = exames.filter((exame) => exame.userId === userId);

  const openModal = useModal()?.openModal;
  const closeModal = useModal()?.closeModal;

  const handleClick = (key) => {
    openModal(
      <DialogModal
        icon="warning"
        title="Remover exame"
        description={'Tem certeza que deseja remover este exame?'}
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
          {examesFiltrados.map((exame, key) => {
            return (
              <li key={key}>
                <p>
                  {exame.exame} - {exame.clinica} - {exame.local} - {exame.dia} - {exame.horario}
                </p>
                <button onClick={() => handleClick(exame.key)}>DELETAR EXAME</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteExame;
