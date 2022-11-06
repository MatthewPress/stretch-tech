
const getData = async (path) => {
  try {
    const response = await fetch(`https://salty-sea-12550.herokuapp.com/api/v1${path}`);
    if(!response.ok) {
      throw new Error();
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
}

const postData = (path, idNum, positivity) => {
  return fetch(`https://salty-sea-12550.herokuapp.com/api/v1${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(positivity)
  })
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    console.log(resp)
    return resp.json()
  })
}

export {
  getData,
  postData
};