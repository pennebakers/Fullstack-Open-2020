import React from 'react'
import ReactDOM from 'react-dom'


const App = () =>{
  const course ={
   name: 'Halfstack Application Development',
   parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'Stte of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return(
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))