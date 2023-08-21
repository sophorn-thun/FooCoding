export const postsData = [
  { title: 'Hello World', post: 'This is my first post' },
  { title: 'Pizza is great', post: 'I love pizza' },
  { title: 'Coding is fun', post: 'I enjoy coding' },
  { title: 'TypeScript is awesome but', post: 'is slowly killing me 💀' },
]

export function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const element = event.target as HTMLFormElement;

  const formData = new FormData(element);

  const newTitle = formData.get('title') as string;
  const newBody = formData.get('post') as string;

  const newPost = { title: newTitle, post: newBody };
  element.reset();
  return newPost;


}