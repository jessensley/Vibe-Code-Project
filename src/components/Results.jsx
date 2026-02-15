import React from 'react'
import { fragranceData } from '../data/quizData'
import './Results.css'

function Results({ fragrances, onRestart }) {
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your Perfect Scent Match</h1>
        <p className="tagline">Forever starts here</p>
      </div>

      <div className="results-content">
        <div className="recommendation-text">
          <p>Based on your preferences, we recommend:</p>
        </div>

        <div className="fragrances-grid">
          {fragrances.map((fragrance, index) => {
            const details = fragranceData[fragrance]
            return (
              <div key={index} className="fragrance-card">
                <div className="fragrance-rank">#{index + 1}</div>
                <img
                  src={details.image}
                  alt={fragrance}
                  className="fragrance-image"
                />
                <h2 className="fragrance-name">{fragrance}</h2>
                <p className="fragrance-description">{details.description}</p>
              </div>
            )
          })}
        </div>

        <div className="results-footer">
          <p className="results-note">
            These fragrances represent your unique preferences. Explore both and discover your signature scent.
          </p>
          <button className="restart-button" onClick={onRestart}>
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
