const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
        <p>
          {props.name} {props.num_exercise}
        </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part name={props.parts[0].name} num_exercise={props.parts[0].exercises}/>
        <Part name={props.parts[0].name} num_exercise={props.parts[1].exercises}/>
        <Part name={props.parts[0].name} num_exercise={props.parts[2].exercises}/>
    </div>

  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.num_exercise1 + props.num_exercise2 + props.num_exercise3}</p>
    </div>

  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total num_exercise1={parts[0].exercises} num_exercise2={parts[1].exercises} num_exercise3={parts[2].exercises}/>
    </>
  )
}

export default App