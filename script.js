let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (Dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  // Agar Index slides ki tadat se barh jaye, to wapis 1 par aa jaye
  if (n > slides.length) {slideIndex = 1}
  // Agar Index 1 se kam ho jaye, to aakhri slide par chala jaye
  if (n < 1) {slideIndex = slides.length}
  
  // Sari slides ko hide karein (active class remove karein)
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Sare dots ko inactive karein
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Srf current slide aur dot ko active karein
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}

// Automatic Slider (Har 5 second baad)
setInterval(function() {
  changeSlide(1);
}, 5000);

/*SLIDER CARDS */
const products = {
    'bedroom': [
        { name: 'Jennifer Taylor Home Knox', price: '$842.99', oldPrice: '', img: 'asset/images/bed01.webp', rating: 4, discount: '18%' },
        { name: 'Jennifer Taylor Home Knox', price: '$842.99', oldPrice: '', img: 'asset/images/bed02.webp', rating: 4, discount: '18%' },
        { name: 'Jennifer Taylor Home Knox', price: '$842.99', oldPrice: '', img: 'asset/images/bed03.webp', rating: 4, discount: '18%' },
        { name: 'Jennifer Taylor Home Knox', price: '$842.99', oldPrice: '', img: 'asset/images/bed04.webp', rating: 4, discount: '18%' },
        { name: 'Jennifer Taylor Home Knox', price: '$842.99', oldPrice: '', img: 'asset/images/bed05.webp', rating: 4, discount: '18%' },
    ],

    'chairs': [
        { name: 'Roundhill Winnie Modern Barrel Chair', price: '$164.99', oldPrice: '$199.99', img: 'asset/images/ch01.webp', rating: 3, discount: '18%' },
        { name: 'Delta Children Dinosaur Cozee', price: '$29.97', oldPrice: '$39.99', img: 'asset/images/ch02.webp', rating: 5, discount: '26%' },
        { name: 'Delta Children Dinosaur Cozee', price: '$29.97', oldPrice: '$39.99', img: 'asset/images/ch03.webp', rating: 5, discount: '26%' },
        { name: 'Delta Children Dinosaur Cozee', price: '$29.97', oldPrice: '$39.99', img: 'asset/images/ch04.webp', rating: 5, discount: '26%' },
        { name: 'Delta Children Dinosaur Cozee', price: '$29.97', oldPrice: '$39.99', img: 'asset/images/ch05.webp', rating: 5, discount: '26%' }
    ],

    'living-room': [
        { name: 'Better Homes & Gardens Pillow', price: '$16.01', oldPrice: '$27.11', img: 'asset/images/LV01.WEBP', rating: 4, discount: '41%' },
        { name: 'Better Homes & Gardens Pillow', price: '$16.01', oldPrice: '$27.11', img: 'asset/images/LV02.WEBP', rating: 4, discount: '41%' },
        { name: 'Better Homes & Gardens Pillow', price: '$16.01', oldPrice: '$27.11', img: 'asset/images/LV03.WEBP', rating: 4, discount: '41%' },
        { name: 'Better Homes & Gardens Pillow', price: '$16.01', oldPrice: '$27.11', img: 'asset/images/LV04.WEBP', rating: 4, discount: '41%' },
        { name: 'Better Homes & Gardens Pillow', price: '$16.01', oldPrice: '$27.11', img: 'asset/images/LV05.WEBP', rating: 4, discount: '41%' }
    ]
};

function filterProducts(category, clickedBtn = null){

    const grid = document.getElementById('productGrid');
    const buttons = document.querySelectorAll('.tab-btn');

    /* REMOVE ACTIVE */
    buttons.forEach(btn => btn.classList.remove('active'));

    /* ADD ACTIVE */
    if(clickedBtn){
        clickedBtn.classList.add('active');
    } else {
        document.querySelector('.tab-btn').classList.add('active');
    }

    /* CLEAR GRID */
    grid.innerHTML = '';

    /* LOAD PRODUCTS */
    products[category].forEach(item => {

        grid.innerHTML += `
            <div class="product-item-card">

                <span class="badge-discount">
                    ${item.discount}
                </span>

                <i class="far fa-heart wishlist-icon"></i>

                <div class="product-img-box">
                    <img src="${item.img}" alt="">
                </div>

                <div class="product-info-box">

                    <div class="rating-stars">
                        ★★★★★
                    </div>

                    <p class="p-name">
                        ${item.name}
                    </p>

                    <div class="price-row">
                        ${item.price}

                        <span class="old-price">
                            ${item.oldPrice}
                        </span>
                    </div>

                </div>

            </div>
        `;
    });
}

/* ===== INITIAL LOAD ===== */

window.addEventListener('DOMContentLoaded', () => {
    filterProducts('bedroom');
});

/*CARDS SLIDER #2 */
/* ================================================= */
/* ================= NEW ARRIVALS JS =============== */
/* ================================================= */

const arrivalProducts = {

    'kitchen': [
        { name: 'Bella 6 Qt Programmable Slow Cooker', price: '$39.98', oldPrice: '$69.99', img: 'asset/images/K01.webp', rating: 3, discount: '43%' },
        { name: 'Better Homes & Gardens Abbott 12-Piece Set', price: '$39.98', oldPrice: '$49.99', img: 'asset/images/K02.webp', rating: 4, discount: '21%' },
        { name: 'River 20-Piece Gold Flatware Set', price: '$24.76', oldPrice: '$31.19', img: 'asset/images/K03.webp', rating: 3, discount: '21%' },
        { name: 'Sawyer Grey 12-Piece Dinnerware Set', price: '$91.56', oldPrice: '$119.99', img: 'asset/images/K04.webp', rating: 5, discount: '24%' },
        { name: 'Mainstays Bamboo Cutting Board', price: '$6.99', oldPrice: '$9.99', img: 'asset/images/K05.webp', rating: 3, discount: '31%' }
    ],

    'accessories': [
        { name: 'Bella 6 Qt Programmable Slow Cooker', price: '$39.98', oldPrice: '$69.99', img: 'asset/images/A01.webp', rating: 3, discount: '43%' },
        { name: 'Better Homes & Gardens Abbott 12-Piece Set', price: '$39.98', oldPrice: '$49.99', img: 'asset/images/A02.webp', rating: 4, discount: '21%' },
        { name: 'River 20-Piece Gold Flatware Set', price: '$24.76', oldPrice: '$31.19', img: 'asset/images/A03.webp', rating: 3, discount: '21%' },
        { name: 'Sawyer Grey 12-Piece Dinnerware Set', price: '$91.56', oldPrice: '$119.99', img: 'asset/images/A04.webp', rating: 5, discount: '24%' },
        { name: 'Mainstays Bamboo Cutting Board', price: '$6.99', oldPrice: '$9.99', img: 'asset/images/A05.webp', rating: 3, discount: '31%' }
    ],

    'living-room': [
        { name: 'Bella 6 Qt Programmable Slow Cooker', price: '$39.98', oldPrice: '$69.99', img: 'asset/images/R01.webp', rating: 3, discount: '43%' },
        { name: 'Better Homes & Gardens Abbott 12-Piece Set', price: '$39.98', oldPrice: '$49.99', img: 'asset/images/R02.webp', rating: 4, discount: '21%' },
        { name: 'River 20-Piece Gold Flatware Set', price: '$24.76', oldPrice: '$31.19', img: 'asset/images/R03.webp', rating: 3, discount: '21%' },
        { name: 'Sawyer Grey 12-Piece Dinnerware Set', price: '$91.56', oldPrice: '$119.99', img: 'asset/images/R04.webp', rating: 5, discount: '24%' },
        { name: 'Mainstays Bamboo Cutting Board', price: '$6.99', oldPrice: '$9.99', img: 'asset/images/R05.webp', rating: 3, discount: '31%' }
    ]

};


/* ================= FILTER FUNCTION ================= */

function filterArrivals(category, clickedBtn = null){

    const grid = document.getElementById('arrivalGrid');

    const buttons = document.querySelectorAll('.arrival-tab-btn');

    /* REMOVE ACTIVE */
    buttons.forEach(btn => btn.classList.remove('active'));

    /* ADD ACTIVE */
    if(clickedBtn){
        clickedBtn.classList.add('active');
    }else{
        document.querySelector('.arrival-tab-btn').classList.add('active');
    }

    /* CLEAR GRID */
    grid.innerHTML = '';

    /* LOAD PRODUCTS */
    if(arrivalProducts[category]){

        arrivalProducts[category].forEach(item => {

            grid.innerHTML += `
            
                <div class="product-item-card">

                    <div class="product-img-box">

                        <span class="badge-discount">
                            ${item.discount}
                        </span>

                        <i class="far fa-heart wishlist-icon"></i>

                        <img src="${item.img}" alt="">

                    </div>

                    <div class="product-info-box">

                        <div class="rating-stars">
                            ★★★★★
                        </div>

                        <p class="p-name">
                            ${item.name}
                        </p>

                        <div class="price-row">
                            ${item.price}

                            <span class="old-price">
                                ${item.oldPrice}
                            </span>
                        </div>

                    </div>

                </div>

            `;
        });

    }

}


/* ================= DEFAULT LOAD ================= */

window.addEventListener('DOMContentLoaded', () => {

    filterArrivals('kitchen');

});
/** */
const slider = document.querySelector('.slider-input');
const beforeImage = document.querySelector('.image-before');
const sliderBtn = document.querySelector('.slider-button');

slider.addEventListener('input', (e) => {
    let value = e.target.value;
    
    // Sirf wrapper ki width change hogi, andar ki image fixed rahegi
    beforeImage.style.width = value + '%';
    
    // Handle ko sath move karne ke liye
    sliderBtn.style.left = value + '%';
});
/*ADD TO CART LOGIC */
const allProducts = [
    // Bedroom ki category
    { id: 1, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed000.webp" },
    { id: 2, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed03.webp" },
    { id: 3, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed003.webp" },
    { id: 4, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed004.webp" },
    { id: 5, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed005.webp" },
    { id: 6, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed006.webp" },
    { id: 7, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed007.webp" },
    { id: 8, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed008.webp" },
    { id: 9, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed009.webp" },
    { id: 10, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed10.webp" },
    { id: 11, name: "Royal Bed", category: "bedroom", price: "55,000", img: "asset/images/bed11.webp" },
    { id: 12, name: "Wooden Cupboard", category: "bedroom", price: "25,000", img: "asset/images/bed12.webp" },



    // Kitchen ki category
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk01.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk02.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk03.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk04.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk05.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk06.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk07.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk08.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk09.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk010.webp" },                        
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk011.webp" },
    { id: 3, name: "Modern Cabinet", category: "kitchen", price: "40,000", img: "asset/images/kk012.webp" },
    

    // Living Room ki category
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/sofa04.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/sofa03.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/sofa05.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/chair.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/chair01.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/chair02.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/table.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/table01.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/table02.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/table03.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/cupboard01.webp" },
    { id: 5, name: "Luxury Sofa", category: "living", price: "75,000", img: "asset/images/cupboard02.webp" },


    // Isi tarah 100 products add karte jayein...
];
function renderProducts() {
    // 1. URL se category nikalna (e.g. bedroom.html?cat=bedroom)
    const params = new URLSearchParams(window.location.search);
    const selectedCat = params.get('cat'); 
    
    const container = document.getElementById('product-display');
    
    // Agar page par container nahi hai ya category nahi mili toh ruk jao
    if (!container || !selectedCat) return;

    // 2. Data ko filter karna
    const filtered = allProducts.filter(p => p.category === selectedCat);

    // 3. HTML generate karna (Aapka design)
    container.innerHTML = ""; 

    filtered.forEach(product => {
        container.innerHTML += `
            <div class="modern-product-card">
                <div class="product-image-container">
                    <img src="${product.img}" alt="${product.name}">
                    <div class="product-overlay-buttons">
                        <button class="icon-btn"><i>👁</i></button>
                        <button class="icon-btn" onclick="addToCart('${product.name}', '${product.price}')">
                            <i>🛒</i>
                        </button>
                    </div>
                </div>
                <div class="product-info" style="padding: 15px; text-align: center;">
                    <h3>${product.name}</h3>
                    <p>Rs. ${product.price}</p>
                </div>
            </div>
        `;
    });
}

// Page load hote hi function chalayein
window.onload = renderProducts;

/*before after */
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('main-slider-input');
    const before = document.getElementById('main-before-wrapper');
    const handle = document.getElementById('main-handle');

    if (slider && before && handle) {
        // Function jo move karega
        const moveSlider = (val) => {
            before.style.width = val + '%';
            handle.style.left = val + '%';
        };

        // Sliding ke waqt
        slider.addEventListener('input', (e) => {
            moveSlider(e.target.value);
        });

        // Kuch browsers ke liye extra
        slider.addEventListener('change', (e) => {
            moveSlider(e.target.value);
        });

        console.log("Slider script linked and ready!");
    } else {
        console.error("Slider elements missing! Please check IDs.");
    }
});
/*NAV JS */
function toggleMenu() {
    const nav = document.querySelector('.nav-list');
    nav.classList.toggle('active');
}