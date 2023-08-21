interface Props {
  buttonName: string;
}

function Button({ buttonName }: Props) {
  return (
    <div>
      <button>{buttonName}</button>
    </div>
  );
}

export default Button;
