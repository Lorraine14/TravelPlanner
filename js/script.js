// ================================================================
// 1. DESTINATIONS DATA 
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
        priceInRands: 'R1,500-2,800',
        budgetLabel: 'Moderate',
        type: ['city', 'culture', 'food'],
        trending: true,
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
            'Learn arigato, goes a long way',
            'Get a Suica card for trains and stores',
            'Visit temples early before crowds arrive',
            'Try conbini snacks, surprisingly good',
            'Take the Shinkansen bullet train for day trips',
            'Visit Akihabara for anime and electronics'
        ]
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
        priceInRands: 'R2,400-3,600',
        budgetLabel: 'Moderate',
        type: ['city', 'culture', 'history'],
        trending: true,
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
            'Wear comfortable shoes, cobblestones everywhere',
            'Cover shoulders and knees when entering churches',
            'Drink from public water fountains',
            'Visit the Vatican early morning to avoid crowds',
            'Learn a few Italian phrases like "Grazie"'
        ]
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
        priceInRands: 'R1,500-2,700',
        budgetLabel: 'Moderate',
        type: ['adventure', 'beach', 'nature'],
        trending: true,
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
            'Be aware of load shedding, carry a power bank',
            'Drive Chapmans Peak for spectacular views',
            'Take the ferry to Robben Island for history',
            'Shop at the Old Biscuit Mill for local crafts'
        ]
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
        priceInRands: 'R4,000-5,400',
        budgetLabel: 'Luxury',
        type: ['beach', 'romance', 'relaxation'],
        trending: true,
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
        ]
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
        priceInRands: 'R550-900',
        budgetLabel: 'Budget',
        type: ['beach', 'culture', 'nature'],
        trending: false,
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
        ]
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
        priceInRands: 'R4,000-6,000',
        budgetLabel: 'Luxury',
        type: ['city', 'culture', 'romance'],
        trending: false,
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
        ]
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
        priceInRands: 'R4,800-7,600',
        budgetLabel: 'Luxury',
        type: ['city', 'culture', 'nightlife'],
        trending: false,
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
        ]
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
        priceInRands: 'R1,600-2,300',
        budgetLabel: 'Moderate',
        type: ['culture', 'food', 'history'],
        trending: false,
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
        ]
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
        priceInRands: 'R2,400-3,600',
        budgetLabel: 'Moderate',
        type: ['city', 'beach', 'nature'],
        trending: false,
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
        ]
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
        priceInRands: 'R2,400-4,000',
        budgetLabel: 'Moderate',
        type: ['city', 'culture', 'food'],
        trending: false,
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
        ]
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
        priceInRands: 'R750-1,300',
        budgetLabel: 'Budget',
        type: ['city', 'culture', 'food'],
        trending: false,
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
        ]
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
        currency: 'Tanzanian Shilling',
        image: 'images/zanzibar1.jpg',
        images: [
            'images/zanzibar1.jpg',
            'images/zanzibar2.jpg',
            'images/zanzibar3.jpg'
        ],
        description: 'Zanzibar is a tropical island paradise off the coast of Tanzania, famous for its white sand beaches, turquoise Indian Ocean waters, rich Swahili culture, and historic Stone Town.',
        budget: { budget: 1800, moderate: 3200, luxury: 7000 },
        priceInRands: 'R1,800-3,200',
        budgetLabel: 'Moderate',
        type: ['beach', 'culture', 'adventure'],
        trending: true,
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
        ]
    }
];

// ================================================================
// 2. NAVBAR RENDERER
// ================================================================

function renderNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    const currentUser = localStorage.getItem('currentUser');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    let authHTML = '';
    if (currentUser) {
        authHTML = `
            <a href="trips.html" class="${currentPage === 'trips.html' ? 'active' : ''}">My Trips</a>
            <a href="profile.html" class="${currentPage === 'profile.html' ? 'active' : ''}">Profile</a>
            <a href="#" id="logoutBtn">Logout</a>
        `;
    } else {
        authHTML = `
            <a href="login.html" class="${currentPage === 'login.html' ? 'active' : ''}">Log In</a>
            <a href="signup.html" class="${currentPage === 'signup.html' ? 'active' : ''}">Sign Up</a>
        `;
    }

    const navLinks = [
        { href: 'index.html', label: 'Home' },
        { href: 'destinations.html', label: 'Explore' },
        { href: 'index.html#why', label: 'About' },
        { href: 'index.html#footer', label: 'Contact' }
    ];

    let linksHTML = '';
    navLinks.forEach(function(link) {
        const isActive = (currentPage === link.href || (currentPage === '' && link.href === 'index.html'));
        const activeClass = isActive ? 'active' : '';
        linksHTML += `<li><a href="${link.href}" class="${activeClass}">${link.label}</a></li>`;
    });

    navbarContainer.innerHTML = `
        <nav class="navbar" id="navbarNav">
            <a href="index.html" class="nav-logo">
                <i class="fas fa-paper-plane"></i> TripCraft
            </a>
            <ul class="nav-links" id="navLinks">
                ${linksHTML}
                <li class="nav-auth" id="navAuth">${authHTML}</li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    `;

    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinksEl = document.getElementById('navLinks');
    if (hamburger && navLinksEl) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinksEl.classList.toggle('open');
        });
    }

    // Logout handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbarNav');
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// ================================================================
// 3. FOOTER RENDERER
// ================================================================

function renderFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="footer" id="footer">
            <div class="container">
                <div class="footer-top">
                    <div class="footer-brand">
                        <h3><i class="fas fa-paper-plane"></i> TripCraft</h3>
                        <p>Your personal travel journal. Plan your adventures, organize your trips, and keep all your travel memories in one beautiful place.</p>
                    </div>
                    <div class="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="destinations.html">Destinations</a></li>
                            <li><a href="index.html#travelstyles">Travel Styles</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="index.html#why">About</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Get in Touch</h4>
                        <div class="contact-item">
                            <i class="fas fa-map-pin"></i>
                            <span>123 Traveler's Lane</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>hello@tripcraft.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+27 63 123 4567</span>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span><i class="far fa-copyright"></i> 2026 Lorraine.</span>
                </div>
            </div>
        </footer>
    `;
}

// ================================================================
// 4. HERO PINS RENDERER
// ================================================================

function renderHeroPins() {
    const container = document.getElementById('heroPinsContainer');
    if (!container) return;

    const featured = destinations.slice(0, 4);
    const colors = ['mustard', 'sky', 'lavender', 'coral'];
    const overlays = ['fa-map-pin', 'fa-landmark', 'fa-mountain', 'fa-sun'];
    const labels = ['Next stop', 'Eternal city', 'Mountain & ocean', 'Sunset paradise'];

    let html = '';
    featured.forEach(function(dest, index) {
        html += `
            <div class="pin-card" style="--rot: ${['-3deg', '3deg', '-2deg', '4deg'][index]}; grid-column: ${['1 / 2', '2 / 3', '1 / 2', '2 / 3'][index]}; grid-row: ${['1 / 2', '1 / 2', '2 / 3', '2 / 3'][index]}; margin-top: ${['10px', '30px', '-10px', '20px'][index]};">
                <span class="pushpin ${colors[index]}"><i class="fas fa-thumbtack"></i></span>
                <div class="photo">
                    <img src="${dest.images[0]}" alt="${dest.name}" loading="lazy" />
                    <div class="pin-overlay"><i class="fas ${overlays[index]}"></i></div>
                </div>
                <div class="pin-label">${dest.name} <small>${labels[index]}</small></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ================================================================
// 5. FEATURED DESTINATIONS RENDERER
// ================================================================

function renderFeaturedDestinations() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featured = destinations.slice(0, 3);
    const rotations = ['-1.5deg', '2deg', '-1deg'];

    let html = '';
    featured.forEach(function(dest, index) {
        html += `
            <div class="torn-card" style="--rot: ${rotations[index]}; margin-top: ${index === 1 ? '8px' : '0'};">
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
            </div>
        `;
    });
    grid.innerHTML = html;
}

// ================================================================
// 6. DESTINATION MODAL
// ================================================================

function openModal(id) {
    const dest = destinations.find(function(d) { return d.id === id; });
    if (!dest) return;

    const modal = document.getElementById('detailModal');
    if (!modal) return;

    document.getElementById('modalImg1').src = dest.images[0] || dest.image;
    document.getElementById('modalImg2').src = dest.images[1] || dest.image;
    document.getElementById('modalImg3').src = dest.images[2] || dest.image;

    document.getElementById('modalCountry').textContent = dest.name;
    document.getElementById('modalContinent').textContent = dest.country + ' · ' + dest.continent.toUpperCase();
    document.getElementById('modalDetails').textContent = 'Capital: ' + dest.capital + ' · Language: ' + dest.language;
    document.getElementById('modalDescription').textContent = dest.description;

    document.getElementById('modalTag1').textContent = 'Flight: ' + dest.flightTime;
    document.getElementById('modalTag2').textContent = 'Time Zone: ' + dest.timezone;
    document.getElementById('modalTag3').textContent = 'Currency: ' + dest.currency;
    document.getElementById('modalBudgetShort').textContent = 'Budget: ' + dest.priceInRands;
    document.getElementById('modalTag4').textContent = 'Population: ' + dest.population;

    const seasonsContainer = document.getElementById('modalSeasonsTag');
    if (seasonsContainer) {
        let seasonsHTML = '';
        dest.bestTime.forEach(function(season, index) {
            const isBest = index === 0;
            const colorClass = isBest ? 'tag-spring' : ['tag-summer', 'tag-autumn', 'tag-winter'][index - 1] || '';
            const displayText = isBest ? 'Best: ' + season.season : season.season + ' - ' + season.description;
            seasonsHTML += `<span class="scrap-tag ${colorClass}">${displayText}</span>`;
        });
        seasonsContainer.innerHTML = seasonsHTML;
    }

    const attractionsList = document.getElementById('modalAttractions');
    if (attractionsList) {
        attractionsList.innerHTML = dest.attractions.map(function(a) {
            return '<li>' + a.name + ' : ' + a.desc + ' <small>' + a.fee + '</small></li>';
        }).join('');
    }

    const cuisineList = document.getElementById('modalCuisine');
    if (cuisineList) {
        cuisineList.innerHTML = dest.cuisine.map(function(c) {
            return '<li>' + c.name + ' : ' + c.desc + ' <small>' + c.price + '</small></li>';
        }).join('');
    }

    const tipsList = document.getElementById('modalTips');
    if (tipsList) {
        tipsList.innerHTML = dest.tips.map(function(tip) {
            return '<li>' + tip + '</li>';
        }).join('');
    }

    const planBtn = modal.querySelector('.plan-btn');
    if (planBtn) {
        planBtn.setAttribute('data-dest-id', dest.id);
        planBtn.onclick = function() {
            planThisTrip(dest.id);
        };
    }

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

// ================================================================
// 7. PLAN TRIP FUNCTION
// ================================================================

function planThisTrip(destinationId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        localStorage.setItem('pendingTripId', destinationId);
        window.location.href = 'login.html';
        return;
    }

    const dest = destinations.find(function(d) { return d.id === destinationId; });
    if (!dest) return;

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) return;

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) { return; }
    if (!userData.trips) userData.trips = [];

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
        groupSize: '',
        plan: {
            overview: {
                destination: dest.name,
                country: dest.country,
                startDate: '',
                endDate: '',
                budget: dest.priceInRands,
                notes: ''
            },
            days: [],
            accommodation: [],
            transport: [],
            activities: [],
            packing: [],
            expenses: [],
            journal: []
        }
    };

    userData.trips.push(newTrip);
    localStorage.setItem(userDataKey, JSON.stringify(userData));

    alert('Trip to ' + dest.name + ' has been added to your plans!');
    closeModal();
    window.location.href = 'plan.html?id=' + newTrip.id;
}

// ================================================================
// 8. DESTINATIONS PAGE - FILTERS & RENDER
// ================================================================

let wishlist = [];
let activeFilters = { continent: 'all', budget: 'all', type: 'all', search: '', sort: 'name-asc' };

function loadWishlist() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userDataKey = 'user_' + currentUser;
        const userDataJSON = localStorage.getItem(userDataKey);
        if (userDataJSON) {
            try {
                const userData = JSON.parse(userDataJSON);
                wishlist = userData.wishlist || [];
            } catch (e) { wishlist = []; }
        }
    }
}

function toggleWishlist(destinationId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        localStorage.setItem('pendingWishlistId', destinationId);
        window.location.href = 'login.html';
        return;
    }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) return;

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) { return; }
    if (!userData.wishlist) userData.wishlist = [];

    const index = userData.wishlist.indexOf(destinationId);
    if (index > -1) {
        userData.wishlist.splice(index, 1);
    } else {
        userData.wishlist.push(destinationId);
    }

    localStorage.setItem(userDataKey, JSON.stringify(userData));
    renderDestinations();
}

function renderDestinations() {
    const grid = document.getElementById('destGrid');
    const noResults = document.getElementById('noResults');
    const countEl = document.getElementById('resultsCount');
    if (!grid) return;

    loadWishlist();
    let filtered = [...destinations];

    if (activeFilters.search) {
        const s = activeFilters.search.toLowerCase();
        filtered = filtered.filter(function(d) {
            return d.name.toLowerCase().includes(s) || d.country.toLowerCase().includes(s);
        });
    }
    if (activeFilters.continent !== 'all') {
        filtered = filtered.filter(function(d) { return d.continent === activeFilters.continent; });
    }
    if (activeFilters.budget !== 'all') {
        filtered = filtered.filter(function(d) { return d.budgetLabel.toLowerCase() === activeFilters.budget; });
    }
    if (activeFilters.type !== 'all') {
        filtered = filtered.filter(function(d) { return d.type.includes(activeFilters.type); });
    }

    if (activeFilters.sort === 'name-asc') {
        filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });
    } else if (activeFilters.sort === 'name-desc') {
        filtered.sort(function(a, b) { return b.name.localeCompare(a.name); });
    } else if (activeFilters.sort === 'budget-asc') {
        filtered.sort(function(a, b) { 
            const priceA = parseInt(a.priceInRands.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.priceInRands.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        });
    } else if (activeFilters.sort === 'budget-desc') {
        filtered.sort(function(a, b) {
            const priceA = parseInt(a.priceInRands.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.priceInRands.replace(/[^0-9]/g, ''));
            return priceB - priceA;
        });
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (countEl) countEl.textContent = '0 destinations';
        return;
    }
    if (noResults) noResults.style.display = 'none';
    if (countEl) countEl.textContent = filtered.length + ' destinations';

    let html = '';
    filtered.forEach(function(dest) {
        const isWishlisted = wishlist.includes(dest.id);
        const budgetClass = dest.budgetLabel.toLowerCase();
        const trendingBadge = dest.trending ? '<span class="trending-badge"><i class="fas fa-fire"></i> Trending</span>' : '';

        html += `
            <div class="dest-card">
                <div class="card-img" onclick="openModal(${dest.id})">
                    <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
                    <div class="img-overlay"></div>
                    ${trendingBadge}
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${dest.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="card-body">
                    <div class="card-top">
                        <span class="country"><i class="fas fa-flag"></i> ${dest.country}</span>
                        <span class="budget-tag ${budgetClass}">${dest.budgetLabel}</span>
                    </div>
                    <h3>${dest.name}</h3>
                    <p>${dest.description.split('.')[0]}.</p>
                    <div class="card-meta">
                        <span><i class="fas fa-coins"></i> ${dest.priceInRands}</span>
                        <span><i class="fas fa-leaf"></i> Best: ${dest.bestTime[0].season}</span>
                    </div>
                    <button class="btn-detail" onclick="openModal(${dest.id})">View Details <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
    updateFilterCount();
}

function updateFilterCount() {
    const countEl = document.getElementById('filterCount');
    if (!countEl) return;
    let count = 0;
    if (activeFilters.continent !== 'all') count++;
    if (activeFilters.budget !== 'all') count++;
    if (activeFilters.type !== 'all') count++;
    if (count > 0) {
        countEl.textContent = count;
        countEl.classList.add('visible');
    } else {
        countEl.classList.remove('visible');
    }
}

function clearAllFilters() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.filter-btn[data-value="all"]').forEach(function(b) { b.classList.add('active'); });
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'name-asc';
    activeFilters = { continent: 'all', budget: 'all', type: 'all', search: '', sort: 'name-asc' };
    renderDestinations();
}

// ================================================================
// 9. TRIPS PAGE RENDERER
// ================================================================

function renderTripsPage(userData) {
    const tripsGrid = document.getElementById('tripsGrid');
    const wishlistGrid = document.getElementById('wishlistGrid');
    const allGrid = document.getElementById('allGrid');
    const totalTripsEl = document.getElementById('totalTrips');
    const upcomingTripsEl = document.getElementById('upcomingTrips');
    const completedTripsEl = document.getElementById('completedTrips');
    const wishlistCountEl = document.getElementById('wishlistCount');
    const tripsBadge = document.getElementById('tripsBadge');
    const wishlistBadge = document.getElementById('wishlistBadge');

    const trips = userData.trips || [];
    const wishlistItems = userData.wishlist || [];

    const total = trips.length;
    const upcoming = trips.filter(function(t) { return t.status === 'upcoming' || t.status === 'planning'; }).length;
    const completed = trips.filter(function(t) { return t.status === 'completed'; }).length;

    if (totalTripsEl) totalTripsEl.textContent = total;
    if (upcomingTripsEl) upcomingTripsEl.textContent = upcoming;
    if (completedTripsEl) completedTripsEl.textContent = completed;
    if (tripsBadge) tripsBadge.textContent = total;
    if (wishlistCountEl) wishlistCountEl.textContent = wishlistItems.length;
    if (wishlistBadge) wishlistBadge.textContent = wishlistItems.length;

    // Render trips
    if (tripsGrid) {
        if (trips.length === 0) {
            tripsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>No trips planned yet</h3>
                    <p>Start planning your next adventure today!</p>
                    <a href="destinations.html" class="empty-btn">
                        <i class="fas fa-compass"></i> Explore Destinations
                    </a>
                </div>
            `;
        } else {
            const sortedTrips = [...trips].sort(function(a, b) {
                const order = { planning: 0, upcoming: 1, completed: 2 };
                return (order[a.status] || 1) - (order[b.status] || 1);
            });
            let html = '';
            sortedTrips.forEach(function(trip) {
                html += createTripCardHTML(trip, 'trip');
            });
            tripsGrid.innerHTML = html;
        }
    }

    // Render wishlist
    if (wishlistGrid) {
        if (wishlistItems.length === 0) {
            wishlistGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-heart" style="color:var(--coral);opacity:0.3;"></i>
                    <h3>Your wishlist is empty</h3>
                    <p>Start exploring destinations and save your favorites!</p>
                    <a href="destinations.html" class="empty-btn">
                        <i class="fas fa-compass"></i> Explore Destinations
                    </a>
                </div>
            `;
        } else {
            let html = '';
            wishlistItems.forEach(function(destId) {
                const dest = destinations.find(function(d) { return d.id === destId; });
                if (!dest) return;
                const wishlistTrip = {
                    id: destId,
                    destination: dest.name,
                    country: dest.country,
                    image: dest.image,
                    budget: dest.priceInRands,
                    status: 'wishlist'
                };
                html += createTripCardHTML(wishlistTrip, 'wishlist');
            });
            wishlistGrid.innerHTML = html;
        }
    }

    // Render all
    if (allGrid) {
        if (trips.length === 0 && wishlistItems.length === 0) {
            allGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Nothing here yet</h3>
                    <p>Start planning trips or saving destinations to your wishlist!</p>
                    <a href="destinations.html" class="empty-btn">
                        <i class="fas fa-compass"></i> Explore Destinations
                    </a>
                </div>
            `;
        } else {
            let html = '';
            const sortedTrips = [...trips].sort(function(a, b) {
                const order = { planning: 0, upcoming: 1, completed: 2 };
                return (order[a.status] || 1) - (order[b.status] || 1);
            });
            sortedTrips.forEach(function(trip) {
                html += createTripCardHTML(trip, 'trip');
            });
            wishlistItems.forEach(function(destId) {
                const dest = destinations.find(function(d) { return d.id === destId; });
                if (!dest) return;
                const wishlistTrip = {
                    id: destId,
                    destination: dest.name,
                    country: dest.country,
                    image: dest.image,
                    budget: dest.priceInRands,
                    status: 'wishlist'
                };
                html += createTripCardHTML(wishlistTrip, 'wishlist');
            });
            allGrid.innerHTML = html;
        }
    }

    setupTabListeners();
}

function createTripCardHTML(trip, type) {
    const image = trip.image || 'images/default.jpg';
    const startDate = trip.startDate ? new Date(trip.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'TBD';
    const endDate = trip.endDate ? new Date(trip.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'TBD';

    let statusLabel = 'Planning';
    let statusClass = 'planning';
    if (type === 'wishlist') {
        statusLabel = 'Wishlist';
        statusClass = 'wishlist';
    } else if (trip.status === 'upcoming') {
        statusLabel = 'Upcoming';
        statusClass = 'upcoming';
    } else if (trip.status === 'completed') {
        statusLabel = 'Completed';
        statusClass = 'completed';
    }

    const notesPreview = trip.notes && trip.notes.length > 0 ?
        '<div class="trip-notes"><i class="fas fa-sticky-note"></i> ' + trip.notes.substring(0, 80) + (trip.notes.length > 80 ? '...' : '') + '</div>' :
        '';

    let actionsHTML = '';
    if (type === 'wishlist') {
        actionsHTML = `
            <button class="trip-btn success" onclick="addWishlistToTrip(${trip.id})">
                <i class="fas fa-plus"></i> Add to Trip
            </button>
            <button class="trip-btn danger" onclick="removeFromWishlist(${trip.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
    } else {
        actionsHTML = `
            <button class="trip-btn plan-btn-trip" onclick="goToPlanPage('${trip.id}')">
                <i class="fas fa-pencil-alt"></i> Plan Trip
            </button>
            <button class="trip-btn danger" onclick="deleteTrip('${trip.id}')">
                <i class="fas fa-trash"></i> Delete
            </button>
        `;
    }

    return `
        <div class="trip-card">
            <div class="trip-img">
                <img src="${image}" alt="${trip.destination}" loading="lazy" />
                <span class="trip-status ${statusClass}">${statusLabel}</span>
            </div>
            <div class="trip-body">
                <div class="trip-destination">
                    <i class="fas fa-map-pin"></i> ${trip.country || ''}
                </div>
                <h3>${trip.destination}</h3>
                ${type !== 'wishlist' ? `
                <div class="trip-dates">
                    <span><i class="fas fa-calendar-alt"></i> ${startDate}</span>
                    <span><i class="fas fa-arrow-right"></i></span>
                    <span><i class="fas fa-calendar-alt"></i> ${endDate}</span>
                </div>
                ` : ''}
                ${notesPreview}
                <div class="trip-meta">
                    ${trip.budget ? `<span><i class="fas fa-coins"></i> ${trip.budget}</span>` : ''}
                    ${trip.style ? `<span><i class="fas fa-${trip.style === 'luxury' ? 'crown' : trip.style === 'budget' ? 'coins' : 'users'}"></i> ${trip.style}</span>` : ''}
                </div>
                <div class="trip-actions">
                    ${actionsHTML}
                </div>
            </div>
        </div>
    `;
}

function setupTabListeners() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = {
        trips: document.getElementById('tabTrips'),
        wishlist: document.getElementById('tabWishlist'),
        all: document.getElementById('tabAll')
    };

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            Object.values(tabContents).forEach(function(content) {
                if (content) content.classList.remove('active');
            });
            const tabName = this.dataset.tab;
            if (tabContents[tabName]) {
                tabContents[tabName].classList.add('active');
            }
        });
    });
}

// ================================================================
// 10. TRIP ACTIONS
// ================================================================

function goToPlanPage(tripId) {
    window.location.href = 'plan.html?id=' + tripId;
}

function addWishlistToTrip(destId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) { window.location.href = 'login.html'; return; }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) return;

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) { return; }
    if (!userData.trips) userData.trips = [];

    const dest = destinations.find(function(d) { return d.id === destId; });
    if (!dest) return;

    const alreadyTrip = userData.trips.some(function(t) { return t.destination === dest.name; });
    if (alreadyTrip) {
        alert('You already have a trip to ' + dest.name + '!');
        return;
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
        groupSize: '',
        plan: {
            overview: {
                destination: dest.name,
                country: dest.country,
                startDate: '',
                endDate: '',
                budget: dest.priceInRands,
                notes: ''
            },
            days: [],
            accommodation: [],
            transport: [],
            activities: [],
            packing: [],
            expenses: [],
            journal: []
        }
    };

    userData.trips.push(newTrip);

    const index = userData.wishlist.indexOf(destId);
    if (index > -1) {
        userData.wishlist.splice(index, 1);
    }

    localStorage.setItem(userDataKey, JSON.stringify(userData));
    
    if (document.getElementById('tripsGrid')) {
        renderTripsPage(userData);
    }

    alert(dest.name + ' has been added to your trips!');
    goToPlanPage(newTrip.id);
}

function removeFromWishlist(destId) {
    if (!confirm('Remove this destination from your wishlist?')) return;

    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) { window.location.href = 'login.html'; return; }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) return;

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) { return; }
    if (!userData.wishlist) userData.wishlist = [];

    const index = userData.wishlist.indexOf(destId);
    if (index > -1) {
        userData.wishlist.splice(index, 1);
        localStorage.setItem(userDataKey, JSON.stringify(userData));
        renderTripsPage(userData);
    }
}

function deleteTrip(tripId) {
    if (!confirm('Are you sure you want to delete this trip?')) return;

    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) { window.location.href = 'login.html'; return; }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) return;

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) { return; }
    if (!userData.trips) userData.trips = [];

    const index = userData.trips.findIndex(function(t) { return t.id === tripId; });
    if (index > -1) {
        userData.trips.splice(index, 1);
        localStorage.setItem(userDataKey, JSON.stringify(userData));
        renderTripsPage(userData);
    }
}

// ================================================================
// 11. LOGIN PAGE
// ================================================================

function setupLoginPage() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    if (localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
        return;
    }

    // Password toggle
    const toggleBtn = document.getElementById('toggleLoginPassword');
    const passwordInput = document.getElementById('loginPassword');
    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const rememberMe = document.getElementById('rememberMe').checked;

        const authError = document.getElementById('authError');
        const authSuccess = document.getElementById('authSuccess');
        const errorMessage = document.getElementById('errorMessage');

        authError.classList.remove('show');
        authSuccess.classList.remove('show');

        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password';
            authError.classList.add('show');
            return;
        }

        const userDataKey = 'user_' + username;
        const userDataJSON = localStorage.getItem(userDataKey);

        if (!userDataJSON) {
            errorMessage.textContent = 'Username not found. Please sign up first.';
            authError.classList.add('show');
            return;
        }

        let userData;
        try { userData = JSON.parse(userDataJSON); } catch (e) {
            errorMessage.textContent = 'Error reading user data. Please try again.';
            authError.classList.add('show');
            return;
        }

        if (userData.password !== password) {
            errorMessage.textContent = 'Incorrect password. Please try again.';
            authError.classList.add('show');
            return;
        }

        localStorage.setItem('currentUser', username);
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }

        authSuccess.classList.add('show');
        authSuccess.querySelector('span').textContent = 'Welcome back, ' + username + '!';

        form.querySelectorAll('input, button').forEach(function(el) { el.disabled = true; });

        setTimeout(function() {
            const pendingTripId = localStorage.getItem('pendingTripId');
            const pendingWishlistId = localStorage.getItem('pendingWishlistId');
            if (pendingTripId) {
                localStorage.removeItem('pendingTripId');
                window.location.href = 'trips.html';
            } else if (pendingWishlistId) {
                localStorage.removeItem('pendingWishlistId');
                window.location.href = 'destinations.html';
            } else {
                window.location.href = 'trips.html';
            }
        }, 1200);
    });
}

// ================================================================
// 12. SIGNUP PAGE
// ================================================================

function setupSignupPage() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    if (localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
        return;
    }

    // Password toggle
    const toggleBtn = document.getElementById('toggleSignupPassword');
    const passwordInput = document.getElementById('signupPassword');
    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    }

    // Password strength
    const strengthBars = [
        document.getElementById('strengthBar1'),
        document.getElementById('strengthBar2'),
        document.getElementById('strengthBar3')
    ];
    const strengthLabel = document.getElementById('strengthLabel');

    function checkPasswordStrength(password) {
        let score = 0;
        if (password.length >= 6) score++;
        if (password.length >= 10) score++;
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return Math.min(score, 3);
    }

    function updateStrength(password) {
        const score = checkPasswordStrength(password);
        let label = 'Weak';
        let className = 'weak';

        strengthBars.forEach(function(bar, index) {
            bar.classList.remove('active', 'weak', 'medium', 'strong');
            if (index < score) {
                bar.classList.add('active');
                if (score === 1) bar.classList.add('weak');
                else if (score === 2) bar.classList.add('medium');
                else if (score === 3) bar.classList.add('strong');
            }
        });

        if (password.length === 0) {
            strengthLabel.textContent = 'Enter a password';
            strengthLabel.className = 'password-strength-label';
            return;
        }

        if (score === 0 || score === 1) {
            label = 'Weak';
            className = 'weak';
        } else if (score === 2) {
            label = 'Medium';
            className = 'medium';
        } else {
            label = 'Strong';
            className = 'strong';
        }

        strengthLabel.textContent = label;
        strengthLabel.className = 'password-strength-label ' + className;
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updateStrength(this.value);
        });
    }

    // Username availability check
    const usernameInput = document.getElementById('signupUsername');
    if (usernameInput) {
        usernameInput.addEventListener('blur', function() {
            const username = this.value.trim();
            const hint = this.parentElement.querySelector('.field-hint');
            if (username.length >= 3) {
                const userDataKey = 'user_' + username;
                if (localStorage.getItem(userDataKey)) {
                    this.classList.add('error');
                    this.style.borderColor = 'var(--coral)';
                    if (hint) {
                        hint.innerHTML = '<i class="fas fa-exclamation-circle" style="color:var(--coral);"></i> Username already taken';
                        hint.style.color = 'var(--coral)';
                    }
                } else {
                    this.classList.remove('error');
                    this.style.borderColor = '';
                    if (hint) {
                        hint.innerHTML = '<i class="fas fa-check-circle" style="color:#4CAF50;"></i> Username available';
                        hint.style.color = '#4CAF50';
                    }
                }
            } else {
                this.style.borderColor = '';
                if (hint) {
                    hint.innerHTML = '<i class="fas fa-info-circle"></i> Must be at least 3 characters';
                    hint.style.color = '';
                }
            }
        });
    }

    // Password match confirmation
    const confirmPasswordInput = document.getElementById('signupConfirmPassword');
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value.length > 0 && this.value !== passwordInput.value) {
                this.style.borderColor = 'var(--coral)';
                this.classList.add('error');
            } else {
                this.style.borderColor = '';
                this.classList.remove('error');
                if (this.value.length > 0) {
                    this.style.borderColor = '#4CAF50';
                }
            }
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstname = document.getElementById('signupFirstname').value.trim();
        const lastname = document.getElementById('signupLastname').value.trim();
        const username = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        const authError = document.getElementById('authError');
        const authSuccess = document.getElementById('authSuccess');
        const errorMessage = document.getElementById('errorMessage');

        authError.classList.remove('show');
        authSuccess.classList.remove('show');

        if (!firstname || !lastname || !username || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'Please fill in all fields';
            authError.classList.add('show');
            return;
        }

        if (username.length < 3) {
            errorMessage.textContent = 'Username must be at least 3 characters';
            authError.classList.add('show');
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters';
            authError.classList.add('show');
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match';
            authError.classList.add('show');
            return;
        }

        const userDataKey = 'user_' + username;
        if (localStorage.getItem(userDataKey)) {
            errorMessage.textContent = 'Username "' + username + '" is already taken. Please choose another.';
            authError.classList.add('show');
            return;
        }

        const userData = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            createdAt: new Date().toISOString(),
            trips: [],
            wishlist: []
        };

        localStorage.setItem(userDataKey, JSON.stringify(userData));

        authSuccess.classList.add('show');
        authSuccess.querySelector('span').textContent = 'Account created successfully, ' + firstname + '!';

        form.querySelectorAll('input, button').forEach(function(el) { el.disabled = true; });

        setTimeout(function() {
            window.location.href = 'login.html';
        }, 1500);
    });
}

// ================================================================
// 13. PROFILE PAGE
// ================================================================

function setupProfilePage() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
        return;
    }

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
        return;
    }

    const firstnameInput = document.getElementById('profileFirstname');
    const lastnameInput = document.getElementById('profileLastname');
    const emailInput = document.getElementById('profileEmail');
    const bioInput = document.getElementById('profileBio');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const displayName = document.getElementById('displayName');
    const displayUsername = document.getElementById('displayUsername');
    const avatarInitials = document.getElementById('avatarInitials');
    const memberSince = document.getElementById('memberSince');
    const editMode = document.getElementById('editMode');

    function populateProfile() {
        const firstname = userData.firstname || '';
        const lastname = userData.lastname || '';
        const email = userData.email || '';
        const bio = userData.bio || '';

        firstnameInput.value = firstname;
        lastnameInput.value = lastname;
        emailInput.value = email;
        bioInput.value = bio;

        const fullName = firstname + ' ' + lastname;
        displayName.textContent = fullName.trim() || userData.username;
        displayUsername.textContent = '@' + userData.username;
        const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase() || userData.username.charAt(0).toUpperCase();
        avatarInitials.textContent = initials;

        if (userData.createdAt) {
            const date = new Date(userData.createdAt);
            memberSince.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        } else {
            memberSince.textContent = 'January 2026';
        }
    }

    function setEditMode(isEditing) {
        const inputs = [firstnameInput, lastnameInput, emailInput, bioInput, 
                       currentPasswordInput, newPasswordInput, confirmPasswordInput];
        inputs.forEach(function(input) { input.disabled = !isEditing; });

        if (isEditing) {
            document.querySelector('.profile-card').classList.add('profile-edit-mode');
            document.querySelector('.profile-card').classList.remove('profile-view-mode');
        } else {
            document.querySelector('.profile-card').classList.remove('profile-edit-mode');
            document.querySelector('.profile-card').classList.add('profile-view-mode');
        }

        editMode.value = isEditing ? 'true' : 'false';
        document.getElementById('editProfileBtn').style.display = isEditing ? 'none' : 'inline-flex';
        document.getElementById('saveProfileBtn').style.display = isEditing ? 'inline-flex' : 'none';
        document.getElementById('cancelEditBtn').style.display = isEditing ? 'inline-flex' : 'none';
    }

    populateProfile();

    document.getElementById('editProfileBtn').addEventListener('click', function() {
        setEditMode(true);
        document.getElementById('profileSuccess').classList.remove('show');
        document.getElementById('profileError').classList.remove('show');
    });

    document.getElementById('cancelEditBtn').addEventListener('click', function() {
        populateProfile();
        setEditMode(false);
        currentPasswordInput.value = '';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
        document.getElementById('profileSuccess').classList.remove('show');
        document.getElementById('profileError').classList.remove('show');
    });

    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const success = document.getElementById('profileSuccess');
        const error = document.getElementById('profileError');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        success.classList.remove('show');
        error.classList.remove('show');

        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const email = emailInput.value.trim();
        const bio = bioInput.value.trim();
        const currentPassword = currentPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!firstname || !lastname) {
            errorMessage.textContent = 'First name and last name are required';
            error.classList.add('show');
            return;
        }

        if (!email || !email.includes('@') || !email.includes('.')) {
            errorMessage.textContent = 'Please enter a valid email address';
            error.classList.add('show');
            return;
        }

        if (newPassword || confirmPassword || currentPassword) {
            if (!currentPassword) {
                errorMessage.textContent = 'Please enter your current password to change it';
                error.classList.add('show');
                return;
            }
            if (currentPassword !== userData.password) {
                errorMessage.textContent = 'Current password is incorrect';
                error.classList.add('show');
                return;
            }
            if (newPassword.length < 6) {
                errorMessage.textContent = 'New password must be at least 6 characters';
                error.classList.add('show');
                return;
            }
            if (newPassword !== confirmPassword) {
                errorMessage.textContent = 'New passwords do not match';
                error.classList.add('show');
                return;
            }
            userData.password = newPassword;
        }

        userData.firstname = firstname;
        userData.lastname = lastname;
        userData.email = email;
        userData.bio = bio;

        localStorage.setItem(userDataKey, JSON.stringify(userData));

        populateProfile();
        successMessage.textContent = 'Profile updated successfully!';
        success.classList.add('show');
        setEditMode(false);
        currentPasswordInput.value = '';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    });

    // Password toggle
    document.querySelectorAll('.toggle-eye').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const input = this.closest('.password-toggle').querySelector('input');
            if (input) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-eye');
                    icon.classList.toggle('fa-eye-slash');
                }
            }
        });
    });

    document.getElementById('deleteAccountBtn').addEventListener('click', function() {
        if (!confirm('WARNING: This will permanently delete your account and all your data.\n\nAre you sure you want to continue?')) return;
        if (!confirm('This action cannot be undone. All your data will be lost forever.\n\nAre you absolutely sure?')) return;

        localStorage.removeItem(userDataKey);
        localStorage.removeItem('currentUser');
        alert('Your account has been deleted. We\'re sorry to see you go!');
        window.location.href = 'index.html';
    });

    document.getElementById('avatarEditBtn').addEventListener('click', function() {
        alert('📸 Avatar customization coming soon!\n\nFor now, your avatar shows your initials.');
    });
}

// ================================================================
// 14. PLAN PAGE 
// ================================================================

function renderPlanPage() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const userDataKey = 'user_' + currentUser;
    const userDataJSON = localStorage.getItem(userDataKey);
    if (!userDataJSON) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
        return;
    }

    let userData;
    try { userData = JSON.parse(userDataJSON); } catch (e) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get('id');

    if (!tripId) {
        alert('No trip selected. Redirecting to trips page.');
        window.location.href = 'trips.html';
        return;
    }

    // Find the trip
    let trip = null;
    let tripIndex = -1;
    
    if (userData.trips) {
        userData.trips.forEach(function(t, index) {
            if (t.id === tripId) {
                trip = t;
                tripIndex = index;
            }
        });
    }

    if (!trip) {
        alert('Trip not found. Redirecting to trips page.');
        window.location.href = 'trips.html';
        return;
    }

    if (!trip.plan) {
        trip.plan = {
            overview: {
                destination: trip.destination || '',
                country: trip.country || '',
                startDate: trip.startDate || '',
                endDate: trip.endDate || '',
                budget: trip.budget || '',
                notes: trip.notes || ''
            },
            days: [],
            accommodation: [],
            transport: [],
            activities: [],
            packing: [],
            expenses: [],
            journal: []
        };
        // Save the newly created plan
        userData.trips[tripIndex] = trip;
        localStorage.setItem(userDataKey, JSON.stringify(userData));
    }

    // DOM Elements
    const planDestination = document.getElementById('planDestination');
    const planStatus = document.getElementById('planStatus');
    const overviewDestination = document.getElementById('overviewDestination');
    const overviewCountry = document.getElementById('overviewCountry');
    const overviewStartDate = document.getElementById('overviewStartDate');
    const overviewEndDate = document.getElementById('overviewEndDate');
    const overviewBudget = document.getElementById('overviewBudget');
    const overviewNotes = document.getElementById('overviewNotes');

    const itineraryContainer = document.getElementById('itineraryContainer');
    const accommodationContainer = document.getElementById('accommodationContainer');
    const transportContainer = document.getElementById('transportContainer');
    const activitiesContainer = document.getElementById('activitiesContainer');
    const packingContainer = document.getElementById('packingContainer');
    const budgetContainer = document.getElementById('budgetContainer');
    const journalContainer = document.getElementById('journalContainer');

    // Populate overview
    function populateOverview() {
        const plan = trip.plan;
        planDestination.textContent = trip.destination || 'Trip';
        planStatus.value = trip.status || 'planning';
        overviewDestination.value = plan.overview.destination || trip.destination || '';
        overviewCountry.value = plan.overview.country || trip.country || '';
        overviewStartDate.value = plan.overview.startDate || trip.startDate || '';
        overviewEndDate.value = plan.overview.endDate || trip.endDate || '';
        overviewBudget.value = plan.overview.budget || trip.budget || '';
        overviewNotes.value = plan.overview.notes || trip.notes || '';
    }

    // SAVE FUNCTION
    function saveAll() {
        // Save overview
        trip.plan.overview.destination = overviewDestination.value;
        trip.plan.overview.country = overviewCountry.value;
        trip.plan.overview.startDate = overviewStartDate.value;
        trip.plan.overview.endDate = overviewEndDate.value;
        trip.plan.overview.budget = overviewBudget.value;
        trip.plan.overview.notes = overviewNotes.value;
        
        // Update main trip fields
        trip.destination = trip.plan.overview.destination || trip.destination;
        trip.country = trip.plan.overview.country || trip.country;
        trip.startDate = trip.plan.overview.startDate || trip.startDate;
        trip.endDate = trip.plan.overview.endDate || trip.endDate;
        trip.budget = trip.plan.overview.budget || trip.budget;
        trip.notes = trip.plan.overview.notes || trip.notes;
        trip.status = planStatus.value;

        // Update the trip in userData.trips
        userData.trips[tripIndex] = trip;

        // Save to localStorage
        localStorage.setItem(userDataKey, JSON.stringify(userData));

        // Show saved feedback
        const saveBtn = document.getElementById('planSaveBtn');
        saveBtn.classList.add('saved');
        setTimeout(function() {
            saveBtn.classList.remove('saved');
        }, 2000);
    }

    // Populate overview on load
    populateOverview();

    // Save button
    document.getElementById('planSaveBtn').addEventListener('click', function() {
        saveAll();
        alert('Trip saved successfully!');
    });

    // Status change
    planStatus.addEventListener('change', function() {
        saveAll();
    });

    // Auto-save overview fields on change
    [overviewDestination, overviewCountry, overviewStartDate, overviewEndDate, overviewBudget, overviewNotes].forEach(function(field) {
        field.addEventListener('change', saveAll);
    });

    // ================================================================
    // SIDEBAR NAVIGATION
    // ================================================================

    document.querySelectorAll('.plan-sidebar-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.plan-sidebar-btn').forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            const section = this.dataset.section;
            document.querySelectorAll('.plan-section').forEach(function(s) {
                s.classList.remove('active');
            });
            const targetSection = document.getElementById('section' + section.charAt(0).toUpperCase() + section.slice(1));
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // ================================================================
    // ITINERARY FUNCTIONS
    // ================================================================

    function renderItinerary() {
        const days = trip.plan.days || [];
        if (days.length === 0) {
            itineraryContainer.innerHTML = `
                <div class="empty-state" style="padding:30px 20px;">
                    <p style="color:#7A7A8E; font-size:0.9rem;">No days planned yet. Click "Add Day" to start building your itinerary.</p>
                </div>
            `;
            return;
        }

        let html = '';
        days.forEach(function(day, index) {
            html += `
                <div class="day-card" data-index="${index}">
                    <div class="day-header">
                        <h3>Day ${index + 1}</h3>
                        <div class="day-date">
                            <input type="date" class="day-date-input" value="${day.date || ''}" data-index="${index}" />
                        </div>
                        <div class="day-actions">
                            <button class="move-day-up" data-index="${index}" title="Move up"><i class="fas fa-chevron-up"></i></button>
                            <button class="move-day-down" data-index="${index}" title="Move down"><i class="fas fa-chevron-down"></i></button>
                            <button class="delete-day" data-index="${index}" title="Delete"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="day-grid">
                        <div class="day-field day-full">
                            <label>Morning</label>
                            <input type="text" class="day-morning" value="${day.morning || ''}" placeholder="Morning activity..." data-index="${index}" />
                        </div>
                        <div class="day-field day-full">
                            <label>Afternoon</label>
                            <input type="text" class="day-afternoon" value="${day.afternoon || ''}" placeholder="Afternoon activity..." data-index="${index}" />
                        </div>
                        <div class="day-field day-full">
                            <label>Evening</label>
                            <input type="text" class="day-evening" value="${day.evening || ''}" placeholder="Evening activity..." data-index="${index}" />
                        </div>
                        <div class="day-field day-full">
                            <label>Meals</label>
                            <div class="day-meals">
                                <input type="text" class="day-breakfast" value="${day.meals ? day.meals.breakfast || '' : ''}" placeholder="Breakfast" data-index="${index}" />
                                <input type="text" class="day-lunch" value="${day.meals ? day.meals.lunch || '' : ''}" placeholder="Lunch" data-index="${index}" />
                                <input type="text" class="day-dinner" value="${day.meals ? day.meals.dinner || '' : ''}" placeholder="Dinner" data-index="${index}" />
                            </div>
                        </div>
                        <div class="day-field day-full">
                            <label>Notes</label>
                            <textarea class="day-notes" rows="1" placeholder="Notes for this day..." data-index="${index}">${day.notes || ''}</textarea>
                        </div>
                    </div>
                </div>
            `;
        });

        itineraryContainer.innerHTML = html;

        // Event listeners for day fields
        itineraryContainer.querySelectorAll('.day-date-input, .day-morning, .day-afternoon, .day-evening, .day-breakfast, .day-lunch, .day-dinner, .day-notes').forEach(function(el) {
            el.addEventListener('change', function() {
                const idx = parseInt(this.dataset.index);
                const className = this.className;
                
                if (className === 'day-date-input') {
                    trip.plan.days[idx].date = this.value;
                } else if (className === 'day-morning' || className === 'day-afternoon' || className === 'day-evening' || className === 'day-notes') {
                    const field = className.replace('day-', '');
                    trip.plan.days[idx][field] = this.value;
                } else if (className === 'day-breakfast' || className === 'day-lunch' || className === 'day-dinner') {
                    if (!trip.plan.days[idx].meals) trip.plan.days[idx].meals = {};
                    const field = className.replace('day-', '');
                    trip.plan.days[idx].meals[field] = this.value;
                }
                saveAll();
            });
        });

        // Delete day
        itineraryContainer.querySelectorAll('.delete-day').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (confirm('Delete this day?')) {
                    trip.plan.days.splice(idx, 1);
                    saveAll();
                    renderItinerary();
                }
            });
        });

        // Move day up
        itineraryContainer.querySelectorAll('.move-day-up').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (idx > 0) {
                    const temp = trip.plan.days[idx];
                    trip.plan.days[idx] = trip.plan.days[idx - 1];
                    trip.plan.days[idx - 1] = temp;
                    saveAll();
                    renderItinerary();
                }
            });
        });

        // Move day down
        itineraryContainer.querySelectorAll('.move-day-down').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (idx < trip.plan.days.length - 1) {
                    const temp = trip.plan.days[idx];
                    trip.plan.days[idx] = trip.plan.days[idx + 1];
                    trip.plan.days[idx + 1] = temp;
                    saveAll();
                    renderItinerary();
                }
            });
        });
    }

    // Add day
    document.getElementById('addDayBtn').addEventListener('click', function() {
        trip.plan.days.push({
            date: '',
            morning: '',
            afternoon: '',
            evening: '',
            meals: { breakfast: '', lunch: '', dinner: '' },
            notes: ''
        });
        saveAll();
        renderItinerary();
    });

    // ================================================================
    // ACCOMMODATION FUNCTIONS
    // ================================================================

    function renderAccommodation() {
        const items = trip.plan.accommodation || [];
        if (items.length === 0) {
            accommodationContainer.innerHTML = `
                <div class="empty-state" style="padding:30px 20px;">
                    <p style="color:#7A7A8E; font-size:0.9rem;">No accommodation added yet. Click "Add Hotel" to get started.</p>
                </div>
            `;
            return;
        }

        let html = '';
        items.forEach(function(item, index) {
            html += `
                <div class="item-card" data-index="${index}">
                    <div class="item-header">
                        <h4>${item.name || 'Hotel ' + (index + 1)}</h4>
                        <div class="item-actions">
                            <button class="delete-accommodation" data-index="${index}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="item-grid">
                        <div class="item-field">
                            <label>Hotel Name</label>
                            <input type="text" class="acc-name" value="${item.name || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Address</label>
                            <input type="text" class="acc-address" value="${item.address || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Check In</label>
                            <input type="date" class="acc-checkin" value="${item.checkIn || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Check Out</label>
                            <input type="date" class="acc-checkout" value="${item.checkOut || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Price</label>
                            <input type="text" class="acc-price" value="${item.price || ''}" placeholder="e.g. R850" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Reference</label>
                            <input type="text" class="acc-reference" value="${item.reference || ''}" placeholder="e.g. ABC123" data-index="${index}" />
                        </div>
                        <div class="item-field item-full">
                            <label>Notes</label>
                            <textarea class="acc-notes" rows="1" placeholder="Notes..." data-index="${index}">${item.notes || ''}</textarea>
                        </div>
                    </div>
                </div>
            `;
        });

        accommodationContainer.innerHTML = html;

        accommodationContainer.querySelectorAll('input, textarea').forEach(function(el) {
            el.addEventListener('change', function() {
                const idx = parseInt(this.dataset.index);
                const field = this.className.replace('acc-', '');
                trip.plan.accommodation[idx][field] = this.value;
                saveAll();
            });
        });

        accommodationContainer.querySelectorAll('.delete-accommodation').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (confirm('Delete this accommodation?')) {
                    trip.plan.accommodation.splice(idx, 1);
                    saveAll();
                    renderAccommodation();
                }
            });
        });
    }

    document.getElementById('addAccommodationBtn').addEventListener('click', function() {
        trip.plan.accommodation.push({
            name: '',
            address: '',
            checkIn: '',
            checkOut: '',
            price: '',
            reference: '',
            notes: ''
        });
        saveAll();
        renderAccommodation();
    });

    // ================================================================
    // TRANSPORT FUNCTIONS
    // ================================================================

    function renderTransport() {
        const items = trip.plan.transport || [];
        if (items.length === 0) {
            transportContainer.innerHTML = `
                <div class="empty-state" style="padding:30px 20px;">
                    <p style="color:#7A7A8E; font-size:0.9rem;">No transport added yet. Click "Add Transport" to get started.</p>
                </div>
            `;
            return;
        }

        let html = '';
        items.forEach(function(item, index) {
            html += `
                <div class="item-card" data-index="${index}">
                    <div class="item-header">
                        <h4>${item.type || 'Transport'} ${index + 1}</h4>
                        <div class="item-actions">
                            <button class="delete-transport" data-index="${index}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="item-grid">
                        <div class="item-field">
                            <label>Type</label>
                            <select class="trans-type" data-index="${index}">
                                <option value="Flight" ${item.type === 'Flight' ? 'selected' : ''}>Flight</option>
                                <option value="Train" ${item.type === 'Train' ? 'selected' : ''}>Train</option>
                                <option value="Bus" ${item.type === 'Bus' ? 'selected' : ''}>Bus</option>
                                <option value="Car Rental" ${item.type === 'Car Rental' ? 'selected' : ''}>Car Rental</option>
                                <option value="Ferry" ${item.type === 'Ferry' ? 'selected' : ''}>Ferry</option>
                            </select>
                        </div>
                        <div class="item-field">
                            <label>Company</label>
                            <input type="text" class="trans-company" value="${item.company || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>From</label>
                            <input type="text" class="trans-from" value="${item.from || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>To</label>
                            <input type="text" class="trans-to" value="${item.to || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Departure</label>
                            <input type="datetime-local" class="trans-departure" value="${item.departure || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Arrival</label>
                            <input type="datetime-local" class="trans-arrival" value="${item.arrival || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Reference</label>
                            <input type="text" class="trans-reference" value="${item.reference || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Price</label>
                            <input type="text" class="trans-price" value="${item.price || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field item-full">
                            <label>Notes</label>
                            <textarea class="trans-notes" rows="1" data-index="${index}">${item.notes || ''}</textarea>
                        </div>
                    </div>
                </div>
            `;
        });

        transportContainer.innerHTML = html;

        transportContainer.querySelectorAll('input, select, textarea').forEach(function(el) {
            el.addEventListener('change', function() {
                const idx = parseInt(this.dataset.index);
                const field = this.className.replace('trans-', '');
                if (field === 'type') {
                    trip.plan.transport[idx].type = this.value;
                    saveAll();
                    renderTransport();
                } else {
                    trip.plan.transport[idx][field] = this.value;
                    saveAll();
                }
            });
        });

        transportContainer.querySelectorAll('.delete-transport').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (confirm('Delete this transport entry?')) {
                    trip.plan.transport.splice(idx, 1);
                    saveAll();
                    renderTransport();
                }
            });
        });
    }

    document.getElementById('addTransportBtn').addEventListener('click', function() {
        trip.plan.transport.push({
            type: 'Flight',
            company: '',
            from: '',
            to: '',
            departure: '',
            arrival: '',
            reference: '',
            price: '',
            notes: ''
        });
        saveAll();
        renderTransport();
    });

    // ================================================================
    // ACTIVITIES FUNCTIONS
    // ================================================================

    function renderActivities() {
        const items = trip.plan.activities || [];
        if (items.length === 0) {
            activitiesContainer.innerHTML = `
                <div class="empty-state" style="padding:30px 20px;">
                    <p style="color:#7A7A8E; font-size:0.9rem;">No activities added yet. Click "Add Activity" to get started.</p>
                </div>
            `;
            return;
        }

        let html = '';
        items.forEach(function(item, index) {
            html += `
                <div class="item-card" data-index="${index}">
                    <div class="item-header">
                        <h4>${item.name || 'Activity ' + (index + 1)}</h4>
                        <div class="item-actions">
                            <button class="delete-activity" data-index="${index}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="item-grid">
                        <div class="item-field">
                            <label>Name</label>
                            <input type="text" class="act-name" value="${item.name || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Location</label>
                            <input type="text" class="act-location" value="${item.location || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Date</label>
                            <input type="date" class="act-date" value="${item.date || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Time</label>
                            <input type="time" class="act-time" value="${item.time || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Price</label>
                            <input type="text" class="act-price" value="${item.price || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field">
                            <label>Reference</label>
                            <input type="text" class="act-reference" value="${item.reference || ''}" data-index="${index}" />
                        </div>
                        <div class="item-field item-full">
                            <label>Notes</label>
                            <textarea class="act-notes" rows="1" data-index="${index}">${item.notes || ''}</textarea>
                        </div>
                    </div>
                </div>
            `;
        });

        activitiesContainer.innerHTML = html;

        activitiesContainer.querySelectorAll('input, textarea').forEach(function(el) {
            el.addEventListener('change', function() {
                const idx = parseInt(this.dataset.index);
                const field = this.className.replace('act-', '');
                trip.plan.activities[idx][field] = this.value;
                saveAll();
            });
        });

        activitiesContainer.querySelectorAll('.delete-activity').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (confirm('Delete this activity?')) {
                    trip.plan.activities.splice(idx, 1);
                    saveAll();
                    renderActivities();
                }
            });
        });
    }

    document.getElementById('addActivityBtn').addEventListener('click', function() {
        trip.plan.activities.push({
            name: '',
            location: '',
            date: '',
            time: '',
            price: '',
            reference: '',
            notes: ''
        });
        saveAll();
        renderActivities();
    });

    // ================================================================
    // PACKING FUNCTIONS
    // ================================================================

    function renderPacking() {
        const items = trip.plan.packing || [];
        const categories = ['Essentials', 'Clothes', 'Toiletries', 'Documents', 'Electronics', 'Other'];

        let html = '';
        categories.forEach(function(category) {
            const categoryItems = items.filter(function(item) { return item.category === category; });
            if (categoryItems.length > 0) {
                html += `
                    <div class="packing-category">
                        <h4>${category}</h4>
                        <div class="packing-items">
                `;
                categoryItems.forEach(function(item) {
                    html += `
                        <div class="packing-item ${item.packed ? 'packed' : ''}">
                            <input type="checkbox" class="pack-checkbox" data-id="${item.id}" ${item.packed ? 'checked' : ''} />
                            <label>${item.item}</label>
                            <button class="remove-item" data-id="${item.id}"><i class="fas fa-times"></i></button>
                        </div>
                    `;
                });
                html += `
                        </div>
                    </div>
                `;
            }
        });

        html += `
            <div class="packing-add">
                <input type="text" id="newPackingItem" placeholder="Item name..." />
                <select id="newPackingCategory">
                    <option value="Essentials">Essentials</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Toiletries">Toiletries</option>
                    <option value="Documents">Documents</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Other">Other</option>
                </select>
                <button class="add-item-btn" id="addPackingBtn"><i class="fas fa-plus"></i> Add</button>
            </div>
        `;

        packingContainer.innerHTML = html;

        packingContainer.querySelectorAll('.pack-checkbox').forEach(function(el) {
            el.addEventListener('change', function() {
                const item = trip.plan.packing.find(function(p) { return p.id === this.dataset.id; });
                if (item) {
                    item.packed = this.checked;
                    saveAll();
                    renderPacking();
                }
            });
        });

        packingContainer.querySelectorAll('.remove-item').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = trip.plan.packing.findIndex(function(p) { return p.id === this.dataset.id; });
                if (idx > -1) {
                    trip.plan.packing.splice(idx, 1);
                    saveAll();
                    renderPacking();
                }
            });
        });

        document.getElementById('addPackingBtn').addEventListener('click', function() {
            const input = document.getElementById('newPackingItem');
            const category = document.getElementById('newPackingCategory').value;
            if (input.value.trim()) {
                trip.plan.packing.push({
                    id: 'pack_' + Date.now(),
                    item: input.value.trim(),
                    category: category,
                    packed: false
                });
                saveAll();
                input.value = '';
                renderPacking();
            }
        });

        document.getElementById('newPackingItem').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('addPackingBtn').click();
            }
        });
    }

    // ================================================================
    // BUDGET FUNCTIONS
    // ================================================================

    function renderBudget() {
        const expenses = trip.plan.expenses || [];
        const totalBudget = parseFloat(overviewBudget.value.replace(/[^0-9.]/g, '')) || 0;
        const totalSpent = expenses.reduce(function(sum, e) {
            return sum + (parseFloat(e.amount) || 0);
        }, 0);
        const remaining = totalBudget - totalSpent;
        const percentUsed = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

        let colorClass = 'green';
        if (percentUsed > 80) colorClass = 'coral';
        else if (percentUsed > 60) colorClass = 'mustard';

        let html = `
            <div class="budget-summary">
                <div class="budget-item">
                    <span class="amount">R${totalBudget.toFixed(0)}</span>
                    <span class="label">Total Budget</span>
                </div>
                <div class="budget-item">
                    <span class="amount coral">R${totalSpent.toFixed(0)}</span>
                    <span class="label">Spent</span>
                </div>
                <div class="budget-item">
                    <span class="amount green">R${remaining.toFixed(0)}</span>
                    <span class="label">Remaining</span>
                </div>
            </div>
            <div class="budget-bar">
                <div class="budget-fill ${colorClass}" style="width: ${Math.min(percentUsed, 100)}%;"></div>
            </div>
        `;

        if (expenses.length > 0) {
            html += `<div class="budget-expenses">`;
            expenses.forEach(function(expense, index) {
                html += `
                    <div class="budget-expense">
                        <div class="expense-left">
                            <span class="category">${expense.category}</span>
                            <span class="description">${expense.description || ''}</span>
                            <span style="font-size:0.7rem;color:#999;">${expense.date || ''}</span>
                        </div>
                        <div class="expense-amount">R${parseFloat(expense.amount).toFixed(0)}</div>
                        <div class="expense-actions">
                            <button class="delete-expense" data-index="${index}"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        } else {
            html += `<p style="color:#7A7A8E;font-size:0.85rem;padding:10px 0;">No expenses recorded yet.</p>`;
        }

        html += `
            <div class="budget-add">
                <select id="expenseCategory">
                    <option value="Accommodation">Accommodation</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Activities">Activities</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <input type="text" id="expenseDescription" placeholder="Description..." />
                <input type="number" id="expenseAmount" placeholder="Amount" step="0.01" />
                <input type="date" id="expenseDate" />
                <button class="add-expense-btn" id="addExpenseBtn"><i class="fas fa-plus"></i> Add</button>
            </div>
        `;

        budgetContainer.innerHTML = html;

        const dateInput = document.getElementById('expenseDate');
        if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }

        document.getElementById('addExpenseBtn').addEventListener('click', function() {
            const category = document.getElementById('expenseCategory').value;
            const description = document.getElementById('expenseDescription').value.trim();
            const amount = document.getElementById('expenseAmount').value;
            const date = document.getElementById('expenseDate').value;

            if (!amount) {
                alert('Please enter an amount');
                return;
            }

            trip.plan.expenses.push({
                category: category,
                description: description,
                amount: amount,
                date: date || new Date().toISOString().split('T')[0]
            });

            saveAll();
            renderBudget();
        });

        budgetContainer.querySelectorAll('.delete-expense').forEach(function(el) {
            el.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                if (confirm('Delete this expense?')) {
                    trip.plan.expenses.splice(idx, 1);
                    saveAll();
                    renderBudget();
                }
            });
        });
    }

    // ================================================================
    // JOURNAL FUNCTIONS
    // ================================================================

    function renderJournal() {
        const entries = trip.plan.journal || [];

        let html = '';

        if (entries.length > 0) {
            const sortedEntries = [...entries].reverse();
            sortedEntries.forEach(function(entry) {
                html += `
                    <div class="journal-entry">
                        <div class="journal-date">${entry.date || ''}</div>
                        <div class="journal-text">${entry.entry || ''}</div>
                        <div class="journal-actions">
                            <button class="delete-journal" data-date="${entry.date}"><i class="fas fa-trash"></i> Delete</button>
                        </div>
                    </div>
                `;
            });
        } else {
            html += `<p style="color:#7A7A8E;font-size:0.85rem;padding:10px 0;">No journal entries yet. Start writing about your trip!</p>`;
        }

        html += `
            <div class="journal-add">
                <textarea id="journalEntry" placeholder="Write your journal entry here..."></textarea>
                <button class="add-journal-btn" id="addJournalBtn"><i class="fas fa-plus"></i> Add Entry</button>
            </div>
        `;

        journalContainer.innerHTML = html;

        document.getElementById('addJournalBtn').addEventListener('click', function() {
            const entryText = document.getElementById('journalEntry').value.trim();
            if (!entryText) {
                alert('Please write something');
                return;
            }

            const dateFormatted = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            trip.plan.journal.push({
                date: dateFormatted,
                entry: entryText
            });

            saveAll();
            document.getElementById('journalEntry').value = '';
            renderJournal();
        });

        journalContainer.querySelectorAll('.delete-journal').forEach(function(el) {
            el.addEventListener('click', function() {
                const date = this.dataset.date;
                const idx = trip.plan.journal.findIndex(function(j) { return j.date === date; });
                if (idx > -1) {
                    if (confirm('Delete this journal entry?')) {
                        trip.plan.journal.splice(idx, 1);
                        saveAll();
                        renderJournal();
                    }
                }
            });
        });
    }

    // ================================================================
    // INITIALIZE ALL SECTIONS
    // ================================================================

    renderItinerary();
    renderAccommodation();
    renderTransport();
    renderActivities();
    renderPacking();
    renderBudget();
    renderJournal();

    // Auto-save every 30 seconds
    setInterval(saveAll, 30000);
}

// ================================================================
// 15. INITIALIZATION
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    renderNavbar();
    renderFooter();

    const page = window.location.pathname.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        renderHeroPins();
        renderFeaturedDestinations();
    } else if (page === 'destinations.html') {
        renderDestinations();
        setupFilterListeners();
    } else if (page === 'trips.html') {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) { window.location.href = 'login.html'; return; }
        const userDataKey = 'user_' + currentUser;
        const userDataJSON = localStorage.getItem(userDataKey);
        if (!userDataJSON) { localStorage.removeItem('currentUser'); window.location.href = 'login.html'; return; }
        let userData;
        try { userData = JSON.parse(userDataJSON); } catch (e) { window.location.href = 'login.html'; return; }
        if (!userData.trips) userData.trips = [];
        if (!userData.wishlist) userData.wishlist = [];
        renderTripsPage(userData);
    } else if (page === 'login.html') {
        setupLoginPage();
    } else if (page === 'signup.html') {
        setupSignupPage();
    } else if (page === 'profile.html') {
        setupProfilePage();
    } else if (page === 'plan.html') {
        renderPlanPage();
    }

    // Modal close handlers
    document.querySelectorAll('.modal-overlay, .modal-close').forEach(function(el) {
        el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});

function setupFilterListeners() {
    document.querySelectorAll('.filter-options .filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const parent = this.closest('.filter-options');
            parent.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            const filterGroup = this.closest('.filter-group');
            const label = filterGroup.querySelector('label').textContent.trim();
            if (label.includes('Continent')) {
                activeFilters.continent = this.dataset.value;
            } else if (label.includes('Budget')) {
                activeFilters.budget = this.dataset.value;
            } else if (label.includes('Type')) {
                activeFilters.type = this.dataset.value;
            }
            renderDestinations();
        });
    });

    document.getElementById('searchInput').addEventListener('input', function() {
        activeFilters.search = this.value.trim();
        renderDestinations();
    });

    document.getElementById('sortSelect').addEventListener('change', function() {
        activeFilters.sort = this.value;
        renderDestinations();
    });

    document.getElementById('filterToggle').addEventListener('click', function() {
        document.getElementById('filterPanel').classList.toggle('open');
        this.classList.toggle('open');
    });
}

// Global functions for inline onclick
window.openModal = openModal;
window.closeModal = closeModal;
window.planThisTrip = planThisTrip;
window.toggleWishlist = toggleWishlist;
window.clearAllFilters = clearAllFilters;
window.goToPlanPage = goToPlanPage;
window.addWishlistToTrip = addWishlistToTrip;
window.removeFromWishlist = removeFromWishlist;
window.deleteTrip = deleteTrip;
