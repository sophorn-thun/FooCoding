import Button from './Button';

interface Props {
  titlePlaceholder: string;
  textAreaPlaceholder: string;
  handleFormSubmit: (event) => void;
}

function Form({ titlePlaceholder, textAreaPlaceholder, handleFormSubmit }: Props) {
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input name="title" type="text" placeholder={titlePlaceholder} required />
        <textarea name="post" placeholder={textAreaPlaceholder} />
        <Button buttonName="Post" />
      </form>
    </div>
  );
}

export default Form;
