import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'node:process';

/**
 * Ask an asynchronous question to the user and get the answer from stdin
 *
 * @param {string} query
 * @returns {Promise.<string>}
 */
export const question = async (query) => {
  const readline = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await readline.question(query);
  readline.close();

  return answer;
};

export const getNewPostData = async () => {
  console.log('You choose to make a POST request to /posts');
  const postText = await question('Enter Post Text: ');
  const postDate = await question('Enter Post Date: ');
  const likes = await question('Enter Likes: ');
  const comments = await question('Enter Comments: ');
  const hashtags = await question('Enter Hashtags: ');
  const location = await question('Enter Location: ');
  const postImage = await question('Enter Post Image URL: ');

  const newPost = {
    post_text: postText,
    post_date: postDate,
    likes: likes,
    comments: comments,
    hashtags: hashtags,
    location: location,
    post_image: postImage,
  };

  return newPost;
};

export const getNewUserData = async () => {
  console.log('You choose to make a POST request to /users');
  const id = await question('Enter User ID: ');
  const firstName = await question('Enter User First Name: ');
  const lastName = await question('Enter User Last Name: ');
  const email = await question('Enter User Email: ');
  const gender = await question('Enter User Gender: ');

  const newUser = {
    id: id,
    first_name: firstName,
    last_name: lastName,
    email: email,
    gender: gender,
  };

  return newUser;
};

export const getUpdatedUserData = async () => {
  const updatedFields = {};

  const firstName = await question('Update User First Name (Leave blank to skip): ');
  if (firstName.trim() !== '') {
    updatedFields.first_name = firstName;
  }
  const lastName = await question('Update User Last Name (Leave blank to skip): ');
  if (lastName.trim() !== '') {
    updatedFields.last_name = lastName;
  }
  const email = await question('Update User Email (Leave blank to skip): ');
  if (email.trim() !== '') {
    updatedFields.email = email;
  }
  const gender = await question('Update User Gender (Leave blank to skip): ');
  if (gender.trim() !== '') {
    updatedFields.gender = gender;
  }

  return updatedFields;
};

export const getUpdatedPostData = async () => {
  const updatedFields = {};

  const postText = await question('Update Post Text (Leave blank to skip): ');
  if (postText.trim() !== '') {
    updatedFields.post_text = postText;
  }
  const postDate = await question('Update Post Date (Leave blank to skip): ');
  if (postDate.trim() !== '') {
    updatedFields.post_date = postDate;
  }
  const likes = await question('Update Likes (Leave blank to skip): ');
  if (likes.trim() !== '') {
    updatedFields.likes = likes;
  }
  const comments = await question('Update Comments (Leave blank to skip): ');
  if (comments.trim() !== '') {
    updatedFields.comments = comments;
  }
  const hashtags = await question('Update Hashtags (Leave blank to skip): ');
  if (hashtags.trim() !== '') {
    updatedFields.hashtags = hashtags;
  }
  const location = await question('Update Location (Leave blank to skip): ');
  if (location.trim() !== '') {
    updatedFields.location = location;
  }

  return updatedFields;
};

export const showHelp = () => {
  console.log('CLI Usage:');
  console.log('node src/api-cli.js --resource [users|posts] --method [DELETE|GET|PATCH|POST] [--all|--getById|--id]');
  console.log('');
  console.log('Options:');
  console.log('  --resource    Specify the resource to work with. Choose either "users" or "posts".');
  console.log('  --method      Specify the HTTP method to use. Choose either "DELETE", "GET", "PATCH", or "POST".');
  console.log('  --all         Use with "GET" method to retrieve all items.');
  console.log('  --getById     Use with "GET" method to retrieve an item by its ID.');
  console.log('  --id          Use with "PATCH" or "DELETE" method to specify the ID of the item to update or delete.');
  console.log('');
  console.log('Examples:');
  console.log('  node src/api-cli.js --resource users --method GET --all');
  console.log('  node src/api-cli.js --resource users --method GET --id 123');
  console.log('  node src/api-cli.js --resource users --method PATCH --id 123');
  console.log('  node src/api-cli.js --resource users --method DELETE --id 123');
  console.log('  node src/api-cli.js --resource posts --method GET --all');
  console.log('  node src/api-cli.js --resource posts --method GET --id 123');
  console.log('  node src/api-cli.js --resource posts --method PATCH --id 123');
  console.log('  node src/api-cli.js --resource posts --method DELETE --id 123');
};
