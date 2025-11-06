import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  // Keyboard accessibility - Space bar to toggle
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isPlaying])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'}`}>
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
          onClick={toggleAnimation}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleAnimation()
            }
          }}
        />
      </div>

      <div className="controls">
        <button
          className="control-button"
          onClick={toggleAnimation}
          aria-label={isPlaying ? 'Pause dance animation' : 'Start dance animation'}
        >
          {isPlaying ? '⏸️ Pause Dance' : '▶️ Start Dance'}
        </button>
        <p className="hint-text">
          Click the cat or press Space to toggle
        </p>
      </div>
    </div>
  )
}

export default DancingCat
