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

const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
        <Part name={part1} num_exercise={exercises1}/>
        <Part name={part2} num_exercise={exercises2}/>
        <Part name={part3} num_exercise={exercises3}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course}/>
      <Content />
      <Total num_exercise1={part1.exercises} num_exercise2={part1.exercises} num_exercise3={part1.exercises}/>
    </>
  )
}

export default App