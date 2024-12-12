function toggleMenu() {
    document.querySelector('.menu-wrapper').classList.toggle('active');
}

//Модальне віко
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

// Генерація скриптом

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

