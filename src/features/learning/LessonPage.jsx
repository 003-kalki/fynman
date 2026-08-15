import LessonVisual from './components/LessonVisual'
import CheckQuestion from './components/checkQuestion'

function LessonPage() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <LessonVisual />
      <CheckQuestion />
    </div>
  )
}

export default LessonPage
