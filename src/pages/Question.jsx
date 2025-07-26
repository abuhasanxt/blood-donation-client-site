import React from "react";

const Question = ({ singleQuestion }) => {
  const { question, answer } = singleQuestion;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow bg-base-100 border-base-300 dark:bg-gray-900 dark:text-white border"
    >
      <div className="collapse-title font-semibold">{question}</div>
      <div className="collapse-content text-sm">{answer}</div>
    </div>
  );
};

export default Question;
