import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';
import { MdAttachMoney, MdArrowUpward } from 'react-icons/md';
import Header from '~/components/Header';

import { Container, Main, Below, Limit, Instalments, Loan } from './styles';

export default function LoanHome() {
  const [userLimit, setUserLimit] = useState('');
  const [loanValue, setLoanValue] = useState('');
  const [nextInstalments, setNextInstalments] = useState([]);
  const [showLoan, setShowLoan] = useState();

  useEffect(() => {
    toast.success('Bem-vindo! Sentimos sua falta =D');

    setUserLimit('R$ 10.532,48');
    setNextInstalments([
      'Dez: R$ 1.201,22',
      'Jan: R$ 1.201,22',
      'Fev: R$ 1.201,22',
      'Mar: R$ 1.201,22',
    ]);
  }, []);

  function handleChange(e) {
    setLoanValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setShowLoan({
      value: `R$ ${loanValue}`,
      instalments: 12,
      totalYield: '20%',
    });
  }

  return (
    <>
      <Header isLogged />
      <Container>
        {showLoan ? (
          <Loan>
            <strong>Nossa Oferta de Empréstimo</strong>
            <div>
              <h3>Valor: {showLoan.value}</h3>
              <h3>Parcelas: {showLoan.instalments}</h3>
              <h3>Juros Total: {showLoan.totalYield}</h3>
            </div>
            <div className="buttons">
              <button type="button" className="accept">
                Aceitar
              </button>
              <button type="button" className="refuse">
                Recusar
              </button>
            </div>
          </Loan>
        ) : (
          <Main>
            <div>
              <h3>Faça seu Empréstimo Conosco</h3>
              <FaHeart size={40} color="#7159c1" />
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Valor a ser emprestado R$"
                value={loanValue}
                onChange={handleChange}
              />
              <button type="submit">Solicitar Empréstimo</button>
            </form>
          </Main>
        )}
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
            <div>
              <ul>
                {nextInstalments.map(instalment => (
                  <li>{instalment}</li>
                ))}
              </ul>
            </div>
          </Instalments>
        </Below>
      </Container>
    </>
  );
}
