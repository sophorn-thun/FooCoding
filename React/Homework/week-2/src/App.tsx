import { useState } from 'react';
import './styles/App.css';
import PostFeed from './components/PostFeed';
import Headline from './components/Headline';
import Form from './components/Form';

function App() {
  const [posts, setPosts] = useState<any>([
    { title: 'Hello World', post: 'This is my first post' },
    { title: 'Pizza is great', post: 'I love pizza' },
    { title: 'Coding is fun', post: 'I enjoy coding' },
    { title: 'TypeScript is awesome but', post: 'is slowly killing me 💀' },
  ]);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.target as HTMLFormElement;

    const formData = new FormData(element);

    const newTitle = formData.get('title') as string;
    const newBody = formData.get('post') as string;

    const newPost = { title: newTitle, post: newBody };

    setPosts([...posts, newPost]);

    element.reset();
  }

  return (
    <div className="wrapper">
      <Headline headline="Create New Post" />
      <Form
        titlePlaceholder="Title here"
        textAreaPlaceholder="Write your post here"
        handleFormSubmit={handleFormSubmit}
      />
      <PostFeed postCards={posts} />
    </div>
  );
}

export default App;
