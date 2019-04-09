//blogger API key
const key = "AIzaSyCgwo2fNF4rRz1YLLXG4EaRSSjSkN5Qv-E";
const blogId = "3190947245348881579"
const bloggerPathByUrl = "https://www.googleapis.com/blogger/v3/blogs/byurl";
const bloggerPathById = "https://www.googleapis.com/blogger/v3/blogs";

// Global Service
const Get = (path,) => {
  const promise = new Promise((resolve, reject) => {
    fetch(path,{
      method : "GET",
      headers : {
        'Accept': 'application/json',
        "Content-Type" : "application/json"
      }
    })
    .then((response) => {
      if(response.ok){
        resolve(response.json())
      } else {
        reject(new Error('error'))
      }
    }, (error) =>{
      reject(new Error(error.message));
    })
  })
  return promise;
}

const getBlog = (data) => {
  let blogUrl = "https://www.codepelajar.com";
  let path = `${bloggerPathByUrl}?key=${key}&url=${blogUrl}`;
  return Get(path)
}

const getBlogPost = () => {
  let path = `${bloggerPathById}/${blogId}/posts?key=${key}&maxResults=7`;
  return Get(path);
}
const getBlogArticleViaSearch = (keyword) => {
  let path = `${bloggerPathById}/${blogId}/posts/search?q=${keyword}&key=${key}`;
  return Get(path);
}

const API = {
  getBlog,
  getBlogPost,
  getBlogArticleViaSearch
}

export default API;