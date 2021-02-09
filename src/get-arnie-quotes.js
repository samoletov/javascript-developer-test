const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const responses = await Promise.all(urls.map((url) => httpGet(url)));
  return responses.map((response) =>
    response.status === 200
      ? {
          'Arnie Quote': JSON.parse(response.body).message,
        }
      : { FAILURE: 'Your request has been terminated' }
  );
};

module.exports = {
  getArnieQuotes,
};
