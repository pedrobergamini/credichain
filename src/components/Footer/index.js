import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <strong>
        Made with <FaHeart color="red" size={20} /> by CredChain team
      </strong>
    </Container>
  );
}
