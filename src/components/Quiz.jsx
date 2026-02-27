import React, { useState } from 'react'
import { quizData, calculateTopFragrances } from '../data/quizData'
import './Quiz.css'

function Quiz({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showEmailPrompt, setShowEmailPrompt] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const currentQuestion = quizData[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizData.length - 1

  const handleAnswerSelect = (answerText) => {
    const updatedAnswers = [...selectedAnswers, answerText]
    setSelectedAnswers(updatedAnswers)

    if (isLastQuestion) {
      setShowEmailPrompt(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (showEmailPrompt) {
      setShowEmailPrompt(false)
    } else if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswers(selectedAnswers.slice(0, -1))
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setEmailSubmitted(true)
    // For demo: do not send anywhere
    const topFragrances = calculateTopFragrances(selectedAnswers)
    onComplete(topFragrances)
  }

  const progressPercentage = ((currentQuestionIndex + (showEmailPrompt ? 1 : 0)) / (quizData.length + 1)) * 100

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Find Your Signature Scent</h1>
        <p className="tagline">Fragrances made for forever moments</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="quiz-content">
        {showEmailPrompt ? (
          <form className="email-prompt" onSubmit={handleEmailSubmit}>
            <h2>Please submit your email address to receive your results.</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className="email-input"
              required
            />
            <button type="submit" className="submit-email-button">Submit</button>
            <div className="quiz-navigation">
              <button
                className="nav-button prev-button"
                type="button"
                onClick={handlePrevious}
              >
                ← Previous
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="question-counter">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </div>

            <h2 className="question">{currentQuestion.question}</h2>

            <div className={`answers-grid ${currentQuestionIndex === 0 ? 'single-column' : ''} ${currentQuestionIndex === 4 ? 'three-columns' : ''}`}>
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className="answer-button"
                  onClick={() => handleAnswerSelect(answer.text)}
                >
                  {answer.image && <img src={answer.image} alt={answer.text} className="answer-image" />}
                  {answer.text}
                </button>
              ))}
            </div>

            <div className="quiz-navigation">
              <button
                className="nav-button prev-button"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                ← Previous
              </button>

              <span className="step-indicator">
                {currentQuestionIndex + 1} / {quizData.length}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz
