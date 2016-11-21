const username = "Hades";
const reqOpts ={
  method : 'post',
  headers: new Headers({
    'Content-type' : 'application/json'
  }),
body: JSON.stringify({username})
};
fetch('/login', reqOpts)
.then(resp => resp.text())
.then((data)=>{document.getElementsByTagName("body")[0].innerHTML=data})
.catch(console.error);
