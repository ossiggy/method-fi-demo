import { ChangeEvent, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import EntityForm from '../EntityForm';
import './App.css';

const App = () => {
  const [entity, setEntity] = useState({
    first_name: '',
    last_name: '',
    phone: '+15121231111'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('fired')
    setEntity(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  // const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {

  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EntityForm {...entity} handleChange={handleChange}/>} />
      </Routes>
    </div>
  );
}

export default App;
