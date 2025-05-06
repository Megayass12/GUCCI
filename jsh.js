console.log("Carousel Loaded");

const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const progressBar = document.querySelector('.progress-bar');
const descriptions = document.querySelectorAll('.carousel-description');

let currentIndex = 0;
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function updateProgressBar(index) {
    const progress = ((index + 1) / totalItems) * 100;
    progressBar.style.width = progress + '%';

    descriptions.forEach((desc, i) => {
        desc.style.display = (i === index) ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
    updateProgressBar(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
    updateProgressBar(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
    updateProgressBar(currentIndex);
}, 5000);

showItem(currentIndex);
updateProgressBar(currentIndex);

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const brandName = document.getElementById("brandName");
  const searchIcon = document.getElementById("searchIcon"); 
  if (searchIcon) {
      searchIcon.src = "lupdark.png";
  } else {
      console.error("searchIcon tidak ditemukan di HTML");
  }

  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      brandName?.classList.add("scrolled");

      if (searchIcon) {
          searchIcon.src = "lupdark.png"; 
      }
  } else {
      navbar.classList.remove("scrolled");
      brandName?.classList.remove("scrolled");

      if (searchIcon) {
          searchIcon.src = "lup.png"; 
      }
  }
});


const explore = document.getElementById('explore');
if (explore) {
    explore.addEventListener('click', function() {
        window.open('explore.html', '_blank');
    });
}


const video = document.getElementById('youtube-video');
const videoSection = document.getElementById('video-section');
const videoURL = "https://www.youtube.com/embed/YmVQdYlvCv0?autoplay=1&mute=1";

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

window.addEventListener('scroll', function () {
    if (video && videoSection) {
        if (isInViewport(videoSection)) {
            if (video.src !== videoURL) {
                video.src = videoURL;
            }
        } else {
            video.src = "";
        }
    }
});

function subscribe() {
    alert("Thank you for subscribing!");
}