import { useEffect, useRef, useState } from 'react'

const BOARD_WIDTH = 16
const BOARD_HEIGHT = 10
const INITIAL_SNAKE = [
  { x: 4, y: 5 },
  { x: 3, y: 5 },
]
const INITIAL_DIRECTION = { x: 1, y: 0 }
const INITIAL_FOOD = { x: 7, y: 5 }
const SPEED = 220 // slower

function getRandomPosition(snake) {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * BOARD_WIDTH),
      y: Math.floor(Math.random() * BOARD_HEIGHT),
    }
  } while (snake.some(s => s.x === pos.x && s.y === pos.y))
  return pos
}

export default function SnakeGame() {
  const [started, setStarted] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const moveRef = useRef(direction)
  const gameOverRef = useRef(gameOver)

  useEffect(() => { moveRef.current = direction }, [direction])
  useEffect(() => { gameOverRef.current = gameOver }, [gameOver])

  useEffect(() => {
    if (!started || gameOver) return
    const handleKey = e => {
      if (gameOver) return
      if (e.key === 'ArrowUp' && moveRef.current.y !== 1) setDirection({ x: 0, y: -1 })
      if (e.key === 'ArrowDown' && moveRef.current.y !== -1) setDirection({ x: 0, y: 1 })
      if (e.key === 'ArrowLeft' && moveRef.current.x !== 1) setDirection({ x: -1, y: 0 })
      if (e.key === 'ArrowRight' && moveRef.current.x !== -1) setDirection({ x: 1, y: 0 })
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [gameOver, started])

  useEffect(() => {
    if (!started || gameOver) return
    const interval = setInterval(() => {
      setSnake(prev => {
        const newHead = { x: prev[0].x + moveRef.current.x, y: prev[0].y + moveRef.current.y }
        // Check wall collision
        if (
          newHead.x < 0 || newHead.x >= BOARD_WIDTH ||
          newHead.y < 0 || newHead.y >= BOARD_HEIGHT ||
          prev.some(s => s.x === newHead.x && s.y === newHead.y)
        ) {
          setGameOver(true)
          return prev
        }
        let newSnake
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomPosition([newHead, ...prev]))
          setScore(s => s + 1)
          newSnake = [newHead, ...prev]
        } else {
          newSnake = [newHead, ...prev.slice(0, -1)]
        }
        return newSnake
      })
    }, SPEED)
    return () => clearInterval(interval)
  }, [food, gameOver, started])

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setFood(INITIAL_FOOD)
    setScore(0)
    setGameOver(false)
    setStarted(false)
    setCountdown(0)
  }

  const handleStart = () => {
    setCountdown(3)
    let count = 3
    const interval = setInterval(() => {
      count--
      setCountdown(count)
      if (count === 0) {
        clearInterval(interval)
        setStarted(true)
      }
    }, 1000)
  }

  if (!started && countdown === 0) {
    return (
      <div className="flex flex-col items-center my-4">
        <button onClick={handleStart} className="px-6 py-2 rounded font-semibold" style={{ backgroundColor: '#f0e6d2', color: '#232946' }}>start game</button>
      </div>
    )
  }

  if (countdown > 0) {
    return (
      <div className="flex flex-col items-center my-4">
        <div className="text-4xl font-bold text-gray-700 dark:text-gray-200 my-8">{countdown}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center my-4">
      <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">snake game (use arrow keys)</div>
      <div
        className="grid"
        style={{
          gridTemplateRows: `repeat(${BOARD_HEIGHT}, 1.5rem)`,
          gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1.5rem)`,
          background: '#e2d9c3',
          borderRadius: '0.5rem',
          border: '2px solid #b2a177',
        }}
      >
        {[...Array(BOARD_WIDTH * BOARD_HEIGHT)].map((_, i) => {
          const x = i % BOARD_WIDTH
          const y = Math.floor(i / BOARD_WIDTH)
          const isSnake = snake.some(s => s.x === x && s.y === y)
          const isHead = snake[0].x === x && snake[0].y === y
          const isFood = food.x === x && food.y === y
          return (
            <div
              key={i}
              className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs select-none ${isHead ? 'bg-green-600' : isSnake ? 'bg-green-300' : isFood ? 'bg-red-400' : ''}`}
              style={{ border: '1px solid #e2d9c3' }}
            >
              {isFood ? '🍎' : ''}
            </div>
          )
        })}
      </div>
      <div className="mt-2 text-gray-700 dark:text-gray-200">score: {score}</div>
      {gameOver && (
        <button onClick={handleRestart} className="mt-2 px-4 py-1 rounded font-semibold" style={{ backgroundColor: '#f0e6d2', color: '#232946' }}>restart</button>
      )}
    </div>
  )
} 