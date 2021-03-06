import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const anecdoteTotal = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdoteTotal).fill(0))
  const copy = [...votes]
  const max = Math.max(...copy)

  const isEqualToMax = (element) => element === max
  const popularAnecdoteId = copy.findIndex(isEqualToMax)
  
  const handleAnecdote = () => { setSelected(Math.floor(Math.random() * anecdoteTotal))}

  const handleVote = () => {
    copy[selected] +=1
    setVotes(copy)

  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {copy[selected]} votes</div>
      <Button
        onClick={handleVote}
        text="vote"
      />
      <Button
        onClick={handleAnecdote}
        text="next anecdote"
      />
      <h1>Anectode with the most votes</h1>
      <div>{anecdotes[popularAnecdoteId]}</div>
      <div>has {max} votes</div>
    </div>
  )
}

export default App