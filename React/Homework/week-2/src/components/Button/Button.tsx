import './Button.css';

interface Props {
  className: string;
  buttonName: string;
}

function Button({ className, buttonName }: Props) {
  return (
    <div>
      <button className={className}>{buttonName}</button>
    </div>
  );
}

export default Button;
