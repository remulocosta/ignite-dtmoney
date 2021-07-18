interface IRadioBoxProps {
  activeColor: 'green' | 'red';
  isActive: boolean;
}

interface IsNewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export {
  IRadioBoxProps,
  IsNewTransactionModalProps
}
