import { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { useMethod } from '../../hooks';
import { API_URL } from '../../config';
import type { RequestOptions } from '../types';

interface MethodElementProps {
  handleSubmit: (value: string) => void;
  handleSetEntityId: (newEntityId: string) => void;
};

const MethodElement = ({ handleSubmit, handleSetEntityId }: MethodElementProps) => {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const requestOpts: RequestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    };

    const makeRequests: () => void = async () => {
      try {
        const entityRes = await fetch(`${API_URL}/entity`, { 
          ...requestOpts,
          body: JSON.stringify({
            type: 'individual',
            individual: {}
          })
        });
        const entity = await entityRes.json();
        if (entity) {
          const tokenRes = await fetch(`${API_URL}/element`, {
            ...requestOpts,
            body: JSON.stringify({
              entity_id: entity.id,
              team_name: 'Demo Auth App',
              type: 'auth',
              auth: {},
            })
          })
          const token = await tokenRes.json();
          setToken(token.element_token);
          handleSetEntityId(entity.id);
        }
      } catch (err: any) {
        console.error(err);
      }
    };

    makeRequests();

    return () => {};
  }, [handleSetEntityId]);

  const handleClick = () => {
    if (token && token.length){
      method?.open(token);
    }
  }

  const method = useMethod({
    env: 'dev',
    onEvent: (event) => {
      console.log('onEvent:', event)
    },
    onSuccess: (payload) => {
      console.log('onSuccess:', payload);
      handleSubmit('/accounts');
    },
    onError: (error) => {
      console.log('onError', error);

    },
    onExit: (payload) => {
      console.log('onExit:', payload);
    },
    onOpen : (payload) => {
      console.log('onOpen', payload);
    }
  });

  if (token && token.length){
    method?.open(token);
  }

  return (
    <Container id="method-el" style={{ marginTop: '0.5rem' }}>
      <Button onClick={handleClick} color="success">Launch Element</Button>
    </Container>
  )
}

export default MethodElement;