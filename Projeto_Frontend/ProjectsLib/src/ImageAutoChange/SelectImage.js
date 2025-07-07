import imagesArray from './imagesArray';
import array from './imagesArray';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let i = 1;

async function SelectImage(img){

    let image = document.getElementById('FrontendIMG');

    image.src = imagesArray[i];

    await delay(2000);

    i++;

    SelectImage(imagesArray[i]);
}

SelectImage(imagesArray[i]);