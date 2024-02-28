import { useState, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Accounts from '../Accounts';
import MethodElement from '../MethodElement';
import './App.css';

const App = () => {
  const [entityId, setEntityId] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (value: string) => {
    navigate(value);
  }

  const handleSetEntityId = useCallback((newEntityId: string) => {
    setEntityId(newEntityId);
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MethodElement handleSubmit={handleSubmit} handleSetEntityId={handleSetEntityId}/>}/>
        <Route path="/accounts" element={<Accounts entityId={entityId}/>}/>
      </Routes>
    </div>
  );
}

export default App;
