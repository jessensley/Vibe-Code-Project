import React, { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {
  const [showResults, setShowResults] = useState(false)
  const [topFragrances, setTopFragrances] = useState([])

  const handleQuizComplete = (fragrances) => {
    setTopFragrances(fragrances)
    setShowResults(true)
  }

  const handleRestartQuiz = () => {
    setShowResults(false)
    setTopFragrances([])
  }

  return (
    <div className="app">
      {!showResults ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <Results fragrances={topFragrances} onRestart={handleRestartQuiz} />
      )}
    </div>
  )
}

export default App
