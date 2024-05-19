import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const score = calculateScore(answers);

    if (score === 5) {
      setResult(
        <span className="correct-answer">
          Congratulations! You got all answers correct!
        </span>
      );
    } else {
      setResult(
        <span className="wrong-answer">
          Sorry, you didn't get all answers correct.
        </span>
      );
    }
  };

  const calculateScore = (answers) => {
    let score = 0;
    if (answers.q1 === "a") score++;
    if (answers.q2 === "b") score++;
    if (answers.q3 === "c") score++;
    if (answers.q4 === "d") score++;
    if (answers.q5 === "a") score++;
    return score;
  };

  return (
    <div className="main-container">
      <nav className="dashboard-navbar">
        <div className="user-info">
          <span>Tushar Patekar</span>
        </div>
        <div className="logout-button" onClick={handleLogout}>
          Logout
        </div>
      </nav>
      <div className="dashboard-container">
        <div className="quiz-container">
          <h2>Quiz</h2>
          <div className="question">
            <p>1. What does API stand for?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="q1"
                  value="a"
                  onChange={(e) =>
                    setAnswers({ ...answers, q1: e.target.value })
                  }
                />
                <span className="option-text">Application Programming Interface</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q1"
                  value="b"
                  onChange={(e) =>
                    setAnswers({ ...answers, q1: e.target.value })
                  }
                />
                <span className="option-text">Application Protocol Interface</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q1"
                  value="c"
                  onChange={(e) =>
                    setAnswers({ ...answers, q1: e.target.value })
                  }
                />
                <span className="option-text">Application Program Interface</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q1"
                  value="d"
                  onChange={(e) =>
                    setAnswers({ ...answers, q1: e.target.value })
                  }
                />
                <span className="option-text">Application Protocol Instruction</span>
              </li>
            </ul>
          </div>
          <div className="space"></div>
          <div className="question">
            <p>2. What library is used to build user interfaces in React?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="q2"
                  value="a"
                  onChange={(e) =>
                    setAnswers({ ...answers, q2: e.target.value })
                  }
                />
                <span className="option-text">Reactstrap</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q2"
                  value="b"
                  onChange={(e) =>
                    setAnswers({ ...answers, q2: e.target.value })
                  }
                />
                <span className="option-text">ReactDOM</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q2"
                  value="c"
                  onChange={(e) =>
                    setAnswers({ ...answers, q2: e.target.value })
                  }
                />
                <span className="option-text">Redux</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q2"
                  value="d"
                  onChange={(e) =>
                    setAnswers({ ...answers, q2: e.target.value })
                  }
                />
                <span className="option-text">React Router</span>
              </li>
            </ul>
          </div>
          <div className="space"></div>
          <div className="question">
            <p>3. What is PHP?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="q3"
                  value="a"
                  onChange={(e) =>
                    setAnswers({ ...answers, q3: e.target.value })
                  }
                />
                <span className="option-text">Preprocessor Hypertext Protocol</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q3"
                  value="b"
                  onChange={(e) =>
                    setAnswers({ ...answers, q3: e.target.value })
                  }
                />
                <span className="option-text">Personal Hypertext Processor</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q3"
                  value="c"
                  onChange={(e) =>
                    setAnswers({ ...answers, q3: e.target.value })
                  }
                />
                <span className="option-text">Hypertext Preprocessor</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q3"
                  value="d"
                  onChange={(e) =>
                    setAnswers({ ...answers, q3: e.target.value })
                  }
                />
                <span className="option-text">Personal Home Page</span>
              </li>
            </ul>
          </div>
          <div className="space"></div>
          <div className="question">
            <p>4. Which of the following is NOT a JavaScript framework?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="q4"
                  value="a"
                  onChange={(e) =>
                    setAnswers({ ...answers, q4: e.target.value })
                  }
                />
                <span className="option-text">Angular</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q4"
                  value="b"
                  onChange={(e) =>
                    setAnswers({ ...answers, q4: e.target.value })
                  }
                />
                <span className="option-text">React</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q4"
                  value="c"
                  onChange={(e) =>
                    setAnswers({ ...answers, q4: e.target.value })
                  }
                />
                <span className="option-text">Vue</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q4"
                  value="d"
                  onChange={(e) =>
                    setAnswers({ ...answers, q4: e.target.value })
                  }
                />
                <span className="option-text">Django</span>
              </li>
            </ul>
          </div>
          <div className="space"></div>
          <div className="question">
            <p>5. Which HTTP method is idempotent?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="q5"
                  value="a"
                  onChange={(e) =>
                    setAnswers({ ...answers, q5: e.target.value })
                  }
                />
                <span className="option-text">GET</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q5"
                  value="b"
                  onChange={(e) =>
                    setAnswers({ ...answers, q5: e.target.value })
                  }
                />
                <span className="option-text">POST</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q5"
                  value="c"
                  onChange={(e) =>
                    setAnswers({ ...answers, q5: e.target.value })
                  }
                />
                <span className="option-text">PUT</span>
              </li>
              <li>
                <input
                  type="radio"
                  name="q5"
                  value="d"
                  onChange={(e) =>
                    setAnswers({ ...answers, q5: e.target.value })
                  }
                />
                <span className="option-text">DELETE</span>
              </li>
            </ul>
          </div>
          <div className="space"></div>
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
          {result && <p className="result">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
