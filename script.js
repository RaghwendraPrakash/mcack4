// Check Point one Script 

// D. Auto-changing country names
const placeNames = ["India", "Russia", "France", "Germany", "Switzerland"];
let currentIndex = 0;

setInterval(() => {
    document.getElementById("place-name").innerText = placeNames[currentIndex];
    currentIndex = (currentIndex + 1) % placeNames.length;
}, 2000);  // Increased the interval to 2 seconds for better readability





// Checkpoint two script 

window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd; 
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate; 
}

function bookNow() {
    
    let destination = document.getElementById('destination').value;
    let people = document.getElementById('people').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description').value.length;
     
    if (destination && people && startDate && endDate) {
        if(description<50 || description>500){
            alert('Description must be of length 50-500');
        }
        else{
            alert('Booking successful!'); 
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        alert('Please fill in all fields.');
    }    
}

const packages = [
    {
        image: "./Images/taj%20mahal.jpg",
        place: "Taj Mahal",
        description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. The Taj Mahal was designated as a UNESCO World Heritage Site in 1983.",
        rate: '100 $',
        rating: 5
    },    
    
    {
        image: "./Images/red fort.jpg",
        place: "Red Fort",
        description: "The Red Fort is a historic fort in the Old Delhi neighbourhood of Delhi, India, that served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1639,",
        rate: "200 $",
        rating: 4
    },
    {
        image: "./Images/india%20gate.jpg",
        place: "India Gate",
        description: "The India Gate is a war memorial formally called Rajpath. It stands as a memorial to 74,187 soldiers of the Indian Army who died between 1914 and 1921 in the First World War.",
        rate: "300 $",
        rating: 5
    },
    {
        image: "./Images/harmandir sahib.jpg",
        place: "Harmindir Sahib",
        description: "Soak in the mystic hues of Amritsar, a famous pilgrimage spot! You will love exploring sightseeing attractions and attending various festivals. The local cuisines at Amritsar are worth trying out too.",
        rate: "400 $",
        rating: 4
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
        place: "Lakshadweep",
        description: "Lakshadweep is home to serene beaches. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
        rate: "500 $",
        rating: 2
    },
    {
        image: "./Images/kashmir.jpg",
        place: "Kashmir",
        description: " It lies in the Kashmir Valley along the banks of the Jhelum River, and the shores of Dal Lake and Anchar Lakes, between the Hari Parbat and Shankaracharya hills. The city is known for its natural environment, various gardens, waterfronts and houseboats.",
        rate: "600 $",
        rating: 4
    },
    {
        image: "./Images/keral.jpg",
        place: "Kerala",
        description: "Kerala's beaches, backwaters, lakes, mountain ranges, waterfalls, ancient ports, palaces, religious institutions and wildlife sanctuaries are major attractions for both domestic and international tourists.",
        rate: "700 $",
        rating: 5
    },
    {
        image: "./Images/goa.jpg",
        place: "Goa",
        description: "To the north, the tourist-centric scene is prevalent, with an international flair. Travel south for stretches of unspoiled sand and an escape from large resorts. Temples, mosques and wildlife sanctuaries provide diversions from the beach.",
        rate: "800 $",
        rating: 4
    },
    {
        image: "./Images/manali.jpg",
        place: "Manali",
        description: "Manali attracts adventure travellers, with heli-skiing, hiking, mountaineering and river rafting the favored active pursuits. Come down from your endorphin high by breathing deeply at the four-story, wooden Hidimba Devi Temple.",
        rate: "550 $",
        rating: 2
    },
]

let cardsContainer = document.getElementById('main-container-2'); 
for(let i=0;i<packages.length;i++){
    let ratingStar = '';
    for(let stars = 0; stars<packages[i].rating; stars++){
        ratingStar+='⭐';
    }
    cardsContainer.innerHTML += 
    `<div class="card">
        <img src="${packages[i].image}" alt="">
        <h2>${packages[i].place}</h2>
        <p>${packages[i].description}</p>
        <div class='rateRating'>
            <h3>${packages[i].rate}</h3>
            <h3 class='stars'>${ratingStar}</h3>
        </div>
        <button class='service'>Book Nows</button>
    </div>` 
}




const services = [
    {
        image: "https://b.zmtcdn.com/data/pictures/9/19359199/9e8ffca566cfa94eb4dd1a009c931743_featured_v2.jpg?output-format=webp", 
        place: "Affordable Hotel", 
        rate: '100$ - 1000$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/0/19091260/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg?output-format=webp", 
        place: "Food & Drinks", 
        rate: '10$ - 50$' 
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tourguide2.jpg/220px-Tourguide2.jpg", 
        place: "Safety Guide", 
        rate: '100 $' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/3400346/886efb75864d1e6edf6d7411b332eaf6_featured_v2.jpg", 
        place: "Access to Library",
        rate: '5$ - 20$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/20697478/2f5a1e49824432905827abe457c4ad12_featured_v2.jpg", 
        place: "Wifi Access",
        rate: '5$ - 10$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/1/19493951/2f897a835cdf0accd2426a1a576287aa_featured_v2.jpg", 
        place: "Pub",
        rate: '50$ - 500$'
    }
]


    let cardsContainer2 = document.getElementById('main-container-3'); 
    for(let i=0;i<services.length;i++){ 
        cardsContainer2.innerHTML += 
        `<div class="card" style="background-color: rgb(79, 127, 97);">
            <img src="${services[i].image}" alt="">
            <h3>${services[i].place}</h3> 
            <h4>${services[i].rate}</h4> 
            <button class='service' style="background-color: rgb(0, 67, 0);">Try Now</button>
        </div>` 
    }
