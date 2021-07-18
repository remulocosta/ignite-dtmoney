import { FormEvent } from 'react';
import { useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'

import * as Styles from './styles';


import { IsNewTransactionModalProps } from './index.d';


function NewTransactionModal({
  isOpen,
  onRequestClose
}: IsNewTransactionModalProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const {createTransaction} = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Styles.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <Styles.TransactionTypeContainer>
          <Styles.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </Styles.RadioBox>
          <Styles.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </Styles.RadioBox>
        </Styles.TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Styles.Container>
    </Modal>
  );
}


export {
 NewTransactionModal
}
