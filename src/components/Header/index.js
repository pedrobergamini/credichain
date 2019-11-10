import React from 'react';
import PropTypes from 'prop-types';

import { Container, Logo, Button } from './styles';

export default function Header({ isLogged }) {
  return (
    <Container>
      <Logo>
        <strong>{!isLogged ? 'HOME' : 'DASHBOARD'}</strong>
      </Logo>
      {!isLogged ? (
        <Button to="/login">Acessar</Button>
      ) : (
        <Button to="/" logout>
          Sair
        </Button>
      )}
    </Container>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};
