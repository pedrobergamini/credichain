import React from 'react';
import Header from '~/components/Header';

import background from '~/assets/background.jpg';

import { Container, ImageWrapper } from './styles';

export default function Landing() {
  return (
    <>
      <Header />
      <Container>
        <ImageWrapper src={background} />
      </Container>
    </>
  );
}
