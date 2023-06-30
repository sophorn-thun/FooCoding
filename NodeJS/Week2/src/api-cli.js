
import { parseArgs } from 'node:util';
import { showHelp } from './utils/questions.js';
import { getAllUsers, getUserById, updateUser, deleteUser, createUser } from './utils/api.js';
import { getAllPosts, getPostById, updatePost, deletePost, createPost } from './utils/api.js';
import { getNewUserData, getUpdatedUserData, getNewPostData, getUpdatedPostData } from './utils/questions.js';
import { server } from './utils/app.js';

// Start server
server;

// Parsing command
const options = {
  resource: { type: 'string' },
  method: { type: 'string' },
  all: { type: 'boolean' },
  id: { type: 'string' },
  help: { type: 'boolean' },
};

const { values } = parseArgs({ options });

if (values.help) {
  showHelp();
} else if (values.resource && values.method) {
  const resource = values.resource.toUpperCase();
  const method = values.method.toUpperCase();

  switch (resource) {
    case 'USERS':
      switch (method) {
        case 'GET':
          if (values.all) {
            await getAllUsers();
          } else if (values.id) {
            const userId = values.id;
            await getUserById(userId);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        case 'POST':
          const newUser = await getNewUserData();
          await createUser(newUser);
          break;

        case 'PATCH':
          if (values.id) {
            const userId = values.id;
            const updatedFields = await getUpdatedUserData();
            await updateUser(userId, updatedFields);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        case 'DELETE':
          if (values.id) {
            const userId = values.id;
            await deleteUser(userId);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        default:
          console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          break;
      }
      break;

    case 'POSTS':
      switch (method) {
        case 'GET':
          if (values.all) {
            await getAllPosts();
          } else if (values.id) {
            const postId = values.id;
            await getPostById(postId);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        case 'POST':
          const newPost = await getNewPostData();
          await createPost(newPost);
          break;

        case 'PATCH':
          if (values.id) {
            const postId = values.id;
            const updatedFields = await getUpdatedPostData();
            await updatePost(postId, updatedFields);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        case 'DELETE':
          if (values.id) {
            const postId = values.id;
            await deletePost(postId);
          } else {
            console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          }
          break;

        default:
          console.log('Invalid method. Please check your input or (api-cli.js --help.)');
          break;
      }
      break;

    default:
      console.log('Invalid method. Please check your input or (api-cli.js --help.)');
      break;
  }
} else {
  // Prompt the user for the resource choice
  handleResourceOneByOne();
}
