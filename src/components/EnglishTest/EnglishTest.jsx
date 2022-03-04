import { useEffect, useState } from "react";
import { loginGuard } from "../Auth";
import Question from "./Question";

const fetchQuestion = () => {
  const question = fetch("/api/test").then((res) => {
    return res.json();
  });
  return question;
};

const postAnswer = (answerIndex) => {
  return fetch("/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answerIndex }),
  }).then((res) => {
    return res.ok;
  });
};

const EnglishTest = () => {
  const [question, setQuestion] = useState({
    question: "loading",
    answers: ["loading", "loading", "loading", "loading"],
  });

  const [activeIndex, setActiveIndex] = useState(-1);
  const [result, setResult] = useState();
  const getCurrentQuestion = useCallback(() => {
    fetchQuestion().then((data) => {
      if (data.good) {
        setResult;
      }
      setQuestion({ question: data.text, answers: data.answers });
    });
  }, []);

  useEffect(() => {
    fetchQuestion().then((data) => {
      setQuestion({ question: data.text, answers: data.answers });
    });
  }, []);

  const onSelectAnswer = (index) => {
    setActiveIndex(index);
  };
  const onSubmitAnswer = () => {
    if (activeIndex === -1) {
      return;
    }
    postAnswer(activeIndex)
      .then(() => {
        return fetchQuestion();
      })
      .then((data) => {
        setQuestion({ question: data.text, answers: data.answers });
        setActiveIndex(-1);
      });
  };
  return (
    <div>
      <Question
        {...question}
        activeIndex={activeIndex}
        onSelectAnswer={onSelectAnswer}
        onSubmitAnswer={onSubmitAnswer}
      />
    </div>
  );
};

export default loginGuard(EnglishTest);
