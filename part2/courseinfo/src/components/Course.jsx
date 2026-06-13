const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ content }) => {
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} part={part} />
      ))}

      <p>
        <strong>
          total of {content.reduce((s, p) => s + p.exercises, 0)} exercises
        </strong>
      </p>
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

const Course = ({ courses }) => {
  return (
    <>
      <h1>Web Development curriculum</h1>
      {courses.map((course) => (
        <>
          <Header course={course} />
          <Content content={course.parts} />
        </>
      ))}
    </>
  );
};

export default Course;
