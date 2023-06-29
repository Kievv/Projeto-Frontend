import RegisterForm from '../../components/LoginForm/RegisterForm';
import './Login.css';

export default function Registrar() {
  return (
    <section className="login">
      <div className="background-image"></div>
      <h1 className="titulo-login">Remedie</h1>
      <RegisterForm />
    </section>
  );
}
