import { useState, useEffect } from "react";

type AnswerButtonProps = {
  i: number;
  text: string;
  selectedAnswer: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AnswerButton = ({
  i,
  text,
  selectedAnswer,
  onClick,
}: AnswerButtonProps) => {
  const [className, setClassName] = useState("no-border");

  useEffect(() => {
    if (selectedAnswer.includes(text)) setClassName("border");
  }, []);

  return (
    <div className="answer-button-wrapper">
      <button className={`answer-button ${className}`} onClick={onClick}>
        <div className="answer-circle">
          <p>{String.fromCharCode(i + 65)}</p>
        </div>
        <p className="answer-button-text">{text}</p>
      </button>
    </div>
  );
};

export default AnswerButton;
