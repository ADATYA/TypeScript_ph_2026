type QuizSummary = {
  total: number;
  average: number;
};

function getQuizSummary(scores: number[]): QuizSummary {
  if (scores.length === 0) {
    return { total: 0, average: 0 };
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;

  return { total, average };
}