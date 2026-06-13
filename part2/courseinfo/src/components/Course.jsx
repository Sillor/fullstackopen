const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ content }) => {
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content content={course.parts} />
    </>
  );
};

export default Course;
