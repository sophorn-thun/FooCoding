import Button from '../Button/Button';
import './Form.css';

interface Props {
  formName: string;
  inputName: string;
  inputType: string;
  textAreaName: string;
  titlePlaceholder: string;
  textAreaPlaceholder: string;
  buttonClassName: string;
  buttonName: string;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form({
  formName,
  inputName,
  inputType,
  textAreaName,
  titlePlaceholder,
  textAreaPlaceholder,
  buttonName,
  buttonClassName,
  handleFormSubmit,
}: Props) {
  return (
    <>
      <form className={formName} onSubmit={handleFormSubmit}>
        <input name={inputName} type={inputType} placeholder={titlePlaceholder} required />
        <textarea name={textAreaName} placeholder={textAreaPlaceholder} />
        <Button className={buttonClassName} buttonName={buttonName} />
      </form>
    </>
  );
}

export default Form;
