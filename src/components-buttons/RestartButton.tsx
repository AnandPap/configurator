type NextButtonProps = {
  text: string;
  onClick: () => void;
};

const RestartButton = ({ text, onClick }: NextButtonProps) => {
  return (
    <div className={`restart-button-wrapper`}>
      <button className="restart-button" onClick={onClick}>
        <p className="restart-button-text">{text}</p>
      </button>
    </div>
  );
};

export default RestartButton;
