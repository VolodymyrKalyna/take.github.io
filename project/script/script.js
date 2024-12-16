const swiperWrapper = document.querySelector('.swiper-wrapper');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(review => {
                const reviewSlide = document.createElement('div');
                reviewSlide.className = 'review swiper-slide';

                reviewSlide.innerHTML = `
                    <img src="${review.mainImage}" alt="Main Image">
                    <p>${review.reviewText}</p>
                    <div>
                        <img src="${review.profileImage}" alt="Profile Image">
                        <h3>${review.name}<span>${review.position}</span></h3>
                    </div>
                `;

                swiperWrapper.appendChild(reviewSlide);
            });

            const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            speed: 600,
        });
        })
        .catch(error => console.error('Помилка завантаження JSON:', error));


function toggleMenu() {
    document.querySelector('.menu-wrapper').classList.toggle('active');
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};


const container = document.getElementById("pricing-cards-container");

if(container){
    
fetch("pricingPlans.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON file");
        }
        return response.json();
    })
    .then(pricingPlans => {
        pricingPlans.forEach(plan => {
            const card = document.createElement("div");
            card.classList.add("pricing-card");

            card.innerHTML = `
                <h3>${plan.title}</h3>
                <p class="price">$${plan.price}<span>/міс</span></p>
                <ul>
                    ${plan.description.map(item => `<li><i class="fa-solid fa-check fa-sm" style="color: #83CD20;"></i> ${item}</li>`).join("")}
                </ul>
                <a href="#" class="read-more">Вибрати <i class="fa-solid fa-arrow-right" style="color: #034833;"></i></a>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading pricing plans:", error);
    })};


const cards = document.querySelectorAll('.count-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('show-info');
            }
        });

        card.classList.add('show-info');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('show-info');
    });
});

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 1) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });




