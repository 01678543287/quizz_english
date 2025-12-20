import React, { useState } from "react";
import quizData from "./quiz-data-giaiphau";

const questions = quizData[0].questions; // Lấy chương đầu tiên, bạn có thể cho chọn chương

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const score = questions.reduce(
    (sum, q, idx) => sum + (answers[idx] === q.answer ? 1 : 0),
    0
  );

  if (showResult) {
    return (
      <div>
        <h2>Kết quả: {score} / {questions.length}</h2>
        <button onClick={() => { setShowResult(false); setCurrent(0); setAnswers({}); }}>Làm lại</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div>
      <h3>Câu {current + 1}: {q.question}</h3>
      <ul>
        {["A", "B", "C", "D"].map((opt) => (
          <li key={opt}>
            <label>
              <input
                type="radio"
                name="answer"
                checked={answers[current] === opt}
                onChange={() => handleSelect(opt)}
              />
              {q[`option_${opt.toLowerCase()}`]}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNext} disabled={!answers[current]}>
        {current === questions.length - 1 ? "Xem kết quả" : "Câu tiếp"}
      </button>
    </div>
  );
}
