import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
const SingleQuestion = ({ qs }) => {
  const [toggle, setToggle] = useState(false)

  const { title, info } = qs
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={handleToggle}>
          {toggle ? <FaMinus /> : <FaPlus />}
        </button>
      </header>

      {toggle && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestion
