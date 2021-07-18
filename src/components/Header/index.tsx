import logoImg from '../../assets/logo.svg';
import * as Styles from './styles';


import { IHeaderProps } from './index.d';


function Header({onOpenNewTransactionModal}: IHeaderProps) {
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Styles.Content>
    </Styles.Container>
  )
}


export {
  Header
}
