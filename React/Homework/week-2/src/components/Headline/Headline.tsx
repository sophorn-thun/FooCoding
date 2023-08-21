import './Headline.css';

interface Props {
  className: string;
  headline: string;
}

function Headline({ className, headline }: Props) {
  return <h1 className={className}>{headline}</h1>;
}

export default Headline;
