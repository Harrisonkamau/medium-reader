const config = require('config');
const requestPromise = require('request-promise');

const MEDIUM_USER_URL = 'https://api.medium.com/v1/me';
const MEDIUM_POSTS_BASE_URL = 'https://api.medium.com/v1/users';
const ACCESS_TOKEN = config.get('medium.accessToken');

const baseRequestOptions = {
  method: 'GET',
  resolveWithFullResponse: true,
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
      'content-type': 'application/json',
    },
};


async function getMediumUser() {
  const options = {
    url: MEDIUM_USER_URL,
    ...baseRequestOptions,
  };

  try {
    const response = await requestPromise(options);
    const { statusCode, statusMessage, body } = response;

    console.log(`[GET MEDIUM USER] RESPONSE STATUS CODE: ${statusCode}`);
    console.log(`[GET MEDIUM USER] RESPONSE STATUS MESSAGE: '${statusMessage}'`);

    if (body) {
      const parsedBody = JSON.parse(body);
      const { data } = parsedBody;
      console.log('[GET MEDIUM USER] RETRIEVED USER DETAILS >>> \n');
      console.log(data);
      return data;
    }
  } catch(error) {
    console.log('Could not retrieve Medium user');
    console.error(error);
  }
}

async function getPosts() {
  try {
    const user = await getMediumUser();
    if ( user) {
      const { id: userId, name: userName } = user;
      const options = {
        url: `${MEDIUM_POSTS_BASE_URL}/${userId}/publications`,
        ...baseRequestOptions
      };

      const response = await requestPromise(options);
      const { statusCode, statusMessage, body } = response;
      console.log(`[GET MEDIUM POSTS] RESPONSE STATUS CODE: ${statusCode}`);
      console.log(`[GET MEDIUM POSTS] RESPONSE STATUS MESSAGE: '${statusMessage}'`);

      if (body) {
        const { data: articles } = JSON.parse(body);
        console.log(`[GET MEDIUM POSTS] FOUND ${articles.length} posts for User: "${userName}"`);
        return articles;
      }
    }
  } catch (error) {
    console.log('[GET MEDIUM USER] An error occurred while attempting to retrieve user publications from Medium');
    console.error(error);
  }
}

module.exports = {
  getPosts,
};
