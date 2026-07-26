// ================================================================
// TRIPCRAFT - COMPLETE JAVASCRIPT
// ================================================================

// ================================================================
// 1. NAVBAR FUNCTIONALITY
// ================================================================

// Get the hamburger menu button and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the mobile menu when hamburger is clicked
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
}

// Add shadow to navbar when scrolling
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ================================================================
// 2. NAVIGATION - GLOBAL AUTH STATE MANAGEMENT
// ================================================================

// Updates the navigation links based on login state
function updateNavigation() {
    const currentUser = localStorage.getItem('currentUser');
    const navLinks = document.getElementById('navLinks');
    const navAuth = document.getElementById('navAuth');
    
    if (!navLinks || !navAuth) return;
    
    // Get the current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentUser) {
        // LOGGED IN: Show Home, Explore, My Trips, Profile, Logout
        navAuth.innerHTML = `
            <a href="trips.html" class="${currentPage === 'trips.html' ? 'active' : ''}">My Trips</a>
            <a href="profile.html" class="${currentPage === 'profile.html' ? 'active' : ''}">Profile</a>
            <a href="#" id="logoutBtn">Logout</a>
        `;
        
        // Update Home and Explore links
        const links = navLinks.querySelectorAll('li:not(.nav-auth) a');
        links.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href === 'index.html' || href === '#') {
                link.classList.toggle('active', currentPage === 'index.html');
            } else if (href === 'destinations.html') {
                link.classList.toggle('active', currentPage === 'destinations.html');
            } else if (href.includes('#why') || href.includes('#footer')) {
                link.classList.remove('active');
            }
        });
        
        // Add logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                updateNavigation();
                window.location.href = 'index.html';
            });
        }
        
    } else {
        // LOGGED OUT: Show Home, Explore, About, Contact, Log In, Sign Up
        navAuth.innerHTML = `
            <a href="login.html" class="${currentPage === 'login.html' ? 'active' : ''}">Log In</a>
            <a href="signup.html" class="${currentPage === 'signup.html' ? 'active' : ''}">Sign Up</a>
        `;
        
        // Update all navigation links
        const navItems = navLinks.querySelectorAll('li:not(.nav-auth) a');
        navItems.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href === 'index.html') {
                link.classList.toggle('active', currentPage === 'index.html');
            } else if (href === 'destinations.html') {
                link.classList.toggle('active', currentPage === 'destinations.html');
            } else if (href === '#why' || href === 'index.html#why') {
                link.classList.toggle('active', currentPage === 'index.html' && window.location.hash === '#why');
                link.style.display = '';
            } else if (href === '#footer' || href === 'index.html#footer') {
                link.classList.toggle('active', currentPage === 'index.html' && window.location.hash === '#footer');
                link.style.display = '';
            }
        });
    }
}

// ================================================================
// 3. DESTINATIONS DATA - COMPLETE WITH 12 ITEMS
// ================================================================

const destinations = [
    {
        id: 1,
        name: 'Tokyo',
        country: 'Japan',
        continent: 'asia',
        capital: 'Tokyo',
        language: 'Japanese',
        population: '14 million',
        flightTime: '14hr',
        timezone: 'UTC+9',
        currency: 'Yen',
        image: 'images/tokyo1.jpg',
        images: [
            'images/tokyo1.jpg',
            'images/tokyo2.jpg',
            'images/tokyo3.jpg'
        ],
        description: 'Tokyo is where ancient temples meet neon towers. The city hums with energy from quiet shrine gardens to the chaos of Shibuya Crossing.',
        budget: { budget: 1300, moderate: 3200, luxury: 8000 },
        bestTime: [
            { season: 'Spring (Mar-May)', description: 'Blooming' },
            { season: 'Summer (Jun-Aug)', description: 'Festive' },
            { season: 'Autumn (Sep-Nov)', description: 'Golden' },
            { season: 'Winter (Dec-Feb)', description: 'Clear' }
        ],
        attractions: [
            { name: 'Shibuya Crossing', desc: "World's busiest scramble crossing", fee: 'Free' },
            { name: 'Senso-ji Temple', desc: 'Ancient Buddhist temple', fee: 'Free' },
            { name: 'Tokyo Skytree', desc: 'Tallest structure in Japan', fee: 'R180' },
            { name: 'Meiji Shrine', desc: 'Peaceful Shinto shrine', fee: 'Free' },
            { name: 'Shinjuku Gyoen', desc: 'Beautiful national garden', fee: 'R50' },
            { name: 'TeamLab Planets', desc: 'Immersive digital art', fee: 'R200' }
        ],
        cuisine: [
            { name: 'Sushi', desc: 'Fresh raw fish', price: 'R80-250' },
            { name: 'Ramen', desc: 'Hearty noodle soup', price: 'R50-120' },
            { name: 'Tempura', desc: 'Lightly battered seafood', price: 'R70-150' },
            { name: 'Matcha', desc: 'Green tea treats', price: 'R30-60' },
            { name: 'Takoyaki', desc: 'Savory octopus balls', price: 'R40-80' },
            { name: 'Okonomiyaki', desc: 'Savory Japanese pancake', price: 'R60-120' }
        ],
        tips: [
            'Learn arigato , goes a long way',
            'Get a Suica card for trains and stores',
            'Visit temples early before crowds arrive',
            'Try conbini snacks , surprisingly good',
            'Take the Shinkansen bullet train for day trips',
            'Visit Akihabara for anime and electronics'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R1,500-2,800',
        type: ['city', 'culture', 'food'],
        trending: true
    },
    {
        id: 2,
        name: 'Rome',
        country: 'Italy',
        continent: 'europe',
        capital: 'Rome',
        language: 'Italian',
        population: '2.8 million',
        flightTime: '12hr',
        timezone: 'UTC+1',
        currency: 'Euro',
        image: 'images/rome1.jpg',
        images: [
            'images/rome1.jpg',
            'images/rome2.jpg',
            'images/rome3.jpg'
        ],
        description: 'Rome is an open air museum where every corner tells a story. Ancient ruins stand alongside Renaissance masterpieces, creating a city that feels like a living history book.',
        budget: { budget: 2400, moderate: 4500, luxury: 10000 },
        bestTime: [
            { season: 'Spring (Apr-Jun)', description: 'Blooming' },
            { season: 'Summer (Jul-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Oct)', description: 'Golden' },
            { season: 'Winter (Nov-Mar)', description: 'Cozy' }
        ],
        attractions: [
            { name: 'Colosseum', desc: 'Iconic ancient amphitheater', fee: 'R250' },
            { name: 'Vatican Museums', desc: 'Home to Sistine Chapel', fee: 'R350' },
            { name: 'Trevi Fountain', desc: 'Baroque masterpiece fountain', fee: 'Free' },
            { name: 'Pantheon', desc: 'Ancient Roman temple', fee: 'Free' },
            { name: 'Roman Forum', desc: 'Ancient Roman ruins', fee: 'R200' },
            { name: 'Piazza Navona', desc: 'Beautiful Baroque square', fee: 'Free' }
        ],
        cuisine: [
            { name: 'Pasta Carbonara', desc: 'Roman egg pasta', price: 'R120-200' },
            { name: 'Pizza al Taglio', desc: 'Roman style pizza slice', price: 'R40-80' },
            { name: 'Gelato', desc: 'Artisanal Italian ice cream', price: 'R30-60' },
            { name: 'Cacio e Pepe', desc: 'Cheese and pepper pasta', price: 'R100-180' },
            { name: 'Supplì', desc: 'Fried rice balls', price: 'R30-50' },
            { name: 'Tiramisu', desc: 'Classic Italian dessert', price: 'R50-80' }
        ],
        tips: [
            'Book major attractions online in advance',
            'Wear comfortable shoes , cobblestones everywhere',
            'Cover shoulders and knees when entering churches',
            'Drink from public water fountains',
            'Visit the Vatican early morning to avoid crowds',
            'Learn a few Italian phrases like "Grazie"'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R2,400-3,600',
        type: ['city', 'culture', 'history'],
        trending: true
    },
    {
        id: 3,
        name: 'Cape Town',
        country: 'South Africa',
        continent: 'africa',
        capital: 'Cape Town',
        language: 'Afrikaans, English, Xhosa',
        population: '4.6 million',
        flightTime: '2hr',
        timezone: 'UTC+2',
        currency: 'Rand',
        image: 'images/capetown1.jpg',
        images: [
            'images/capetown1.jpg',
            'images/capetown2.jpg',
            'images/capetown3.jpg'
        ],
        description: 'Cape Town is where Table Mountain meets the Atlantic Ocean. This vibrant city offers a breathtaking blend of natural wonders, rich history, and creative energy.',
        budget: { budget: 1200, moderate: 2800, luxury: 6500 },
        bestTime: [
            { season: 'Spring (Sep-Nov)', description: 'Blooming' },
            { season: 'Summer (Dec-Feb)', description: 'Sunny' },
            { season: 'Autumn (Mar-May)', description: 'Mild' },
            { season: 'Winter (Jun-Aug)', description: 'Cool' }
        ],
        attractions: [
            { name: 'Table Mountain', desc: 'Flat topped mountain icon', fee: 'R450' },
            { name: 'V&A Waterfront', desc: 'Vibrant harbor precinct', fee: 'Free' },
            { name: 'Cape of Good Hope', desc: 'Stunning nature reserve', fee: 'R180' },
            { name: 'Kirstenbosch Gardens', desc: 'World class botanical garden', fee: 'R90' },
            { name: 'Boulders Beach', desc: 'Penguin colony beach', fee: 'R80' },
            { name: 'Bo-Kaap', desc: 'Colorful Malay Quarter', fee: 'Free' }
        ],
        cuisine: [
            { name: 'Bobotie', desc: 'Spiced minced meat', price: 'R80-140' },
            { name: 'Braai', desc: 'South African BBQ', price: 'R60-120' },
            { name: 'Fresh Seafood', desc: 'Line caught fish', price: 'R100-200' },
            { name: 'Biltong', desc: 'Cured meat snack', price: 'R30-60' },
            { name: 'Malva Pudding', desc: 'Caramelized sponge pudding', price: 'R40-70' },
            { name: 'Gatsby', desc: 'Massive sandwich with fries', price: 'R50-80' }
        ],
        tips: [
            'Visit Table Mountain on a clear day',
            'Explore the Cape Winelands for world-class wine',
            'Be aware of load shedding , carry a power bank',
            'Drive Chapmans Peak for spectacular views',
            'Take the ferry to Robben Island for history',
            'Shop at the Old Biscuit Mill for local crafts'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R1,500-2,700',
        type: ['adventure', 'beach', 'nature'],
        trending: true
    },
    {
        id: 4,
        name: 'Santorini',
        country: 'Greece',
        continent: 'europe',
        capital: 'Fira',
        language: 'Greek',
        population: '15,000',
        flightTime: '4hr',
        timezone: 'UTC+2',
        currency: 'Euro',
        image: 'images/santorini1.jpg',
        images: [
            'images/santorini1.jpg',
            'images/santorini2.jpg',
            'images/santorini3.jpg'
        ],
        description: 'Santorini is a dreamlike island in the Aegean Sea, famous for dramatic caldera views, white washed buildings, and breathtaking sunsets.',
        budget: { budget: 3000, moderate: 5500, luxury: 12000 },
        bestTime: [
            { season: 'Spring (Apr-Jun)', description: 'Blooming' },
            { season: 'Summer (Jul-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Oct)', description: 'Golden' },
            { season: 'Winter (Nov-Mar)', description: 'Peaceful' }
        ],
        attractions: [
            { name: 'Oia Sunset', desc: 'World famous sunset views', fee: 'Free' },
            { name: 'Ancient Akrotiri', desc: 'Minoan Bronze Age settlement', fee: 'R100' },
            { name: 'Red Beach', desc: 'Red volcanic sand beach', fee: 'Free' },
            { name: 'Fira Town', desc: 'Beautiful cliffside town', fee: 'Free' },
            { name: 'Kamari Beach', desc: 'Black sand beach', fee: 'Free' },
            { name: 'Wine Museum', desc: 'Learn about wine production', fee: 'R80' }
        ],
        cuisine: [
            { name: 'Fava', desc: 'Creamy split pea purée', price: 'R80-120' },
            { name: 'Tomatokeftedes', desc: 'Tomato fritters with herbs', price: 'R60-100' },
            { name: 'Fresh Seafood', desc: 'Grilled octopus and fish', price: 'R150-300' },
            { name: 'White Wine', desc: 'Local Assyrtiko wine', price: 'R120-250' },
            { name: 'Moussaka', desc: 'Layered eggplant casserole', price: 'R90-160' },
            { name: 'Greek Salad', desc: 'Fresh tomatoes and feta', price: 'R50-80' }
        ],
        tips: [
            'Book accommodation well in advance for sunset views',
            'Rent an ATV for exploring the island',
            'Visit Oia early morning to avoid crowds',
            'Try local Assyrtiko wine',
            'Take a boat tour to the volcano',
            'Stay in Imerovigli for quieter sunset views'
        ],
        budgetLabel: 'Luxury',
        priceInRands: 'R4,000-5,400',
        type: ['beach', 'romance', 'relaxation'],
        trending: true
    },
    {
        id: 5,
        name: 'Bali',
        country: 'Indonesia',
        continent: 'asia',
        capital: 'Denpasar',
        language: 'Indonesian, Balinese',
        population: '4.3 million',
        flightTime: '12hr',
        timezone: 'UTC+8',
        currency: 'Rupiah',
        image: 'images/bali3.jpg',
        images: [
            'images/bali1.jpg',
            'images/bali2.jpg',
            'images/bali3.jpg'
        ],
        description: 'Bali is the Island of the Gods, a lush paradise of rice terraces, volcanic mountains, and vibrant culture.',
        budget: { budget: 700, moderate: 1800, luxury: 4500 },
        bestTime: [
            { season: 'Spring (Mar-May)', description: 'Blooming' },
            { season: 'Summer (Jun-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Nov)', description: 'Lush' },
            { season: 'Winter (Dec-Feb)', description: 'Wet' }
        ],
        attractions: [
            { name: 'Tanah Lot Temple', desc: 'Iconic sea temple', fee: 'R30' },
            { name: 'Ubud Rice Terraces', desc: 'Stunning terraced fields', fee: 'R20' },
            { name: 'Mount Batur', desc: 'Active volcano sunrise hike', fee: 'R250' },
            { name: 'Uluwatu Temple', desc: 'Cliffside ocean temple', fee: 'R40' },
            { name: 'Monkey Forest', desc: 'Sacred monkey sanctuary', fee: 'R50' },
            { name: 'Tegenungan Waterfall', desc: 'Beautiful waterfall swim', fee: 'R30' }
        ],
        cuisine: [
            { name: 'Nasi Goreng', desc: 'Indonesian fried rice', price: 'R25-50' },
            { name: 'Satay', desc: 'Grilled meat skewers', price: 'R20-40' },
            { name: 'Babi Guling', desc: 'Traditional roasted pig', price: 'R40-70' },
            { name: 'Mie Goreng', desc: 'Fried noodles with egg', price: 'R25-45' },
            { name: 'Gado-Gado', desc: 'Vegetable peanut salad', price: 'R30-50' },
            { name: 'Fresh Coconut', desc: 'Young coconut water', price: 'R15-25' }
        ],
        tips: [
            'Rent a scooter for convenient exploration',
            'Learn about Balinese customs and ceremonies',
            'Visit Ubud for traditional arts and culture',
            'Stay in different areas for varied experiences',
            'Try a traditional Balinese massage',
            'Visit temples during ceremonies for cultural insight'
        ],
        budgetLabel: 'Budget',
        priceInRands: 'R550-900',
        type: ['beach', 'culture', 'nature'],
        trending: false
    },
    {
        id: 6,
        name: 'Paris',
        country: 'France',
        continent: 'europe',
        capital: 'Paris',
        language: 'French',
        population: '2.2 million',
        flightTime: '11hr',
        timezone: 'UTC+1',
        currency: 'Euro',
        image: 'images/paris1.jpg',
        images: [
            'images/paris1.jpg',
            'images/paris2.jpg',
            'images/paris3.jpg'
        ],
        description: 'Paris is the City of Light, a place of romance, art, and elegance. This magnificent city has inspired artists, writers, and dreamers for centuries.',
        budget: { budget: 3000, moderate: 5500, luxury: 12000 },
        bestTime: [
            { season: 'Spring (Apr-Jun)', description: 'Blooming' },
            { season: 'Summer (Jul-Aug)', description: 'Vibrant' },
            { season: 'Autumn (Sep-Nov)', description: 'Golden' },
            { season: 'Winter (Dec-Mar)', description: 'Cozy' }
        ],
        attractions: [
            { name: 'Eiffel Tower', desc: 'Iconic symbol of Paris', fee: 'R250-500' },
            { name: 'Louvre Museum', desc: 'Home to Mona Lisa', fee: 'R400' },
            { name: 'Notre-Dame', desc: 'Gothic cathedral masterpiece', fee: 'Free' },
            { name: 'Montmartre', desc: 'Historic hilltop neighborhood', fee: 'Free' },
            { name: 'Champs-Élysées', desc: 'Famous avenue with shops', fee: 'Free' },
            { name: 'Versailles Palace', desc: 'Opulent royal palace', fee: 'R350' }
        ],
        cuisine: [
            { name: 'Croissant', desc: 'Flaky buttery pastry', price: 'R20-40' },
            { name: 'Baguette', desc: 'Traditional French bread', price: 'R15-30' },
            { name: 'Escargot', desc: 'Snails with garlic butter', price: 'R120-200' },
            { name: 'Crème Brûlée', desc: 'Rich caramelized custard', price: 'R50-90' },
            { name: 'Macarons', desc: 'Colorful almond cookies', price: 'R15-25' },
            { name: 'French Onion Soup', desc: 'Rich soup with cheese', price: 'R70-120' }
        ],
        tips: [
            'Book museum tickets online to skip queues',
            'Take a Seine river cruise for beautiful views',
            'Visit Montmartre for stunning city views',
            'Learn basic French greetings',
            'Try cafes off the main boulevards for better prices',
            'Visit the Eiffel Tower at night for sparking lights'
        ],
        budgetLabel: 'Luxury',
        priceInRands: 'R4,000-6,000',
        type: ['city', 'culture', 'romance'],
        trending: false
    },
    {
        id: 7,
        name: 'New York',
        country: 'USA',
        continent: 'north-america',
        capital: 'New York',
        language: 'English',
        population: '8.4 million',
        flightTime: '15hr',
        timezone: 'UTC-5',
        currency: 'Dollar',
        image: 'images/newyork1.jpg',
        images: [
            'images/newyork1.jpg',
            'images/newyork2.jpg',
            'images/newyork3.jpg'
        ],
        description: 'New York City is the ultimate metropolis that never sleeps. From the iconic Statue of Liberty to the bright lights of Times Square, every experience in NYC is larger than life.',
        budget: { budget: 3800, moderate: 6000, luxury: 13000 },
        bestTime: [
            { season: 'Spring (Apr-Jun)', description: 'Blooming' },
            { season: 'Summer (Jul-Aug)', description: 'Vibrant' },
            { season: 'Autumn (Sep-Nov)', description: 'Golden' },
            { season: 'Winter (Dec-Mar)', description: 'Festive' }
        ],
        attractions: [
            { name: 'Statue of Liberty', desc: 'Iconic symbol of freedom', fee: 'R350' },
            { name: 'Central Park', desc: 'Massive urban park', fee: 'Free' },
            { name: 'Times Square', desc: 'Vibrant entertainment hub', fee: 'Free' },
            { name: 'Brooklyn Bridge', desc: 'Historic bridge with views', fee: 'Free' },
            { name: 'Empire State Building', desc: 'Iconic skyscraper views', fee: 'R300' },
            { name: 'Metropolitan Museum', desc: 'World-class art museum', fee: 'R200' }
        ],
        cuisine: [
            { name: 'NYC Pizza', desc: 'Thin crust New York pizza', price: 'R40-80' },
            { name: 'Bagels', desc: 'Authentic boiled bagels', price: 'R30-60' },
            { name: 'Pastrami Sandwich', desc: 'Classic deli sandwich', price: 'R150-250' },
            { name: 'Cheesecake', desc: 'Rich New York cheesecake', price: 'R50-100' },
            { name: 'Hot Dog', desc: 'Classic street food', price: 'R25-40' },
            { name: 'Halal Food', desc: 'Middle Eastern street food', price: 'R30-50' }
        ],
        tips: [
            'Get a MetroCard for public transport',
            'Walk across Brooklyn Bridge for city views',
            'Visit museums on free admission days',
            'Explore different neighborhoods',
            'Take the Staten Island Ferry for free Statue of Liberty views',
            'Visit Central Park for a morning walk'
        ],
        budgetLabel: 'Luxury',
        priceInRands: 'R4,800-7,600',
        type: ['city', 'culture', 'nightlife'],
        trending: false
    },
    {
        id: 8,
        name: 'Marrakech',
        country: 'Morocco',
        continent: 'africa',
        capital: 'Marrakech',
        language: 'Arabic, French',
        population: '1 million',
        flightTime: '4hr',
        timezone: 'UTC+1',
        currency: 'Dirham',
        image: 'images/marrakech1.jpg',
        images: [
            'images/marrakech1.jpg',
            'images/marrakech2.jpg',
            'images/marrakech3.jpg'
        ],
        description: 'Marrakech captivates all senses with its vibrant souks, colorful markets, and exotic atmosphere. The bustling Jemaa el-Fnaa square comes alive with street performers, food stalls, and storytellers.',
        budget: { budget: 1100, moderate: 2200, luxury: 5000 },
        bestTime: [
            { season: 'Spring (Mar-May)', description: 'Blooming' },
            { season: 'Summer (Jun-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Nov)', description: 'Warm' },
            { season: 'Winter (Dec-Feb)', description: 'Clear' }
        ],
        attractions: [
            { name: 'Jemaa el-Fnaa', desc: 'Famous square with performers', fee: 'Free' },
            { name: 'Bahia Palace', desc: 'Beautiful 19th century palace', fee: 'R70' },
            { name: 'Majorelle Garden', desc: 'Stunning botanical garden', fee: 'R80' },
            { name: 'Medina Souks', desc: 'Traditional markets with crafts', fee: 'Free' },
            { name: 'Koutoubia Mosque', desc: 'Largest mosque in Marrakech', fee: 'Free' },
            { name: 'Saadian Tombs', desc: 'Historic royal burial ground', fee: 'R60' }
        ],
        cuisine: [
            { name: 'Tagine', desc: 'Slow cooked meat with vegetables', price: 'R60-120' },
            { name: 'Couscous', desc: 'Semolina with vegetables and meat', price: 'R50-100' },
            { name: 'Mint Tea', desc: 'Moroccan hospitality tea', price: 'R15-30' },
            { name: 'Pastilla', desc: 'Sweet and savory meat pie', price: 'R70-130' },
            { name: 'Harira', desc: 'Traditional tomato lentil soup', price: 'R30-50' },
            { name: 'Moroccan Sweets', desc: 'Honey drenched nut pastries', price: 'R20-40' }
        ],
        tips: [
            'Negotiate prices in the souks',
            'Stay in a traditional riad for authentic experience',
            'Drink mint tea for a cultural experience',
            'Be respectful of local customs',
            'Visit the souks early morning for best deals',
            'Take a day trip to the Atlas Mountains'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R1,600-2,300',
        type: ['culture', 'food', 'history'],
        trending: false
    },
    {
        id: 9,
        name: 'Sydney',
        country: 'Australia',
        continent: 'australia',
        capital: 'Sydney',
        language: 'English',
        population: '5.3 million',
        flightTime: '14hr',
        timezone: 'UTC+10',
        currency: 'Dollar',
        image: 'images/sydney1.jpg',
        images: [
            'images/sydney1.jpg',
            'images/sydney2.jpg',
            'images/sydney3.jpg'
        ],
        description: 'Sydney is a stunning harbor city that combines natural beauty with urban sophistication. The iconic Opera House and Harbour Bridge create a magnificent skyline against the sparkling blue waters.',
        budget: { budget: 2400, moderate: 4200, luxury: 9500 },
        bestTime: [
            { season: 'Spring (Sep-Nov)', description: 'Blooming' },
            { season: 'Summer (Dec-Feb)', description: 'Sunny' },
            { season: 'Autumn (Mar-May)', description: 'Mild' },
            { season: 'Winter (Jun-Aug)', description: 'Clear' }
        ],
        attractions: [
            { name: 'Sydney Opera House', desc: 'Iconic performing arts venue', fee: 'R200-500' },
            { name: 'Harbour Bridge', desc: 'Bridge climb for views', fee: 'R1,200' },
            { name: 'Bondi Beach', desc: 'Famous surfing beach', fee: 'Free' },
            { name: 'Taronga Zoo', desc: 'Wildlife park with views', fee: 'R250' },
            { name: 'Darling Harbour', desc: 'Entertainment and dining precinct', fee: 'Free' },
            { name: 'Blue Mountains', desc: 'Stunning national park', fee: 'R150' }
        ],
        cuisine: [
            { name: 'Meat Pie', desc: 'Classic Aussie pie', price: 'R30-50' },
            { name: 'Barramundi', desc: 'Fresh Australian fish', price: 'R120-250' },
            { name: 'Flat White', desc: 'Australian style coffee', price: 'R30-45' },
            { name: 'Kangaroo Steak', desc: 'Lean native meat', price: 'R150-280' },
            { name: 'Pavlova', desc: 'Meringue dessert with fruit', price: 'R40-70' },
            { name: 'Fish and Chips', desc: 'Classic coastal meal', price: 'R50-80' }
        ],
        tips: [
            'Use ferries for stunning harbor views',
            'Visit Bondi Beach for sunset',
            'Explore the Blue Mountains day trip',
            'Try local Australian wines',
            'Take the coastal walk from Bondi to Coogee',
            'Visit the Opera House for a performance'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R2,400-3,600',
        type: ['city', 'beach', 'nature'],
        trending: false
    },
    {
        id: 10,
        name: 'Barcelona',
        country: 'Spain',
        continent: 'europe',
        capital: 'Barcelona',
        language: 'Spanish, Catalan',
        population: '1.6 million',
        flightTime: '12hr',
        timezone: 'UTC+1',
        currency: 'Euro',
        image: 'images/barcelona1.jpg',
        images: [
            'images/barcelona1.jpg',
            'images/barcelona2.jpg',
            'images/barcelona3.jpg'
        ],
        description: 'Barcelona is a vibrant Mediterranean city where Gaudís whimsical architecture meets lively street life. From the stunning Sagrada Familia to the bustling Las Ramblas, this city pulses with creative energy.',
        budget: { budget: 2400, moderate: 4500, luxury: 10000 },
        bestTime: [
            { season: 'Spring (Apr-Jun)', description: 'Blooming' },
            { season: 'Summer (Jul-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Nov)', description: 'Golden' },
            { season: 'Winter (Dec-Mar)', description: 'Cozy' }
        ],
        attractions: [
            { name: 'Sagrada Familia', desc: "Gaudí's unfinished masterpiece", fee: 'R250' },
            { name: 'Park Güell', desc: 'Colorful mosaic park', fee: 'R100' },
            { name: 'Las Ramblas', desc: 'Famous street with performers', fee: 'Free' },
            { name: 'Gothic Quarter', desc: 'Historic medieval neighborhood', fee: 'Free' },
            { name: 'Barceloneta Beach', desc: 'Urban beach with restaurants', fee: 'Free' },
            { name: 'Casa Batlló', desc: 'Gaudí designed apartment', fee: 'R300' }
        ],
        cuisine: [
            { name: 'Tapas', desc: 'Various small plates', price: 'R40-100' },
            { name: 'Paella', desc: 'Traditional rice dish', price: 'R150-250' },
            { name: 'Churros', desc: 'Fried dough with chocolate', price: 'R30-50' },
            { name: 'Sangria', desc: 'Spanish fruit wine drink', price: 'R50-90' },
            { name: 'Jamón Ibérico', desc: 'Premium Spanish cured ham', price: 'R80-150' },
            { name: 'Crema Catalana', desc: 'Catalan style custard', price: 'R30-50' }
        ],
        tips: [
            'Book Sagrada Familia tickets online',
            'Explore the Gothic Quarter for history',
            'Try authentic tapas bars',
            'Visit the beach in the evening',
            'Take the cable car for city views',
            'Visit Park Güell early to avoid crowds'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R2,400-4,000',
        type: ['city', 'culture', 'food'],
        trending: false
    },
    {
        id: 11,
        name: 'Bangkok',
        country: 'Thailand',
        continent: 'asia',
        capital: 'Bangkok',
        language: 'Thai',
        population: '10.5 million',
        flightTime: '11hr',
        timezone: 'UTC+7',
        currency: 'Baht',
        image: 'images/bangkok1.jpg',
        images: [
            'images/bangkok1.jpg',
            'images/bangkok2.jpg',
            'images/bangkok3.jpg'
        ],
        description: 'Bangkok is a city of contrasts where ancient temples stand beside modern skyscrapers. The vibrant capital of Thailand offers a sensory overload in the best possible way.',
        budget: { budget: 750, moderate: 1600, luxury: 4000 },
        bestTime: [
            { season: 'Spring (Mar-May)', description: 'Blooming' },
            { season: 'Summer (Jun-Aug)', description: 'Vibrant' },
            { season: 'Autumn (Sep-Nov)', description: 'Mild' },
            { season: 'Winter (Dec-Feb)', description: 'Clear' }
        ],
        attractions: [
            { name: 'Grand Palace', desc: 'Opulent royal palace', fee: 'R200' },
            { name: 'Wat Arun', desc: 'Temple of Dawn', fee: 'R50' },
            { name: 'Chatuchak Market', desc: 'Massive weekend market', fee: 'Free' },
            { name: 'Khao San Road', desc: 'Famous backpacker street', fee: 'Free' },
            { name: 'Wat Pho', desc: 'Temple of Reclining Buddha', fee: 'R80' },
            { name: 'Chao Phraya River', desc: 'River boat for views', fee: 'R30' }
        ],
        cuisine: [
            { name: 'Pad Thai', desc: 'Famous stir-fried noodles', price: 'R30-60' },
            { name: 'Tom Yum Goong', desc: 'Spicy shrimp soup', price: 'R40-80' },
            { name: 'Mango Sticky Rice', desc: 'Sweet rice dessert', price: 'R25-40' },
            { name: 'Green Curry', desc: 'Spicy coconut curry', price: 'R40-70' },
            { name: 'Som Tam', desc: 'Spicy green papaya salad', price: 'R20-35' },
            { name: 'Thai Iced Tea', desc: 'Sweet tea with milk', price: 'R15-25' }
        ],
        tips: [
            'Take a boat tour on the canals',
            'Try street food for authentic flavors',
            'Dress respectfully when visiting temples',
            'Use the Skytrain for efficient transport',
            'Visit floating markets for unique experiences',
            'Learn basic Thai phrases'
        ],
        budgetLabel: 'Budget',
        priceInRands: 'R750-1,300',
        type: ['city', 'culture', 'food'],
        trending: false
    },
    {
        id: 12,
        name: 'Zanzibar',
        country: 'Tanzania',
        continent: 'africa',
        capital: 'Zanzibar City (Stone Town)',
        language: 'Swahili, English',
        population: '1.9 million',
        flightTime: '4hr',
        timezone: 'UTC+3',
        currency: 'Tanzanian Shilling (TZS)',
        image: 'images/zanzibar1.jpg',
        images: [
            'images/zanzibar1.jpg',
            'images/zanzibar2.jpg',
            'images/zanzibar3.jpg'
        ],
        description: 'Zanzibar is a tropical island paradise off the coast of Tanzania, famous for its white sand beaches, turquoise Indian Ocean waters, rich Swahili culture, and historic Stone Town.',
        budget: { budget: 1800, moderate: 3200, luxury: 7000 },
        bestTime: [
            { season: 'Spring (Mar-May)', description: 'Blooming' },
            { season: 'Summer (Jun-Aug)', description: 'Sunny' },
            { season: 'Autumn (Sep-Nov)', description: 'Warm' },
            { season: 'Winter (Dec-Feb)', description: 'Clear' }
        ],
        attractions: [
            { name: 'Stone Town', desc: 'UNESCO World Heritage site', fee: 'Free' },
            { name: 'Nungwi Beach', desc: 'Crystal clear waters beach', fee: 'Free' },
            { name: 'Prison Island', desc: 'Giant tortoise sanctuary', fee: 'R250' },
            { name: 'Jozani Forest', desc: 'Home to red colobus monkeys', fee: 'R180' },
            { name: 'Spice Farms', desc: 'Guided spice farm tour', fee: 'R200' },
            { name: 'Mnemba Atoll', desc: 'World class snorkeling spot', fee: 'R800' }
        ],
        cuisine: [
            { name: 'Zanzibar Pizza', desc: 'Popular stuffed street food', price: 'R40-80' },
            { name: 'Seafood Platter', desc: 'Fresh lobster and prawns', price: 'R180-350' },
            { name: 'Pilau Rice', desc: 'Spiced rice with meat', price: 'R70-120' },
            { name: 'Urojo Soup', desc: 'Traditional Zanzibari soup', price: 'R30-60' },
            { name: 'Octopus Curry', desc: 'Tender coconut curry', price: 'R120-220' },
            { name: 'Sugarcane Juice', desc: 'Freshly squeezed tropical drink', price: 'R20-40' }
        ],
        tips: [
            'Visit Stone Town early to avoid the heat',
            'Dress modestly when visiting towns and villages',
            'Carry cash as smaller businesses may not accept cards',
            'Take a sunset dhow cruise for amazing views',
            'Book snorkeling trips to Mnemba Atoll in advance',
            'Try local spice tea and fresh seafood markets'
        ],
        budgetLabel: 'Moderate',
        priceInRands: 'R1,800-3,200',
        type: ['beach', 'culture', 'adventure'],
        trending: true
    }
];

// Hero pins (first 4 destinations)
const heroDestinations = destinations.slice(0, 4);

// Featured destinations (first 3 destinations)
const featuredDestinations = destinations.slice(0, 3);

// ================================================================
// 4. PLAN THIS TRIP FUNCTION
// ================================================================

function planThisTrip(destinationId) {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        // Not logged in - save destination id and redirect to login
        localStorage.setItem('pendingTripId', destinationId);
        localStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = 'login.html';
        return;
    }
    
    // User is logged in - find the destination
    const dest = destinations.find(function(d) {
        return d.id === destinationId;
    });
    
    if (!dest) {
        alert('Destination not found!');
        return;
    }
    
    // Get user data
    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    
    if (!userDataJSON) {
        alert('Error loading user data');
        return;
    }
    
    let userData;
    try {
        userData = JSON.parse(userDataJSON);
    } catch (e) {
        alert('Error parsing user data');
        return;
    }
    
    // Create a new trip
    const newTrip = {
        id: 'trip_' + Date.now(),
        destination: dest.name,
        country: dest.country,
        image: dest.image,
        startDate: '',
        endDate: '',
        status: 'planning',
        notes: '',
        style: '',
        budget: dest.priceInRands,
        duration: '',
        groupSize: ''
    };
    
    // Add trip to user's trips
    if (!userData.trips) {
        userData.trips = [];
    }
    userData.trips.push(newTrip);
    
    // Save back to localStorage
    localStorage.setItem(userDataKey, JSON.stringify(userData));
    
    // Show success message and redirect
    alert('Trip to ' + dest.name + ' has been added to your plans!');
    window.location.href = 'trips.html';
}

// ================================================================
// 5. WISHLIST FUNCTIONS
// ================================================================

function toggleWishlist(destinationId) {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        // Not logged in - save destination id and redirect to login
        localStorage.setItem('pendingWishlistId', destinationId);
        localStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = 'login.html';
        return;
    }
    
    // User is logged in - toggle wishlist
    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    
    if (!userDataJSON) {
        alert('Error loading user data');
        return;
    }
    
    let userData;
    try {
        userData = JSON.parse(userDataJSON);
    } catch (e) {
        alert('Error parsing user data');
        return;
    }
    
    // Initialize wishlist if it doesn't exist
    if (!userData.wishlist) {
        userData.wishlist = [];
    }
    
    // Check if destination is already in wishlist
    const index = userData.wishlist.indexOf(destinationId);
    
    if (index > -1) {
        // Remove from wishlist
        userData.wishlist.splice(index, 1);
    } else {
        // Add to wishlist
        userData.wishlist.push(destinationId);
    }
    
    // Save back to localStorage
    localStorage.setItem(userDataKey, JSON.stringify(userData));
    
    // Re-render destinations to update heart icons
    renderDestinations();
}

// ================================================================
// 6. MODAL FUNCTIONS
// ================================================================

function openModal(id) {
    console.log('Opening modal for ID:', id);
    
    const dest = destinations.find(function(d) {
        return d.id === id;
    });
    
    if (!dest) {
        console.error('Destination not found:', id);
        return;
    }
    
    const modal = document.getElementById('detailModal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    // Set three polaroid photos
    const img1 = document.getElementById('modalImg1');
    const img2 = document.getElementById('modalImg2');
    const img3 = document.getElementById('modalImg3');
    
    if (img1 && dest.images && dest.images.length > 0) {
        img1.src = dest.images[0];
        img1.alt = dest.name + ' - photo 1';
    }
    if (img2 && dest.images && dest.images.length > 1) {
        img2.src = dest.images[1];
        img2.alt = dest.name + ' - photo 2';
    }
    if (img3 && dest.images && dest.images.length > 2) {
        img3.src = dest.images[2];
        img3.alt = dest.name + ' - photo 3';
    }
    
    // Set destination name
    const countryEl = document.getElementById('modalCountry');
    const continentEl = document.getElementById('modalContinent');
    const detailsEl = document.getElementById('modalDetails');
    
    if (countryEl) countryEl.textContent = dest.name;
    if (continentEl) continentEl.textContent = dest.country + ' · ' + dest.continent.toUpperCase();
    if (detailsEl) {
        const details = [];
        if (dest.capital) details.push('Capital: ' + dest.capital);
        if (dest.language) details.push('Language: ' + dest.language);
        detailsEl.textContent = details.join(' · ');
    }
    
    // Set scattered tags
    const budgetTag = document.getElementById('modalBudgetShort');
    const tag1 = document.getElementById('modalTag1');
    const tag2 = document.getElementById('modalTag2');
    const tag3 = document.getElementById('modalTag3');
    const tag4 = document.getElementById('modalTag4');
    
    if (budgetTag) budgetTag.textContent = dest.priceInRands;
    if (tag1 && dest.flightTime) tag1.textContent = 'Flight: ' + dest.flightTime;
    if (tag2 && dest.timezone) tag2.textContent = 'Time Zone: ' + dest.timezone;
    if (tag3 && dest.currency) tag3.textContent = 'Currency: ' + dest.currency;
    if (tag4 && dest.population) tag4.textContent = 'Population: ' + dest.population;
    
    // Set description
    const descEl = document.getElementById('modalDescription');
    if (descEl) descEl.textContent = dest.description;
    
    // Set See card
    const attractionsList = document.getElementById('modalAttractions');
    if (attractionsList && dest.attractions) {
        let html = '';
        dest.attractions.forEach(function(item) {
            html += '<li>' + item.name + ' : ' + item.desc + ' <small>' + item.fee + '</small></li>';
        });
        attractionsList.innerHTML = html;
    }
    
    // Set Eat card
    const cuisineList = document.getElementById('modalCuisine');
    if (cuisineList && dest.cuisine) {
        let html = '';
        dest.cuisine.forEach(function(item) {
            html += '<li>' + item.name + ' : ' + item.desc + ' <small>' + item.price + '</small></li>';
        });
        cuisineList.innerHTML = html;
    }
    
    // Set Tips card
    const tipsList = document.getElementById('modalTips');
    if (tipsList && dest.tips) {
        let html = '';
        dest.tips.forEach(function(tip) {
            html += '<li>' + tip + '</li>';
        });
        tipsList.innerHTML = html;
    }
    
    // Set seasons as tags
    const seasonsTag = document.getElementById('modalSeasonsTag');
    if (seasonsTag && dest.bestTime) {
        let seasonsHtml = '';
        dest.bestTime.forEach(function(season, index) {
            const isBest = index === 0;
            let displayText = '';
            let colorClass = '';
            
            if (isBest) {
                displayText = 'Best: ' + season.season;
                colorClass = 'tag-spring';
            } else {
                displayText = season.season + ' - ' + season.description;
                if (index === 1) colorClass = 'tag-summer';
                else if (index === 2) colorClass = 'tag-autumn';
                else if (index === 3) colorClass = 'tag-winter';
            }
            seasonsHtml += '<span class="scrap-tag ' + colorClass + '">' + displayText + '</span>';
        });
        seasonsTag.innerHTML = seasonsHtml;
    }
    
    // Store destination id for the Plan This Trip button
    const planBtn = document.querySelector('.plan-btn');
    if (planBtn) {
        planBtn.setAttribute('data-dest-id', dest.id);
        // Remove old event listeners by replacing with new one
        planBtn.onclick = function() {
            const destId = parseInt(this.getAttribute('data-dest-id'));
            planThisTrip(destId);
        };
    }
    
    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Make modal functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
window.planThisTrip = planThisTrip;
window.toggleWishlist = toggleWishlist;

// ESC key to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Click overlay to close
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// ================================================================
// 7. RENDER FUNCTIONS
// ================================================================

// Render Hero Pins
function renderHeroPins() {
    const heroPinsContainer = document.querySelector('.hero-pins');
    if (!heroPinsContainer) {
        return;
    }
    
    heroPinsContainer.innerHTML = '';
    
    const colors = ['mustard', 'sky', 'lavender', 'coral'];
    const overlays = ['fa-map-pin', 'fa-landmark', 'fa-mountain', 'fa-sun'];
    const labels = ['Next stop', 'Eternal city', 'Mountain & ocean', 'Sunset paradise'];
    const rotations = ['-3deg', '3deg', '-2deg', '4deg'];
    const margins = ['10px', '30px', '-10px', '20px'];
    const gridColumns = ['1 / 2', '2 / 3', '1 / 2', '2 / 3'];
    const gridRows = ['1 / 2', '1 / 2', '2 / 3', '2 / 3'];
    
    heroDestinations.forEach(function(dest, index) {
        const pinCard = document.createElement('div');
        pinCard.className = 'pin-card';
        pinCard.style.setProperty('--rot', rotations[index]);
        pinCard.style.marginTop = margins[index];
        pinCard.style.gridColumn = gridColumns[index];
        pinCard.style.gridRow = gridRows[index];
        
        pinCard.innerHTML = `
            <span class="pushpin ${colors[index]}"><i class="fas fa-thumbtack"></i></span>
            <div class="photo">
                <img src="${dest.images[0]}" alt="${dest.name}" loading="lazy" />
                <div class="pin-overlay"><i class="fas ${overlays[index]}"></i></div>
            </div>
            <div class="pin-label">${dest.name} <small>${labels[index]}</small></div>
        `;
        
        heroPinsContainer.appendChild(pinCard);
    });
}

// Render Featured Destinations
function renderFeaturedDestinations() {
    const featuredGrid = document.querySelector('.dest-grid');
    if (!featuredGrid) {
        return;
    }
    
    featuredGrid.innerHTML = '';
    
    const rotations = ['-1.5deg', '2deg', '-1deg'];
    const margins = ['0px', '8px', '0px'];
    
    featuredDestinations.forEach(function(dest, index) {
        const card = document.createElement('div');
        card.className = 'torn-card';
        card.style.setProperty('--rot', rotations[index]);
        card.style.marginTop = margins[index];
        
        card.innerHTML = `
            <div class="card-img" onclick="openModal(${dest.id})">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
            </div>
            <div class="card-body">
                <div class="country">${dest.country}</div>
                <h3>${dest.name}</h3>
                <p>${dest.description.split('.')[0]}.</p>
                <div class="meta">
                    <span><i class="fas fa-coins"></i> ${dest.priceInRands}</span>
                    <span><i class="fas fa-leaf"></i> Best: ${dest.bestTime[0].season}</span>
                </div>
                <button class="btn-detail" onclick="openModal(${dest.id})">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        
        featuredGrid.appendChild(card);
    });
}

// ================================================================
// 8. DESTINATIONS PAGE - FILTERS AND RENDERING
// ================================================================

let filteredDestinations = [...destinations];
let wishlist = [];

// Get wishlist from localStorage
function loadWishlist() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userDataKey = 'user_' + currentUser;
        const userDataJSON = localStorage.getItem(userDataKey);
        if (userDataJSON) {
            try {
                const userData = JSON.parse(userDataJSON);
                wishlist = userData.wishlist || [];
            } catch (e) {
                wishlist = [];
            }
        }
    }
}

// DOM elements for destinations page
const destGrid = document.getElementById('destGrid');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');
const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');
const filterCount = document.getElementById('filterCount');

const continentBtns = document.querySelectorAll('#continentFilter .filter-btn');
const budgetBtns = document.querySelectorAll('#budgetFilter .filter-btn');
const typeBtns = document.querySelectorAll('#typeFilter .filter-btn');

let activeFilters = {
    continent: 'all',
    budget: 'all',
    type: 'all',
    search: '',
    sort: 'name-asc'
};

function getFilteredSortedDestinations() {
    let filtered = [...destinations];
    
    // Search filter
    if (activeFilters.search) {
        const s = activeFilters.search.toLowerCase();
        filtered = filtered.filter(function(d) {
            return d.name.toLowerCase().includes(s) || 
                   d.country.toLowerCase().includes(s);
        });
    }
    
    // Continent filter
    if (activeFilters.continent !== 'all') {
        filtered = filtered.filter(function(d) {
            return d.continent === activeFilters.continent;
        });
    }
    
    // Budget filter
    if (activeFilters.budget !== 'all') {
        filtered = filtered.filter(function(d) {
            if (activeFilters.budget === 'budget') return d.budgetLabel === 'Budget';
            if (activeFilters.budget === 'moderate') return d.budgetLabel === 'Moderate';
            if (activeFilters.budget === 'luxury') return d.budgetLabel === 'Luxury';
            return true;
        });
    }
    
    // Travel Type filter
    if (activeFilters.type !== 'all') {
        filtered = filtered.filter(function(d) {
            return d.type.some(function(t) {
                return t.toLowerCase() === activeFilters.type.toLowerCase();
            });
        });
    }
    
    // Sort
    if (activeFilters.sort === 'name-asc') {
        filtered.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    } else if (activeFilters.sort === 'name-desc') {
        filtered.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });
    } else if (activeFilters.sort === 'budget-asc') {
        filtered.sort(function(a, b) {
            return a.budget.budget - b.budget.budget;
        });
    } else if (activeFilters.sort === 'budget-desc') {
        filtered.sort(function(a, b) {
            return b.budget.budget - a.budget.budget;
        });
    }
    
    return filtered;
}

function renderDestinations() {
    if (!destGrid) {
        return;
    }
    
    loadWishlist();
    const data = getFilteredSortedDestinations();
    
    if (data.length === 0) {
        destGrid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (resultsCount) resultsCount.textContent = '0 destinations';
        return;
    }
    if (noResults) noResults.style.display = 'none';
    
    function budgetClass(label) {
        if (label === 'Budget') return 'budget';
        if (label === 'Moderate') return 'moderate';
        return 'luxury';
    }
    
    destGrid.innerHTML = '';
    
    data.forEach(function(dest) {
        const card = document.createElement('div');
        card.className = 'dest-card';
        
        let trendingBadge = '';
        if (dest.trending) {
            trendingBadge = '<span class="trending-badge"><i class="fas fa-fire"></i> Trending</span>';
        }
        
        // Check if destination is in wishlist
        const isWishlisted = wishlist.includes(dest.id);
        let wishlistClass = isWishlisted ? 'active' : '';
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                <div class="img-overlay"></div>
                ${trendingBadge}
                <button class="wishlist-btn ${wishlistClass}" data-id="${dest.id}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <span class="country"><i class="fas fa-flag"></i> ${dest.country}</span>
                    <span class="budget-tag ${budgetClass(dest.budgetLabel)}">${dest.budgetLabel}</span>
                </div>
                <h3>${dest.name}</h3>
                <p>${dest.description.split('.')[0]}.</p>
                <div class="card-meta">
                    <span><i class="fas fa-coins"></i> ${dest.priceInRands}</span>
                    <span><i class="fas fa-leaf"></i> Best: ${dest.bestTime[0].season}</span>
                </div>
                <button class="btn-detail" data-id="${dest.id}">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        
        // Click image opens modal
        const imgDiv = card.querySelector('.card-img');
        imgDiv.addEventListener('click', function(e) {
            if (e.target.closest('.wishlist-btn')) return;
            openModal(dest.id);
        });
        
        // Wishlist button
        const wishBtn = card.querySelector('.wishlist-btn');
        wishBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleWishlist(dest.id);
        });
        
        // View Details button
        const detailBtn = card.querySelector('.btn-detail');
        detailBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openModal(dest.id);
        });
        
        destGrid.appendChild(card);
    });
    
    if (resultsCount) resultsCount.textContent = data.length + ' destinations';
    updateFilterCount();
}

function updateFilterCount() {
    if (!filterCount) return;
    let count = 0;
    if (activeFilters.continent !== 'all') count++;
    if (activeFilters.budget !== 'all') count++;
    if (activeFilters.type !== 'all') count++;
    if (count > 0) {
        filterCount.textContent = count;
        filterCount.classList.add('visible');
    } else {
        filterCount.classList.remove('visible');
    }
}

function clearAllFilters() {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    document.querySelectorAll('.filter-btn[data-value="all"]').forEach(function(b) {
        b.classList.add('active');
    });
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'name-asc';
    activeFilters = { continent: 'all', budget: 'all', type: 'all', search: '', sort: 'name-asc' };
    if (filterPanel && filterPanel.classList.contains('open')) {
        filterPanel.classList.remove('open');
        if (filterToggle) filterToggle.classList.remove('open');
    }
    renderDestinations();
}

window.clearAllFilters = clearAllFilters;

// ================================================================
// 9. EVENT LISTENERS
// ================================================================

// Filter toggle
if (filterToggle && filterPanel) {
    filterToggle.addEventListener('click', function() {
        filterPanel.classList.toggle('open');
        this.classList.toggle('open');
    });
}

// Continent filters
continentBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        continentBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        this.classList.add('active');
        activeFilters.continent = this.dataset.value;
        renderDestinations();
    });
});

// Budget filters
budgetBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        budgetBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        this.classList.add('active');
        activeFilters.budget = this.dataset.value;
        renderDestinations();
    });
});

// Type filters
typeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        typeBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        this.classList.add('active');
        activeFilters.type = this.dataset.value;
        renderDestinations();
    });
});

// Search input
if (searchInput) {
    searchInput.addEventListener('input', function() {
        activeFilters.search = this.value.trim();
        renderDestinations();
    });
}

// Sort select
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        activeFilters.sort = this.value;
        renderDestinations();
    });
}

// ================================================================
// 10. INITIALIZE ON PAGE LOAD
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('TripCraft initializing...');
    console.log('Destinations loaded:', destinations.length);
    
    // Update navigation
    updateNavigation();
    
    // Render hero pins if on index page
    renderHeroPins();
    
    // Render featured destinations if on index page
    renderFeaturedDestinations();
    
    // Render destinations if on destinations page
    if (document.getElementById('destGrid')) {
        renderDestinations();
    }
    
    // Check for pending actions after login
    const currentUser = localStorage.getItem('currentUser');
    const pendingTripId = localStorage.getItem('pendingTripId');
    const pendingWishlistId = localStorage.getItem('pendingWishlistId');
    
    // Only process pending actions if user is logged in
    if (currentUser && (pendingTripId || pendingWishlistId)) {
        if (pendingTripId) {
            // Add the trip
            const destId = parseInt(pendingTripId);
            const dest = destinations.find(function(d) {
                return d.id === destId;
            });
            
            if (dest) {
                const userDataKey = 'user_' + currentUser;
                const userDataJSON = localStorage.getItem(userDataKey);
                if (userDataJSON) {
                    try {
                        let userData = JSON.parse(userDataJSON);
                        if (!userData.trips) {
                            userData.trips = [];
                        }
                        const newTrip = {
                            id: 'trip_' + Date.now(),
                            destination: dest.name,
                            country: dest.country,
                            image: dest.image,
                            startDate: '',
                            endDate: '',
                            status: 'planning',
                            notes: '',
                            style: '',
                            budget: dest.priceInRands,
                            duration: '',
                            groupSize: ''
                        };
                        userData.trips.push(newTrip);
                        localStorage.setItem(userDataKey, JSON.stringify(userData));
                        alert('Trip to ' + dest.name + ' has been added to your plans!');
                    } catch (e) {
                        console.error('Error adding trip:', e);
                    }
                }
            }
            localStorage.removeItem('pendingTripId');
            window.location.href = 'trips.html';
        }
        
        if (pendingWishlistId) {
            // Add to wishlist
            const destId = parseInt(pendingWishlistId);
            const userDataKey = 'user_' + currentUser;
            const userDataJSON = localStorage.getItem(userDataKey);
            if (userDataJSON) {
                try {
                    let userData = JSON.parse(userDataJSON);
                    if (!userData.wishlist) {
                        userData.wishlist = [];
                    }
                    if (!userData.wishlist.includes(destId)) {
                        userData.wishlist.push(destId);
                        localStorage.setItem(userDataKey, JSON.stringify(userData));
                    }
                } catch (e) {
                    console.error('Error adding to wishlist:', e);
                }
            }
            localStorage.removeItem('pendingWishlistId');
            
            // Redirect back to where they came from
            const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'destinations.html';
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectUrl;
        }
    }
    
    console.log('TripCraft initialized!');
});