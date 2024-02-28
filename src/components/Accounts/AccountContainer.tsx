import { useState, ChangeEvent } from 'react';
import { ListGroupItem } from 'reactstrap';
import { IPayment, IAccount } from 'method-node';
import AccountItem from './AccountItem';
import { API_URL, SOURCE_ACCOUNT } from '../../config';
import { RequestOptions } from '../types';

export interface AccountContainerProps {
  account: IAccount;
}

const AccountContainer = ({ account }:AccountContainerProps) => {
  const [amount, setAmount] = useState(0);
  const [paymentId, setPaymentId] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }

  const submitPayment = async () => {
    const requestOpts: RequestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        source: SOURCE_ACCOUNT,
        destination: account.id,
        description: 'METHODFI',
        metadata: {
          origin: 'Method demo site'
        }
      })
    };
    const paymentRes = await fetch(`${API_URL}/payments`, requestOpts);
    const payment: IPayment = await paymentRes.json();
    if (payment && payment.id) {
      setPaymentId(payment.id);
    }
  }

  return (
    <ListGroupItem>
      <AccountItem 
        account={account} 
        amount={amount}
        paymentId={paymentId}
        handleChange={handleChange} 
        submitPayment={submitPayment}
        />
    </ListGroupItem>
  )
}

export default AccountContainer;