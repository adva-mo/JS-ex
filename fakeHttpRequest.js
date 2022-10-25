const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "moshe" },
          { id: 2, username: "david" },
        ],
        "/about": "this is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("status code: ", res.status);
    console.log("data", res.data);
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
