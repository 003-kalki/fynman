import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './features/landing/Landing'
import Home from './pages/Home'
import OnboardingFlow from './features/onboarding/OnboardingFlow'
import AssessmentFlow from './features/assessment/AssessmentFlow'
import LessonPage from './features/learning/LessonPage'
import JumperGame from './features/game/JumperGame'
import GridMazePuzzle from './features/puzzle/GridMazePuzzle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assessment" element={<AssessmentFlow />} />
        <Route path="/learn" element={<LessonPage />} />
        <Route path="/game" element={<JumperGame />} />
        <Route path="/puzzle" element={<GridMazePuzzle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
