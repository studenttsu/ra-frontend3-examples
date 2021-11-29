import { useRef, useState } from 'react';
import './App.css';
import { Master } from './components/Master/Master';

function masterFactory(id, fullName = 'Краснова Ирина') {
  return {
    id,
    fullName,
    position: 'Мастер ногтевого сервиса',
    photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9df59234053606.56c27d7f1e127.jpg'
  }
}

const mastersMockData = [
  masterFactory(1),
  masterFactory(2),
  masterFactory(3)
];

function App() {
  const [masters, setMasters] = useState(mastersMockData);
  const [value, setValue] = useState('');
  const inputRef = useRef();

  function remove(master) {
    setMasters(masters.filter(m => m.id !== master.id)); 
  }

  function handleForm(event) {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.focus();
    }

    const master = masterFactory(4, value);
    setMasters(masters.concat([master]));
  }

  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите имя сотрудника"  />
        <button>Добавить</button>
      </form>

      {masters.map((master) => <Master key={master.id} master={master}
        onRemove={() => remove(master)} />)}
    </div>
  );
}

export default App;
