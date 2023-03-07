type NextButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NextButton = ({ className, type, text, onClick }: NextButtonProps) => {
  return (
    <div className={`next-button-wrapper ${className}`}>
      <button type={type} className="next-button" onClick={onClick}>
        <p className="next-button-text">{text}</p>
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default NextButton;
