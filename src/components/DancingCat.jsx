import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import './DancingCat.css'

const NOTES = ['♪', '♫', '♬', '♩']

export default function DancingCat({ isPlaying, speed }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      const id = Date.now()
      const note = NOTES[Math.floor(Math.random() * NOTES.length)]
      const x = Math.random() * 160 - 40
      setNotes(prev => [...prev.slice(-6), { id, note, x }])
      setTimeout(() => {
        setNotes(prev => prev.filter(n => n.id !== id))
      }, 1200)
    }, 400 / speed)

    return () => clearInterval(interval)
  }, [isPlaying, speed])

  const duration = `${1.2 / speed}s`

  return (
    <div className="dancing-cat-wrapper">
      {/* 배경 원 */}
      <div
        className={`bg-circle ${isPlaying ? 'bg-circle--active' : ''}`}
        style={isPlaying ? { animationDuration: `${2 / speed}s` } : {}}
      />

      {/* 음표 */}
      <div className="notes-container">
        {notes.map(({ id, note, x }) => (
          <span
            key={id}
            className="music-note"
            style={{
              left: `calc(50% + ${x}px)`,
              animationDuration: `${1.2 / speed}s`,
            }}
          >
            {note}
          </span>
        ))}
      </div>

      {/* 고양이 */}
      <div
        className={`cat-container ${isPlaying ? 'cat-container--dancing' : ''}`}
        style={isPlaying ? { animationDuration: duration } : {}}
        role="img"
        aria-label={isPlaying ? '춤추는 고양이' : '멈춘 고양이'}
      >
        <img src={catSvg} alt="dancing cat" className="cat-image" />
      </div>

      {/* 바닥 그림자 */}
      <div className={`cat-shadow ${isPlaying ? 'cat-shadow--dancing' : ''}`}
        style={isPlaying ? { animationDuration: duration } : {}}
      />

      {/* 상태 텍스트 */}
      <p className="cat-status">
        {isPlaying ? '🎵 신나게 춤추는 중!' : '😴 쉬는 중...'}
      </p>
    </div>
  )
}
