import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';
import { MdAttachMoney, MdArrowUpward } from 'react-icons/md';
import Header from '~/components/Header';

import { Container, Main, Below, Limit, Instalments } from './styles';

export default function LoanHome() {
  const [userLimit, setUserLimit] = useState('');
  const [loanValue, setLoanValue] = useState('');

  useEffect(() => {
    toast.success('Bem-vindo! Sentimos sua falta =D');

    setUserLimit('R$ 10.532,48');
  }, []);

  function handleChange(e) {
    setLoanValue(e.target.value);
  }

  return (
    <>
      <Header isLogged />
      <Container>
        <Main>
          <div>
            <h3>Faça seu Empréstimo Conosco</h3>
            <FaHeart size={40} color="#7159c1" />
          </div>
          <form>
            <input
              type="text"
              placeholder="Valor a ser emprestado R$"
              value={loanValue}
              onChange={e => handleChange(e)}
            />
            <button type="button">Solicitar Empréstimo</button>
          </form>
        </Main>
        <Below>
          <Limit>
            <MdAttachMoney size={40} color="#fff" />
            <h3>Limite</h3>
            <strong>Seu Limite para Empréstimos atual é de {userLimit}</strong>
            <button type="button">Solicitar Aumento</button>
          </Limit>
          <Instalments>
            <MdArrowUpward size={40} color="#fff" />
            <h3>Próximas Parcelas</h3>
          </Instalments>
        </Below>
      </Container>
    </>
  );
}
