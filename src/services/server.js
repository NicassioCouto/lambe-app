import axios from 'axios';

const base_url = 'https://orbona.appspot.com/';

async function getData(entity) {
  try {
    const res = await (await axios.get(`${base_url}/${entity}`));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function createData(entity,body_data) {
  const url = `${base_url}${entity}`;  
  try {
    const res = await (await axios.post(url, body_data));
    return res.data;
  } catch (err) {
    console.log(`${base_url}${entity}`);
    console.log(err.message);
  }
}

export async function updateData(entity,node_id,body_data) {
  try {
    const res = await (await axios.put(`${base_url}/${entity}/${node_id}`, body_data));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteData(entity,node_id) {
  try {
    const res = await (await axios.delete(`${base_url}/${entity}/${node_id}`));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getData;