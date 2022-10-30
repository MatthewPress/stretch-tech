// remove returnData when backend is available
const returnData = (path) => {
  return {ok: true, data: path};
}

const getData = async (path) => {
  // replace returnData(path) with fetch(`baseURL${path}`)
  try {
    const response = await returnData(path);
    if(!response.ok) {
      throw new Error();
    } else {
      const data = await response.data
      // const data = await response.json();
      console.log({data});
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  getData
};