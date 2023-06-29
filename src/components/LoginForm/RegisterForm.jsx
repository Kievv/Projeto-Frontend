import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import Button from '../Botao';
import './LoginForm.css';

export default function RegisterForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { handleRegister } = useContext(UserContext);
  const [errorLogin, setErrorLogin] = useState('');

  const validaEmail = {
    required: {
      value: true,
      message: 'E-mail é obrigatório',
    },
    pattern: {
      value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
      message: 'E-mail inválido',
    },
  };

  const validaSenha = {
    required: {
      value: true,
      message: 'Senha é obrigatória',
    },
    minLength: {
      value: 6,
      message: 'Senha deve ter no mínimo 6 caracteres',
    },
  };

  async function onSubmit(data) {
    const { email, senha } = data;
    setErrorLogin('');

    await handleRegister(email, senha)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        setErrorLogin(err.message);
      });
  }

  return (
    <div className="div-login">
      <h1>Cadastrar</h1>
      <form className="loginForm">
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" {...register('email', validaEmail)} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" {...register('senha', validaSenha)} />
          {errors.senha && <p className="error">{errors.senha.message}</p>}
        </div>
        <div className="botao-login">
          <Button handleClick={handleSubmit(onSubmit)} classe="btn btn-primary" botao="Cadastrar" />
          <Link to="/">
            <Button botao="VOLTAR" classe="delete" />
          </Link>
        </div>
        {errorLogin && <p className="error">{errorLogin}</p>}
      </form>
    </div>
  );
}
