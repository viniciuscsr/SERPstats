const axios = require('axios');

//@description fetch Google results
//@route GET /api/search/
//@PUBLIC

const googleSearch = async (req, res) => {
  const { keyword } = req.query;

  const url = `https://app.zenserp.com/api/v2/search?apikey=${process.env.ZENSERP_KEY}&q=${keyword}`;

  let response;
  try {
    response = await axios.get(url);
  } catch (error) {
    console.error(error);
  }
  res.json({ data: response.data });
};

module.exports = { googleSearch };
