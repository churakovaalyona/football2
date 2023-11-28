document.addEventListener('DOMContentLoaded', function () {
    // Array of image URLs
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
    ];

    // Function to get a random index from the array
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // Function to change the image source
    function changeImage() {
        const randomIndex = getRandomIndex(images);
        const randomImage = images[randomIndex];
        document.getElementById('random-image').src = randomImage;
    }

    // Change the image every 5 seconds
    setInterval(changeImage, 5000);

    // Initial image change
    changeImage();
});
