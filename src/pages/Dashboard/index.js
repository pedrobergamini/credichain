import React from 'react';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header isLogged />
      <Container />
    </>
  );
}
