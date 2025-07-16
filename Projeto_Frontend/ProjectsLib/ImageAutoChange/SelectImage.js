
import array from './imagesArray.js';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let i = 1;
let e = 6;

async function SelectImage(){
    console.log(array[i]);
    let image = document.getElementById('FrontendIMG');
    let image2 = document.getElementById('BackendIMG');
    while(i < array.length){
      
      image.setAttribute('src', array[i].ImageURL);
      image2.setAttribute('src', array[e].ImageURL);
  
      await delay(3000);
  
      i++;
      e++;

      if (i>= 6){
        i = 0;
      }
      if (e >= 11){
        e = 6;
      }
    }
}
SelectImage();