
const getData = async (path) => {
  try {
    const response = await fetch(`http://localhost:3003/api/v1${path}`);
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

const postData = async (path, idNum, userString) => {
  try {
    const response = await fetch(`http://localhost:3003/api/v1${path}`, {
      method: 'POST',
      body: JSON.stringify(userString),
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