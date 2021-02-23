// Assign variables
const imgTags = document.getElementsByTagName("IMG");
const aTags = document.getElementsByTagName('A');
const h1El = document.getElementsByTagName('H1');
const siteEl = document.querySelector('.sites');
const mainEl = document.getElementById('main');

// Array with a list of website addresses
const randomSites = ['https://www.google.com', 'https://www.w3schools.com', 'https://developer.mozilla.org', 'https://www.github.com',  'https://www.freecodecamp.org']

// Get random number with max number being the length of the randomSites array
const randomNumber = Math.trunc(Math.random() * randomSites.length);
console.log(randomNumber);
// Style the body
document.body.setAttribute('style', 'background-color: 	#F0F8FF');

// Align all images in the center of the page
mainEl.style.textAlign = 'center';
// H4 styling
h1El[0].setAttribute('style', 'text-align: center; color: blue');

// Function to display images and alt tags
  function setPaths() {
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].href = 'https://www.google.com';
        imgTags[i].src = `images/image_${i+1}.jpg`;
        imgTags[i].alt = `image_${i+1}`;
    }
  }
  setPaths();

  // Randomly set the `href` for site 1 from randomSites array 
  aTags[0].href = randomSites[randomNumber];
 