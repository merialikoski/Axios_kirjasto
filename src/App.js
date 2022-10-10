
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://api.jokes.one/jod'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      //console.log(response)
      const joke = response.data.contents.jokes[0].joke
      setTitle(joke.title)
      setText(joke.text)
    }).catch(error => {
      console.log(error)
      alert("Retrieving joke of the day failer!")
    })
  }, [])
  
  return (
    <div>
      <h3> Joke of the day</h3>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
