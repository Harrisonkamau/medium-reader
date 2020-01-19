const config = require('config');
const request = require('request');

const MEDIUM_USER_URL = 'https://api.medium.com/v1/me';
const MEDIUM_POSTS_BASE_URL = 'https://api.medium.com/v1/users';
const ACCESS_TOKEN = config.get('medium.accessToken');

async function getMediumUser() {
  const options = {
    method: 'GET',
    url: MEDIUM_USER_URL,
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
      'content-type': 'application/json',
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      }

      const { statusCode, statusMessage } = response;
      console.log(`[GET MEDIUM USER] RESPONSE STATUS CODE: ${statusCode}`);
      console.log(`[GET MEDIUM USER] RESPONSE STATUS MESSAGE: '${statusMessage}'`);
      const { data } = JSON.parse(body);
      console.log('[GET MEDIUM USER] RETRIEVED USER DETAILS >>> \n');
      console.log(data);
      resolve(data);
    });
  })
}

async function getPosts() {
  try {
    const user = await getMediumUser();
    if ( user) {
      const { id: userId, name: userName } = user;
      const options = {
        method: 'GET',
        url: `${MEDIUM_POSTS_BASE_URL}/${userId}/publications`,
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      };

      return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
          if (error) {
            reject(error);
          }

          const { statusCode, statusMessage } = response;
          console.log(`[GET MEDIUM POSTS] RESPONSE STATUS CODE: ${statusCode}`);
          console.log(`[GET MEDIUM POSTS] RESPONSE STATUS MESSAGE: '${statusMessage}'`);
          const { data: articles } = JSON.parse(body);
          console.log(`[GET MEDIUM POSTS] FOUND ${articles.length} posts for User: "${userName}"`)
          resolve(articles);
        });
      })
    }
  } catch (error) {
    console.error('[GET MEDIUM USER] An error occurred while attempting to retrieve user publications from Medium');
    console.error(error);
  }
}

module.exports = {
  getMediumUser,
  getPosts,
};
