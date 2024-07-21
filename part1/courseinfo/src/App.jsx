const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <p>
        {props.part} {props.num_exercise}
      </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content part={part1} num_exercise={exercises1}/>
      <Content part={part2} num_exercise={exercises2}/>
      <Content part={part3} num_exercise={exercises3}/>
      <Total num_exercise1={exercises1} num_exercise2={exercises2} num_exercise3={exercises3}/>
    </>
  )
}

export default App