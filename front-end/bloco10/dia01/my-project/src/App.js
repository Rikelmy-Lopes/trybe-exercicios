import './App.css';

const Task = (value) => {
  const array = ['Buscar Mae', 'Lavar Sapato', 'Jantar', 'Ir na casa da irmã']
  return (
    array.map((tarefa) => <li>{tarefa}</li>)
  );
}

function App() {
  return (
  <ul><Task></Task></ul>
  );
}

export default App;
