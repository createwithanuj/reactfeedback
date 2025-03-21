import { Children, useState } from 'react';

const Button = ({handleClick, children}) => {
  return <>
    <button onClick={handleClick}>{children}</button>
  </>
}

const StatisticsLine = ({text, value}) => {
  return <>
    <p>{text}: {value}</p>
  </>
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral;
  const average  = Math.round(all / 3);

  return <>
    <StatisticsLine text = "good" value = {good}/>
    <StatisticsLine  text = "neutral" value = {neutral} />
    <StatisticsLine text = "bad" value ={bad} />
    <StatisticsLine text = "all" value ={all} />
    <StatisticsLine text = "average" value ={average} />
  </>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  return <div>
    <h1>React Exercise</h1>
    <h2>Give Feedback</h2>
    <Button handleClick={() => {setGood(good+1)}}>Good</Button>
    <Button handleClick={() => {setNeutral(neutral+1)}}>Neutral</Button>
    <Button handleClick={() => {setBad(bad+1)}}>Bad</Button>
    <h2>Statistics</h2>
    <Statistics good={good} bad={bad} neutral={neutral}/>
  </div>
  
}

export default App;