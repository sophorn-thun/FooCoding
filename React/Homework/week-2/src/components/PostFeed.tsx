import { PostCardProps } from './PostCard';
import PostCard from './PostCard';

interface Props {
  postCards: PostCardProps[];
}
function PostFeed({ postCards }: Props) {
  return (
    <div>
      <ul className="post-wrapper">
        {postCards.map((postCard, index) => (
          <li className="post" key={index}>
            <PostCard title={postCard.title} post={postCard.post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;
