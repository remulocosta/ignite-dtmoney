import logoImg from '../../assets/logo.svg';
import * as Styles from './styles';


function Header() {
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </Styles.Content>
    </Styles.Container>
  )
}


export {
  Header
}
