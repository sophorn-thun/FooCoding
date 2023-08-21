import './PostCard.css';

export interface PostCardProps {
  title: string;
  post: string;
}

function PostCard({ title, post }: PostCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{post}</p>
    </div>
  );
}

export default PostCard;
