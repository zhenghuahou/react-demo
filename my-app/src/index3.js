import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//
const usePerson = personId => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})
  console.warn(
    '---- 2@1 [usePerson] loading:',
    loading,
    ' person:',
    person,
    ' personId:',
    personId,
    ' time:',
    +new Date()
  )
  useEffect(() => {
    setLoading(`${+new Date()}@true`)
    console.error(
      '-------- 3 [useEffect]>>>>>:',
      ' time:',
      +new Date(),
      'loading:',
      loading
    )
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data)
        setLoading(`${+new Date()}@test`)
      })
    // eslint-disable-next-line
  }, [personId])
  console.warn(
    '---- 2@2 [usePerson] loading:',
    loading,
    ' person:',
    person,
    ' personId:',
    personId,
    ' time:',
    +new Date()
  )
  return [loading, person]
}

const Person = ({ personId }) => {
  console.error(
    '1@1 [Person]:',
    ' time:',
    +new Date(),
    'loading:',
    // eslint-disable-next-line
    loading,'person:',person
  )
  var [loading, person] = usePerson(personId)
  console.error(
    '1@2 [Person]:',
    ' time:',
    +new Date(),
    'loading:',
    // eslint-disable-next-line
    loading,'person:',person
  )

  if (loading === true) {
    return <p>Loading .....</p>
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  )
}

function App() {
  const [show, setShow] = useState('1')

  return (
    <div className="App">
      <Person personId={show} />
      <div>
        Show:
        <button onClick={() => setShow('1')}>Luke</button>
        <button onClick={() => setShow('2')}>C-3PO</button>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App
