import { useState } from 'react';
import './styles/App.css';
import PostFeed from './components/PostFeed/PostFeed';
import Headline from './components/Headline/Headline';
import Form from './components/Form/Form';
import { postsData, handleFormSubmit } from './components/PostFeed/posts-types';

function App() {
  const [posts, setPosts] = useState<any>(postsData);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const newPost = handleFormSubmit(event);
    setPosts([...postsData, newPost]);
  };

  return (
    <div className="wrapper">
      <Headline className="headline" headline="Create New Post" />
      <Form
        formName="form"
        inputName="title"
        inputType="Text"
        textAreaName="post"
        titlePlaceholder="Title here"
        textAreaPlaceholder="Write your post here"
        buttonClassName="btn"
        buttonName="Post"
        handleFormSubmit={onSubmit}
      />
      <PostFeed ulClassName="post-wrapper" liClassName="post" postCards={posts} />
    </div>
  );
}

export default App;
