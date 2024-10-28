interface scoreProps {
  score: number;
}

export default function Score({ score }: scoreProps) {
  return (
    <div className="score">Score : {score}/10</div>
  )
}
