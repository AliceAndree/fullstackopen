import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// const Part = (props) => {
//   return (
//     <>
//       <p>{props.part} {props.exercices}</p>
//     </>
//   )
// }

const Content = (props) => {
  return (
    <div>
      <p>{props.name1} {props.ex1}</p>
      <p>{props.name2} {props.ex2}</p>
      <p>{props.name3} {props.ex3}</p>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercices: 10
      },
      {
        name: 'Using props to pass data',
        exercices: 7
      },
      {
        name: 'State of a component',
        exercices: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content name1={course.parts[0].name} ex1={course.parts[0].exercices}/>
      <Content name2={course.parts[1].name} ex2={course.parts[1].exercices}/>
      <Content name3={course.parts[2].name} ex3={course.parts[2].exercices}/>
      <Total total={course.parts[0].exercices + course.parts[1].exercices + course.parts[2].exercices} />
    </div>
  )
}

export default App;
