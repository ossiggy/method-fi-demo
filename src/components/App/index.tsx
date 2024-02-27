import { ChangeEvent, useState } from 'react';
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

  return (
    <div className="App">
      <Header />
      <EntityForm {...entity} handleChange={handleChange}/>
    </div>
  );
}

export default App;
