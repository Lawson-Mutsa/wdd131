const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Monticello Utah",
        location: "Monticello, Utah, United States",
        dedicated: "1997, November, 17",
        area:  11225,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/monticello-utah-temple/monticello-utah-temple-53338-thumb.jpg"
       
      },
      {
        templeName: "Apia Samoa",
        location: "Pesega, Apia",
        dedicated: "1981, February, 19",
        area:  18691,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x450/apia-samoa-temple-lds-495972-wallpaper.jpg"
        
      },
      {
        
        templeName: "Atlanta Georgia",
        location: "Sandy Springs, Georgia, United States",
        dedicated: "1981, March, 7",
        area:  34500,
        imageUrl:
       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-temple-lds-811746-wallpaper.jpg"
       
      },
     
      {
        
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2021, September, 11",
        area:  6081,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573-main.jpg"
       
      },
      {
        
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area:  15000,
        imageUrl:
        " https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
        
       
      },
      {
        
        templeName: "St George Utah",
        location: "St George, Utah, United States",
        dedicated: "1871, November, 9",
        area:  143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
      
       
      },
    
  ];
// Display Temples
document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples); // Display all temples initially
    setupNavigation();
});

function displayTemples(templeList) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    templeList.forEach(temple => {
        container.innerHTML += `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}">
                <p><strong>${temple.templeName}</strong></p>
                <div class="temple-info">
                    <p class="temple-location">${temple.location}</p>
                    <p class="temple-dedicated">Dedicated: ${temple.dedicated}</p>
                    <p class="temple-area">Area: ${temple.area} sq ft</p>
                </div>
            </figure>
        `;
    });
}

function setupNavigation() {
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.textContent;

            let filteredTemples;

            switch (filter) {
                case "Old":
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case "New":
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case "Large":
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case "Small":
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                case "Home":
                default:
                    filteredTemples = temples; // Show all temples
                    break;
            }

            displayTemples(filteredTemples);
        });
    });
}

// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.querySelector(".hamburger").classList.toggle("active");
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = lastModifiedDate;