import axios from 'axios';
import React,{ useState, useEffect} from 'react'
import './App.css';
import Score from './Score'

function App() {
  const [jeoGame,setJeoGame] = useState([]);
  const allJeoGame =async () => {
    const response = await axios.get('http://jservice.io/api/random');
  setJeoGame(response.data[0])
  // console.log(response);
  }
// console.log(jeoGame)
 
  // const jServUrl = 'http://jservice.io/api/random'
  useEffect(() => {
    allJeoGame()}, [])
  //   const renderQuestion = (question, index) => {
  //     return 
  //   }

const [showdisplay,setShowDisplay]=useState(false) // state to display answer
const [showQues,setShowQues]=useState(true) // state to display question

const [count2, setCount2] = useState(0)
const increment = () => setCount2(count2 =>
  count2 + 1)
  const decrement = () => setCount2(count2 -1)
  const reset = () => setCount2(0)



  return (
    <div className="App">
        < Score score={count2}
    increment={increment} decrement={decrement} reset={reset}/> 
     
      <div>
      {
        showQues?<h2>{jeoGame.question}</h2>:null
      }
      
    <button onClick={()=>setShowQues(!showQues)}>Toggle</button>
    </div>
    <div>
      {
        showdisplay?<h3>{jeoGame.answer}</h3>:null
      }
      <button onClick={()=>setShowDisplay(!showdisplay)}>Toggle</button>
    </div>
   
    </div>

  );
}

export default App;
