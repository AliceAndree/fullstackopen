import React from 'react';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} {props.exercices}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercices {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercices={exercises1}/>
      <Content part={part2} exercices={exercices2}/>
      <Content part={part3} exercices={exercices3}/>
      <Total total={exercises1 + exercices2 + exercices3}/>
    </div>
  )
}

export default App;
