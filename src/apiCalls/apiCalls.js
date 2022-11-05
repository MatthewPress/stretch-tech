
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

const postData = async (path, idNum, positivity) => {
  try {
    const response = await fetch(`https://salty-sea-12550.herokuapp.com/api/v1${path}`, {
      method: 'POST',
      body: JSON.stringify(positivity),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(!response.ok) {
      throw new Error();
    } else {
      const data = await response.json();
      return data;
    }
  } catch(error) {
    return error;
  }
}

export {
  getData,
  postData
};