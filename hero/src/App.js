import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [superPower, setSuperPower] = useState('')
  const [displayCharacter, setDisplayCharacter] = useState(true)

  return (
    <div className='App'>
      <div>
        <h1>Build A Hero</h1>

        <label>Name:</label>
        <input
          type='text'
          style={{ margin: 10 }}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Age:</label>
        <input
          type='text'
          style={{ margin: 10 }}
          onChange={(event) => setAge(event.target.value)}
        />

        <label>Height:</label>
        <input
          type='text'
          style={{ margin: 10 }}
          onChange={(event) => setHeight(event.target.value)}
        />

        <label>Super Power:</label>
        <input
          type='text'
          style={{ margin: 10 }}
          onChange={(event) => setSuperPower(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setDisplayCharacter(true)
          }}
        >
          Display The Character
        </button>
        <h1>Hero Input</h1>
        {displayCharacter && (
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superPower}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
