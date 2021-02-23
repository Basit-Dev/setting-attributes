const img = document.getElementsByTagName("IMG");
const ref = document.getElementsByTagName('A');
const hEl = document.getElementsByTagName('H1');
const siteEl = document.querySelector('.sites');
const mainEl = document.getElementById('main');

mainEl.style.textAlign = 'center';
// hEl[0].style.textAlign = 'center';
hEl[0].setAttribute('style', 'color: blue'); // does not overwrite other css values like in line 8, to overcome this you need to place line 8 after this line.
hEl[0].style.textAlign = 'center'; // line 8
document.body.setAttribute('style', 'background-color: 	#F0F8FF');

  function setPaths() {
    for (let i = 0; i < ref.length; i++) {
        ref[i].href = 'https://www.google.com';
        img[i].src = `images/image_${i+1}.jpg`;
        img[i].alt = `image_${i+1}`;
    }
  }
  setPaths();