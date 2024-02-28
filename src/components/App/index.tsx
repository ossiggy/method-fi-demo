import { ChangeEvent, useState, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header';
import EntityForm from '../EntityForm';
import MethodElement from '../MethodElement';
import Accounts from '../Accounts';
import './App.css';

const App = () => {
  const [entity, setEntity] = useState({
    first_name: '',
    last_name: '',
    phone: '+15121231111'
  });
  const [entityId, setEntityId] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (value: string) => {
    navigate(value);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEntity(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSetEntityId = useCallback((newEntityId: string) => {
    setEntityId(newEntityId);
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EntityForm {...entity} handleChange={handleChange} handleSubmit={handleSubmit}/>} />
        <Route path="/element" element={<MethodElement {...entity} handleSubmit={handleSubmit} handleSetEntityId={handleSetEntityId}/>}/>
        <Route path="/accounts" element={<Accounts entityId={entityId}/>}/>
      </Routes>
    </div>
  );
}

export default App;
