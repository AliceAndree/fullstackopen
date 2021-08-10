import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

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
    setAverage(((good+1) - bad)/(all+1))
    setPositive(((good +1)/(all + 1))*100)    
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPositive(((good)/(all + 1))*100)    
  }
  const increaseBad = () => { 
    setBad(bad + 1) 
    setAll(good + neutral + bad + 1)
    setAverage((good - (bad + 1))/(all+1))
    setPositive(((good)/(all + 1))*100)    
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

      <h1>statistics</h1>
      <ul className='statistics'>
        <li>good 
        <Display className='counter' counter={good} />
        </li>
        <li>neutral 
        <Display counter={neutral} />  
        </li>
        <li>bad 
        <Display counter={bad} />
        </li>
        <li>all
        <Display counter={all} />
        </li>
        <li>average
        <Display counter={average} />
        </li>
        <li>positive
        <Display counter={positive + '%'}/>
        </li>
      </ul>
    </div>
  )
}

export default App