type IconProps = {
  iconURL: string;
  className: string;
};

const Icon = ({ iconURL, className }: IconProps) => {
  return <img src={iconURL} alt="" className={className}></img>;
};

export default Icon;
