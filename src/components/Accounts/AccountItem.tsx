import { ChangeEvent } from 'react';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import { AccountContainerProps } from './AccountContainer';

export interface AccountItemProps extends AccountContainerProps {
  amount: number;
  paymentId: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  submitPayment: () => Promise<void>;
}

const AccountItem = ({ account, amount, paymentId, handleChange, submitPayment }:AccountItemProps) => {
  let paymentIdDisplay = <Col></Col>;

  if (paymentId.length) {
    paymentIdDisplay = (
      <Col>{paymentId}</Col>
    )
  }

  const accountType = account.type;
  const accountSubType = accountType === "liability" 
    ? account[accountType]?.type
    : null;
  let accountName;
  if (accountType === "liability" && accountSubType) {
    const liability = account.liability;
    if (liability) {
      accountName = liability[accountSubType]?.name
    }
  } else if (accountType === "ach") {
    accountName = "ach"
  } else if (accountType === "clearing"){
    accountName = "clearing"
  }
  
  return (
    <Row>
      <Col>
        {account.id}
      </Col>
      <Col>
        {accountName}
      </Col>
      <Col>
        <Row>
          <Col>
            <Label for="amount">Amount (cents)</Label>
          </Col>
          <Col>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="5000"
              value={amount}
              onChange={handleChange}
              />
          </Col>
        </Row>
      </Col>
      <Col>
        <Button color="success" onClick={submitPayment}>Pay</Button>
      </Col>
      {paymentIdDisplay}
    </Row>
  )
}

export default AccountItem;