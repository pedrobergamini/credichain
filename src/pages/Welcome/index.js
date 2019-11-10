import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { Container, Select } from './styles';

export default function Welcome() {
  return (
    <Container>
      <Select>
        <FaRegMoneyBillAlt color="#7159c1" size={60} />
        <div>
          <Link to="/invest/home">Quero Investimentos!</Link>
          <Link to="/loans/home">Quero Empréstimo!</Link>
        </div>
      </Select>
    </Container>
  );
}
