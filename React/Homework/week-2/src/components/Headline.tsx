interface Props {
  headline: string;
}

function Headline({ headline }: Props) {
  return <h1 className="headline">{headline}</h1>;
}

export default Headline;
