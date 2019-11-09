import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import history from '~/services/history';

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    history.push('/dashboard');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <strong>Login</strong>
        <input name="email" type="email" placeholder="Seu Email" />
        <input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Criar conta gratuita</Link>
      </form>
    </Container>
  );
}
