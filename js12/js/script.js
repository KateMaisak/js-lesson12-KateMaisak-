//1

async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
    .catch(() => console.log("Error: 404"))


//2

const url = "https://jsonplaceholder.typicode.com/posts/3";

async function getDataFromBack() {
     try {
         const response = await fetch(url)
         const data = await response.json()
         console.log(data)
     } catch(err) {
         console.error(err)
     }
}

getDataFromBack();