import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <li>
    {text}
    <div>{value}</div>
  </li>
)

const Statistics = ({goods, neutrals, bads, all, average, positive}) => {

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given 
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <ul className='statistics'>

        <StatisticLine text='good' value={goods}/>
        <StatisticLine text='neutral' value={neutrals}/>
        <StatisticLine text='bad' value={bads}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>

      </ul>
    </div>
    )
  }
  


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(((good + 1) - bad) / (all + 1))
    setPositive(((good + 1) / (all + 1)) * 100)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPositive(((good) / (all + 1)) * 100)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(good + neutral + bad + 1)
    setAverage((good - (bad + 1)) / (all + 1))
    setPositive(((good) / (all + 1)) * 100)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />
      <Button
        onClick={increaseBad}
        text='bad'
      />
      <Statistics 
        goods={good} 
        neutrals={neutral}
        bads={bad}
        all={all}
        average={average}
        positive={positive + `%`}/>
    </div>
  )
}

export default App