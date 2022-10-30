// remove returnData when backend is available
const returnData = (path) => {
  return {ok: true, data: path};
}

const getData = async (path) => {
  try {
    // const response = await fetch(path);
    const response = await returnData(path);
    if(!response.ok) {
      throw new Error();
    } else {
      // const data = await response.json();
      const data = await response.data;
      return data;
    }
  } catch (error) {
    return error;
  }
}

export {
  getData
};