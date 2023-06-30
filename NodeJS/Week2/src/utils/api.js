import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/users');
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const updateUser = async (userId, updatedFields) => {
  try {
    const response = await axios.patch(`http://127.0.0.1:8000/users/${userId}`, updatedFields);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/users/${userId}`);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/posts');
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/posts/${postId}`);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const updatePost = async (postId, updatedFields) => {
  try {
    const response = await axios.patch(`http://127.0.0.1:8000/posts/${postId}`, updatedFields);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/posts/${postId}`);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/users', user);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/posts', post);
    console.log('Response:', response.data);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};
