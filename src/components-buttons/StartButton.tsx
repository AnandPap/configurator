type NextButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const StartButton = ({ text, onClick }: NextButtonProps) => {
  return (
    <div className="start-button-wrapper">
      <button className="start-button" onClick={onClick}>
        <p className="next-button-text">{text}</p>
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default StartButton;
