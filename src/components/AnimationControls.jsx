import './AnimationControls.css'

const SPEEDS = [
  { label: '느리게', value: 0.5 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 2 },
]

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      {/* 시작/정지 버튼 */}
      <button
        className={`btn-toggle ${isPlaying ? 'btn-toggle--playing' : 'btn-toggle--paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-label">{isPlaying ? '정지' : '시작'}</span>
      </button>

      {/* 속도 조절 */}
      <div className="speed-controls" role="group" aria-label="속도 조절">
        <span className="speed-label">속도</span>
        <div className="speed-buttons">
          {SPEEDS.map(({ label, value }) => (
            <button
              key={value}
              className={`btn-speed ${speed === value ? 'btn-speed--active' : ''}`}
              onClick={() => onSpeedChange(value)}
              aria-pressed={speed === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
