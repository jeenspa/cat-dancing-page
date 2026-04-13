import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation()

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="app-header">
        <h1 className={`app-title ${isPlaying ? 'app-title--glow' : ''}`}>
          🐱 댄싱 캣
        </h1>
        <p className="app-subtitle">클릭해서 춤을 시작해보세요!</p>
      </header>

      {/* 메인 영역 */}
      <main className="app-main">
        <div className="stage" onClick={toggle} role="button" tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
          aria-label={isPlaying ? '클릭하여 멈추기' : '클릭하여 춤추기'}
        >
          <DancingCat isPlaying={isPlaying} speed={speed} />
        </div>

        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
        />
      </main>

      {/* 푸터 */}
      <footer className="app-footer">
        <p>Made with ❤️ &amp; React</p>
      </footer>
    </div>
  )
}

export default App
