import { useState } from 'react'
import questions from './data'
import SingleQuestion from './SingleQuestion'
const App = () => {
  const [question, setQuestion] = useState(questions)
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {question.map((qs) => {
          return <SingleQuestion qs={qs} key={qs.id} />
        })}
      </div>
    </main>
  )
}
export default App
