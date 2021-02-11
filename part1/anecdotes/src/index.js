import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(array))

  const handleNextClick = () => {
    var array = props.size
    var random = Math.floor(Math.random() * (array - 0) + 0)
    setSelected(random)
}
  const handleVoteClick = () => {
     let copy = [...votes]
     copy[selected] += 1
     setVotes(copy)
}

  return (
    <div>
      <AnecdoteOfTheDay />
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text='Vote'/>
      <Button onClick={handleNextClick} text='Next'/>
      <MostVotesTitle />
      <MostVoted votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const MostVotesTitle = () => {
  return(
    <h1>anecdotes with most votes</h1>
  )
}

const AnecdoteOfTheDay = () => {
  return(
    <h1>Anecdote Of The Day</h1>
  )
}

const MostVoted = ({votes, anecdotes}) => {
  const maxIndex = votes.indexOf(Math.max(...votes))
  const maxVotes = Math.max(...votes)
  if(maxVotes === 0){
    return(
      <h1>no votes have been inputted yet</h1>
    )
  }

  return(
  <div>
    <p>{anecdotes[maxIndex]}</p>
    <h1>has {maxVotes} votes</h1>
  </div>
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

var array = anecdotes.length
var votes = new Uint8Array(array);

ReactDOM.render(
  <App anecdotes={anecdotes} size={array} votes={votes}/>,
  document.getElementById('root')
)

