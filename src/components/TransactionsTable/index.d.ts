interface IRadioBoxProps {
  activeColor: 'green' | 'red';
  isActive: boolean;
}

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}


export {
  ITransaction
}
