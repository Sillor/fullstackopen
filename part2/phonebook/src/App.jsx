import { useState } from 'react';
import PersonForm from './components/PersonForm.jsx';
import Persons from './components/Persons.jsx';
import Filter from './components/Filter.jsx';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('Your Name');
  const [newNumber, setNewNumber] = useState('000-000-0000');
  const [filterVal, setFilterVal] = useState('');

  const visiblePersons =
    filterVal.length ?
      persons.filter((p) =>
        p.name.toLowerCase().includes(filterVal.toLowerCase()),
      )
    : persons;

  const handleFilter = (event) => {
    setFilterVal(event.target.value);
  };

  const addNameNumber = (event) => {
    event.preventDefault();
    if (!newName.length) return;

    const exists = persons.some((person) => person.name === newName);

    if (exists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
      }),
    );
    setNewName('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input type="text" onChange={handleFilter} />
      </p>
      <h3>Add a new</h3>
      <PersonForm
        addNameNumber={addNameNumber}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons visiblePersons={visiblePersons} />
    </div>
  );
};

export default App;
