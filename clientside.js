const username = 'aper';
const reqOpts ={
  methdod : 'Post',
  headers: new Header ({
    'Content - type' , 'application/json'
  })
body: JSON.stringify({username, password})
};
fetch('/login', )
