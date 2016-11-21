const username = 'aper';
const reqOpts ={
  methdod : 'Post',
  headers: new Header ({
    'Content - type' , 'application/json'
  })
body: JSON.stringify({username, password})
};
fetch('/login', reqOpts)
.then(resp => resp.text())
.then(console.log);
.catch(console.error);
