import Score from "./Score";
import "../styles/QuizBox.css"

export default function Container() {
  return (
    <section className="card">
        <p className="current-question">1/10</p>
        <h2 className="question">Question</h2>
        <div className="reponses-container">
          <button type="button" className="answer a1">R1</button>
          <button type="button" className="answer a2">R2</button>
          <button type="button" className="answer a3">R3</button>
          <button type="button" className="answer a4">R4</button>
      </div>
      <div className="score-container">
        <Score />
      </div>
      </section>
  )
}
