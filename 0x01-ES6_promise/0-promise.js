function getResponseFromAPI() {
  return new Promise ((resolve, reject) => {
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}