const axios = require('axios');
const search = require('../searchData');

//@description fetch Google results
//@route GET /api/search/
//@PUBLIC

const googleSearch = async (req, res) => {
  // const { keyword } = req.query;

  // const url = `https://app.zenserp.com/api/v2/search?apikey=${process.env.ZENSERP_KEY}&q=${keyword}`;

  // let response;
  // try {
  //   response = await axios.get(url);
  // } catch (error) {
  //   console.error(error);
  // }

  let words = JSON.stringify(search);
  words = words.split('"');

  let index = {};

  for (let i = 0; i < words.length; i++) {
    if (index[words[i]]) {
      index[words[i]]++;
    } else {
      index[words[i]] = 1;
    }
  }

  console.log(req.query.keyword);

  res.json({ data: index });
};

module.exports = { googleSearch };
