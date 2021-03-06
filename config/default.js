const {
  MEDIUM_CLIENT_ID,
  MEDIUM_CLIENT_SECRET,
  MEDIUM_ACCESS_TOKEN,
} = process.env;

module.exports = {
  medium: {
    clientId: MEDIUM_CLIENT_ID,
    clientSecret: MEDIUM_CLIENT_SECRET,
    accessToken: MEDIUM_ACCESS_TOKEN,
  }
};
