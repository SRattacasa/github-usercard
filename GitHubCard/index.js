/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


// const axios = require('axios')
const gitURL = "https://api.github.com/users/srattacasa";

axios.get(gitURL)
  .then((response) => {
    console.log('result data is', response.data.login)
    const showIt = document.querySelector('.cards');
    showIt.appendChild(stepThree(response));
    // const runIt = stepThree(response);
    // stepThree(response);
    // console.log('functoin with response =', runIt)
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const stepThree = (getReq) => {
  console.log(getReq.data, 'THISIS THE PASSED IND DATA');
  let card = document.createElement('div');
  card.classList.add('card');

  const userImage = document.createElement('img');
  let sourceImg = getReq.data.avatar_url;
  userImage.src = sourceImg;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  

  const userHeader = document.createElement('h3');
  userHeader.classList.add('name');
  

  // for (let i = 0; i < 9; i++) { 
  //   x = document.createElement('p');
  // }

  const para1 = document.createElement('p');
  para1.classList.add('username')
  para1.innerText = getReq.data.login;
  
  const para2 = document.createElement('p');
  para2.innerText = `Location:  ${getReq.data.location}`

  const para3 = document.createElement('p');
  para3.innerText = 'Profile: ';
  const links = document.createElement('a');
  links.innerText = getReq.data.html_url;
  para3.appendChild(links);

  const para4 = document.createElement('p');
  para4.innerText = `Followers: ${getReq.data.followers}`;

  const para5 = document.createElement('p');
  para5.innerText = `Following: ${getReq.data.following}`;

  const para6 = document.createElement('p');
  para6.innerText = `Bio: ${getReq.data.bio}`;
  
 
  card.appendChild(userImage);
  card.appendChild(cardInfo);

  //adding h3 to child of div card-info
  cardInfo.appendChild(userHeader);
  cardInfo.appendChild(para1);
  cardInfo.appendChild(para2);
  cardInfo.appendChild(para3);
  cardInfo.appendChild(para4);
  cardInfo.appendChild(para5);
  cardInfo.appendChild(para6);
  return card;
};

