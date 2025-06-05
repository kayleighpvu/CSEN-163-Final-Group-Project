
document.addEventListener('DOMContentLoaded', function () {
    const tops = [
        { name: "gathered pink", img: "images/1.png" },
        { name: "crew orange", img: "images/2.png" },
        { name: "black white pattern", img: "images/3.jpg" },
        { name: "beige vneck loose", img: "images/4.jpg" },
        { name: "Blue top", img: "images/5.png" },
        { name: "Black short skirt", img: "images/6.jpg" },
        { name: "Pink top", img: "images/7.png" },
        { name: "White top", img: "images/8.png" },
	{ name: "shortsleeve white top", img: "images/9.png" },
        { name: "long grey coat", img: "images/10.png" }
    ];

    const savedTops = new Set();
    const grid = document.getElementById("topsGrid");

    tops.forEach((top, index) => {
        const card = document.createElement("div");
        card.className = "store-card";

        if (index === 0) {
            card.innerHTML = `
                <img src="images/not-filled-star.png" class="star-icon toggle-star" onclick="toggleStar(this, ${index})" />
                <a href="ar.html" class="store-link">
                    <img src="${top.img}" class="store-img" alt="${top.name}" />
                    <p class="store-name">${top.name}</p>
                </a>
            `;
        } else {
            card.innerHTML = `
                <img src="images/not-filled-star.png" class="star-icon toggle-star" onclick="toggleStar(this, ${index})" />
                <div class="store-link">
                    <img src="${top.img}" class="store-img" alt="${top.name}" />
                    <p class="store-name">${top.name}</p>
                </div>
            `;
        }

        grid.appendChild(card);
    });

    window.toggleStar = function (elem, index) {
        const name = tops[index].name;
        const isSaved = savedTops.has(name);
        if (isSaved) {
            savedTops.delete(name);
            elem.src = "images/not-filled-star.png";
        } else {
            savedTops.add(name);
            elem.src = "images/filled-star.png";
        }
    };

    window.showSaved = function () {
        const savedList = document.getElementById("savedList");
        const savedItems = document.getElementById("savedItems");
        savedItems.innerHTML = "";

        savedTops.forEach(name => {
            const p = document.createElement("p");
            p.className = "saved-item";
            p.textContent = name;
            savedItems.appendChild(p);
        });

        savedList.style.display = "block";
    };
});
