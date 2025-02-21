// Sample bonuses data
const bonuses = [
    {
        casino: "Majubaji Casino",
        bonus: "💰 200% Welcome Bonus + 50 Free Spins",
        image: "https://via.placeholder.com/250x120?text=Majubaji",
        link: "#"
    },
    {
        casino: "55BET Casino",
        bonus: "🎁 100% Match Bonus up to $500",
        image: "https://via.placeholder.com/250x120?text=55BET",
        link: "#"
    },
    {
        casino: "BitStarz Casino",
        bonus: "⚡ 180 Free Spins + 100% up to $100",
        image: "https://via.placeholder.com/250x120?text=BitStarz",
        link: "#"
    },
    {
        casino: "Winz.io Casino",
        bonus: "🎉 No Wagering Bonus + Free Spins",
        image: "https://via.placeholder.com/250x120?text=Winz.io",
        link: "#"
    }
];

// Function to render bonuses
function renderBonuses() {
    const bonusList = document.getElementById('bonusList');

    bonuses.forEach(bonus => {
        const bonusCard = document.createElement('div');
        bonusCard.classList.add('bonus-card');

        bonusCard.innerHTML = `
            <img src="${bonus.image}" alt="${bonus.casino}">
            <h3>${bonus.casino}</h3>
            <p>${bonus.bonus}</p>
            <a href="${bonus.link}" class="claim-btn">Claim Bonus</a>
        `;

        bonusList.appendChild(bonusCard);
    });
}

// Initialize bonuses on page load
document.addEventListener('DOMContentLoaded', renderBonuses);
// Exclusive Bonuses Data
const exclusiveBonuses = [
    { name: "Betrebels Casino", bonus: "150% up to €750 + 50 Free Spins", type: "Welcome Bonus", img: "https://www.askgamblers.com/uploads/casino_logos_overview/casinoreview_logo/f1/4b/3c/1e2455fbbd5c3fc6198038248217d26b32/betrebels-casino-logo.jpg", link: "#" },
    { name: "Playbet.io Casino", bonus: "300% up to 200 USDT + 200 Free Spins", type: "Welcome Bonus", img: "https://www.askgamblers.com/uploads/casino_logos_overview/casinoreview_logo/25/38/55/0c5cc836cf5390d696d684b0d82a524613/playbet-casino-logo.png", link: "#" },
    { name: "PrimeBetz Casino", bonus: "55 Free Spins No Deposit Bonus", type: "No Deposit Bonus", img: "https://www.askgamblers.com/uploads/casino_logos_overview/casinoreview_logo/b6/5d/b2/96373f58da74a741eb04adb2e1c963fbe6/primebetz-casino-logo.png", link: "#", restricted: true },
    { name: "Trips Casino", bonus: "150% up to €500 + 50 Free Spins", type: "Welcome Bonus", img: "https://www.askgamblers.com/build/site/kitchen-sink/build/media/img/cover-bonus.d2d1f9442f050b5c57be.svg", link: "#", restricted: true },
];

// High Roller Bonuses Data
const highRollerBonuses = [
    { name: "Casino Royale", bonus: "500% up to €5000", type: "High Roller", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Luxor Casino", bonus: "400% up to €4000", type: "High Roller", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Vegas Elite", bonus: "350% up to €3500", type: "High Roller", img: "https://via.placeholder.com/100", link: "#" },
];

// Render Bonuses
function renderBonuses(bonuses, containerId) {
    const container = document.getElementById(containerId);

    bonuses.forEach(bonus => {
        const card = document.createElement('div');
        card.classList.add('bonus-card');

        card.innerHTML = `
            <img src="${bonus.img}" alt="${bonus.name}">
            <p class="bonus-type">${bonus.type}</p>
            <h3>${bonus.name}</h3>
            <p>${bonus.bonus}</p>
            ${bonus.restricted ? `<button class="bonus-btn restricted">Restricted</button>` : `<a href="${bonus.link}" class="bonus-btn">Get</a>`}
        `;

        container.appendChild(card);
    });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderBonuses(exclusiveBonuses, 'exclusiveBonuses');
    renderBonuses(highRollerBonuses, 'highRollerBonuses');
});
