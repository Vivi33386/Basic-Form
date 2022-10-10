import './App.css';
import Input from './Input';
import {useState} from 'react';

function App() {
  const [data, setData]= useState({
    username: '',
    email: '',
    password: ''
  });
  
const handleChange = ({target:{name, value}}) => setData(data => ({
  ...data,
  [name]: value
}))
{/*const handleChange = (event) => setData(data => ({
  ...data,
  [event.target.name]: event.target.value
}))
*/}

  return (
    <div className="App">
      <h1>Adat az alkalmazás állapotában</h1>
      <p>Felhasználónév: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Jelszó: {data.password}</p>
      <h1>Regisztrációs form</h1>
      <Input label='Felhasználónáv' 
             name='username' 
             type='text'
             value={data.username}
             onChange={handleChange}/>
      <Input label='Email' 
             name='email'
             type='email'
             value={data.email}
             onChange={handleChange}/>
      <Input label='Jelszó'
             name='password'
             type='password' 
             value={data.password}
             onChange={handleChange}/>
    </div>
  );
}

export default App;
