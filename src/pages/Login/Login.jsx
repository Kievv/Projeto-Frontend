import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';

export default function Login() {
  return (
    <section className="login">
      <div className="background-image"></div>
      <h1 className="titulo-login">Remedie</h1>
      <LoginForm />
    </section>
  );
}
