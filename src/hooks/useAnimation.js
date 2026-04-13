import { useState, useCallback } from 'react'

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed)
  }, [])

  return { isPlaying, speed, toggle, changeSpeed }
}
