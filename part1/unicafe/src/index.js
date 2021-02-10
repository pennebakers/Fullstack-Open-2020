import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root')


  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const Statistic = ({text, value}) => {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

  const Statistics = (props) => {
    let total = props.badClicks + props.neutralClicks + props.goodClicks
    let positive = props.goodClicks / total
    let average = props.badClicks / total
    let negative = props.neutralClicks / total
    if(total !== 0)
      return(
        <div>
          <table>
            <Statistic text='good' value={props.goodClicks}/>
            <Statistic text='neutral' value={props.neutralClicks}/>
            <Statistic text='bad' value={props.badClicks}/>
            <Statistic text='all' value={total}/>
            <Statistic text='postive' value={positive}/>
            <Statistic text='average' value={average}/>
            <Statistic text='negative' value={negative}/>
          </table>
        </div>
      )

      return(
        <div>
          <p>No Data Yet</p>
        </div>
      )
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => { setGood(good + 1) }
  const handleNeutralClicks = () => { setNeutral(neutral+ 1) }
  const handleBadClicks = () => { setBad(bad + 1) }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClicks} text='good' />
      <Button onClick={handleNeutralClicks} text='neutral' />
      <Button onClick={handleBadClicks} text='bad' />
      <h1>statistics</h1>
      <Statistics goodClicks={good} badClicks={bad} neutralClicks={neutral} />
    </div>
  )
}




ReactDOM.render(
    <App />, root
);


