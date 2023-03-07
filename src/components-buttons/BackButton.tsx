type BackButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BackButton = ({ text, onClick }: BackButtonProps) => {
  return (
    <div className="back-button-wrapper">
      <button className="back-button" onClick={onClick}>
        <div className="back-button-arrow"></div>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default BackButton;
