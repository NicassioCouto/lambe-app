import axios from 'axios';

const base_url = 'https://orbona.appspot.com/';

async function getData(node_id) {
  try {
    const res = await (await axios.get(`${base_url}/${node_id}`));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getData;