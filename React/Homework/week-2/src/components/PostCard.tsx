export interface PostCardProps {
  title: string;
  post: string;
}
interface Props extends PostCardProps {}

function PostCard({ title, post }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{post}</p>
    </div>
  );
}

export default PostCard;
