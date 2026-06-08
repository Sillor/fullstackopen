import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>Statistics</h1>
      {good || neutral || bad ?
        <>
          <table>
            <tbody>
              <StatisticRow text="good" value={good} />
              <StatisticRow text="neutral" value={neutral} />
              <StatisticRow text="bad" value={bad} />
              <StatisticRow text="all" value={good + neutral + bad} />
              <StatisticRow
                text="average"
                value={(good - bad) / (good + neutral + bad)}
              />
              <StatisticRow
                text="positive"
                value={(good / (good + neutral + bad)) * 100 + '%'}
              />
            </tbody>
          </table>
        </>
      : <p>No feedback given</p>}
    </>
  );
};

const StatisticRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
