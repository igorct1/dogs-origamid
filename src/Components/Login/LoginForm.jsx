import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import { useForm } from "../../Hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";
import { UserContext } from "../../UserContext";
import { Error } from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import { Head } from "../Helper/Head";

export const LoginForm = () => {
  const username = useForm("");
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  // função que ocorre quando o formúlario está sendo enviado
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error errorMessage={error && "Dados incorretos."} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};
