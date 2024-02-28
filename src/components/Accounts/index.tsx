import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { IAccount } from 'method-node';
import { API_URL } from '../../config';
import AccountContainer from './AccountContainer';
import AccountHeaders from './AccountHeaders';

const Accounts = ({ entityId }: { entityId: string }) => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  useEffect(() => {
    const fetchAccounts: () => void = async () => {
      try {
        const accountRes = await fetch(`${API_URL}/account/list/${entityId}`);
        const accountsBody = await accountRes.json();
        setAccounts(accountsBody);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchAccounts();

    return () => {};
  }, [entityId]);

  let accountList;

  if (accounts && accounts.length) {
    accountList = accounts.map(account => {
      return (
        <AccountContainer key={account.id} account={account}/>
      );
    });
  }

  return (
    <Container
      style={{
        marginTop: '0.5rem'
      }}
    >
      <ListGroup>
        <AccountHeaders />
        {accountList}
      </ListGroup>
    </Container>
  )
};

export default Accounts;