import React, {useEffect} from 'react'
function Score (props) {
useEffect(()=> {
    console.log('Score is mounted.')
    return ()=> {
        console.log('Score is unmounting')
    }
}, [])

    return (
      <div>
          <h1>Jservice Jeopardy</h1>
          <h3>Score: {props.score}</h3>
          <button onClick=
          {props.increment}>Add Scores</button>
          <button onClick=
          {props.decrement}>Subtract</button>
          <button onClick={props.reset}>Reset</button>

          
      </div>

    )
}

export default Score;