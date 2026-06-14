const Persons = ({ visiblePersons }) => {
  return visiblePersons.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ));
};

export default Persons;
