// Робота з бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    navbar.classList.toggle('active');
});

// Робота з модальним вікном
const modal = document.getElementById("contactModal");
const contactButton = document.getElementById("contactButton");
const closeBtn = document.querySelector(".modal .close");

contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Ініціалізація контенту для Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.getElementById('swiper-wrapper');

    // Завантаження контенту з JSON-файлу
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(projectData => {
            // Створення слайдів з отриманого контенту
            projectData.forEach(project => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide', 'project-card-swiper');

                const projectImage = document.createElement('div');
                projectImage.classList.add('project-image-swiper');
                projectImage.style.backgroundImage = `url('${project.image}')`;

                const projectText = document.createElement('span');
                projectText.classList.add('project-text-swiper');
                projectText.innerHTML = project.text;

                projectImage.appendChild(projectText);
                slide.appendChild(projectImage);
                swiperWrapper.appendChild(slide);
            });

            // Ініціалізація Swiper після додавання слайдів
            new Swiper('.swiper', {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                loopFillGroupWithBlank: true,
                centeredSlides: false,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                },
            });
        })
        .catch(error => {
            console.error('Помилка завантаження JSON:', error);
        });
});
