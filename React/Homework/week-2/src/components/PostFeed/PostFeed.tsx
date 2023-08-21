import { PostCardProps } from '../PostCard/PostCard';
import PostCard from '../PostCard/PostCard';
import './PostFeed.css';

interface Props {
  ulClassName: string;
  liClassName: string;
  postCards: PostCardProps[];
}
function PostFeed({ ulClassName, liClassName, postCards }: Props) {
  return (
    <>
      <ul className={ulClassName}>
        {postCards.map((postCard, index) => (
          <li className={liClassName} key={index}>
            <PostCard title={postCard.title} post={postCard.post} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostFeed;
