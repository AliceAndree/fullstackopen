import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercices}</p>
    </>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14
  return (
    <div>
      <Part part={part1} exercices={exercises1}/>
      <Part part={part2} exercices={exercices2}/>
      <Part part={part3} exercices={exercices3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercices {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercices2 = 7
  const exercices3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercices2 + exercices3}/>
    </div>
  )
}

export default App;
