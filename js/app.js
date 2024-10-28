let imageContainer = ['img/one.jpg', 'img/two.jpg', 
        'img/three.jpg', 'img/four.jpg', 'img/five.jpg',
        'img/six.jpg', 'img/seven.jpg', 'img/eight.jpg',
         'img/nine.jpg', 'img/ten.jpg']

//Hide button maisyti
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.btn__maisyti').style.display = 'none';
})

// Promise/time out/button maisyti disabled on time out
const getImages = (imageContainer) => {
    const buttonDisable = document.getElementById('btn');
    buttonDisable.setAttribute('disabled', 'true')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(imageContainer)
            buttonDisable.removeAttribute('disabled')
        } , 600)
        
    })
}
// async/load array/dom create elements
const displayImages = async (imageContainer) => {
    document.querySelector('ul').innerHTML = '';

    const images = await getImages(imageContainer);
    images.forEach(image => {
        const imageList = document.createElement('li')
        const imageCon = document.createElement('img')
        imageCon.srcset = image;

        imageList.appendChild(imageCon);
        document.querySelector('ul').appendChild(imageList);
    });
}

//Display none button rodyti/display block button maisyti
document.querySelector('.btn__rodyti').addEventListener('click', () => {
    displayImages(imageContainer)
    document.querySelector('.btn__maisyti').style.display = 'block';
    document.querySelector('.btn__rodyti').style.display = 'none';
})


//Shuffle array random
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
};

//By click shuffle array and display new dom
document.querySelector('.btn__maisyti').addEventListener('click', ()=> {
    shuffleArray(imageContainer);
    displayImages(imageContainer);
})

// on double click double size the image
document.querySelector('ul').addEventListener('dblclick', (event) => {
        event.target.classList.toggle('sizing--double');
});