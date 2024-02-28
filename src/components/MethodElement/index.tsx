import { useState, useEffect } from 'react';
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

  const method = useMethod({
    env: 'dev',
    onEvent: (event) => {
      console.log('onEvent:', event)
    },
    onSuccess: (payload) => {
      console.log('onSuccess:', payload);
    },
    onError: (error) => {
      console.log('onError', error);

    },
    onExit: (payload) => {
      console.log('onExit:', payload);
      handleSubmit('/accounts');
    },
    onOpen : (payload) => {
      console.log('onOpen', payload);
    }
  });

  if (token && token.length){
    method?.open(token);
  }

  return <div id="method-el"></div>
}

export default MethodElement;