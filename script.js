// Photo data - All 60+ photos from kallumakay collection
const photoList = [
    'photo_1_2026-03-29_13-21-46.jpg',
    'photo_1_2026-03-29_13-54-11.jpg',
    'photo_2_2026-03-29_13-21-46.jpg',
    'photo_2_2026-03-29_13-54-11.jpg',
    'photo_3_2026-03-29_13-21-46.jpg',
    'photo_3_2026-03-29_13-54-11.jpg',
    'photo_4_2026-03-29_13-21-46.jpg',
    'photo_4_2026-03-29_13-54-11.jpg',
    'photo_5_2026-03-29_13-21-46.jpg',
    'photo_5_2026-03-29_13-54-11.jpg',
    'photo_6_2026-03-29_13-21-46.jpg',
    'photo_6_2026-03-29_13-54-11.jpg',
    'photo_7_2026-03-29_13-21-46.jpg',
    'photo_7_2026-03-29_13-54-11.jpg',
    'photo_8_2026-03-29_13-21-46.jpg',
    'photo_8_2026-03-29_13-54-11.jpg',
    'photo_9_2026-03-29_13-21-46.jpg',
    'photo_9_2026-03-29_13-54-11.jpg',
    'photo_10_2026-03-29_13-21-46.jpg',
    'photo_10_2026-03-29_13-54-11.jpg',
    'photo_11_2026-03-29_13-21-46.jpg',
    'photo_11_2026-03-29_13-54-11.jpg',
    'photo_12_2026-03-29_13-21-46.jpg',
    'photo_12_2026-03-29_13-54-11.jpg',
    'photo_13_2026-03-29_13-21-46.jpg',
    'photo_13_2026-03-29_13-54-11.jpg',
    'photo_14_2026-03-29_13-21-46.jpg',
    'photo_14_2026-03-29_13-54-11.jpg',
    'photo_15_2026-03-29_13-21-46.jpg',
    'photo_15_2026-03-29_13-54-11.jpg',
    'photo_16_2026-03-29_13-21-46.jpg',
    'photo_16_2026-03-29_13-54-11.jpg',
    'photo_17_2026-03-29_13-21-46.jpg',
    'photo_17_2026-03-29_13-54-11.jpg',
    'photo_18_2026-03-29_13-21-46.jpg',
    'photo_18_2026-03-29_13-54-11.jpg',
    'photo_19_2026-03-29_13-21-46.jpg',
    'photo_19_2026-03-29_13-54-11.jpg',
    'photo_20_2026-03-29_13-21-46.jpg',
    'photo_20_2026-03-29_13-54-11.jpg',
    'photo_21_2026-03-29_13-21-46.jpg',
    'photo_21_2026-03-29_13-54-11.jpg',
    'photo_22_2026-03-29_13-21-46.jpg',
    'photo_22_2026-03-29_13-54-11.jpg',
    'photo_23_2026-03-29_13-54-11.jpg',
    'photo_24_2026-03-29_13-54-11.jpg',
    'photo_25_2026-03-29_13-54-11.jpg',
    'photo_26_2026-03-29_13-54-11.jpg',
    'photo_27_2026-03-29_13-54-11.jpg',
    'photo_28_2026-03-29_13-54-11.jpg',
    'photo_29_2026-03-29_13-54-11.jpg',
    'photo_30_2026-03-29_13-54-11.jpg',
    'photo_31_2026-03-29_13-54-11.jpg',
    'photo_32_2026-03-29_13-54-11.jpg',
    'photo_33_2026-03-29_13-54-11.jpg',
    'photo_34_2026-03-29_13-54-11.jpg',
];

const memoryStories = [
    {
        title: "First Semester Vibes",
        date: "September 2022",
        text: "The beginning of an unforgettable journey. These were the nights where everything felt possible, and we thought nothing could break our bond. Late-night conversations in dorm rooms set the tone for years to come.",
        photoIndex: 0
    },
    {
        title: "Road Trip Chronicles",
        date: "March 2023",
        text: "Miles of laughter, terrible playlist decisions, and memories that will last forever. We learned that the best destinations aren't places—they're the people you travel with.",
        photoIndex: 1
    },
    {
        title: "Midnight Adventures",
        date: "July 2023",
        text: "When 2 AM feels like the perfect time to grab food, explore the city, or just sit under the stars. These spontaneous moments became the stories we tell at reunions.",
        photoIndex: 2
    },
    {
        title: "End of Year Celebration",
        date: "December 2023",
        text: "As the year wrapped up, so did some incredible chapters. But we knew this wasn't goodbye—it was just 'see you soon.' The best part about great friends is that time and distance don't matter.",
        photoIndex: 3
    },
    {
        title: "Spring Break Forever",
        date: "April 2024",
        text: "One last hurrah before finals. These moments remind us why we became friends in the first place. The simplest moments often become the most precious memories.",
        photoIndex: 24
    }
];

const photosPath = './kallumakay photos/';
let currentQuoteIndex = 0;
let backgroundHtml = new Audio();
let musicPlaying = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadHeroSlideshow();
    loadGallery();
    loadStories();
    setupQuoteCarousel();
    setupMusicToggle();
    setupLightbox();
    setupScrollAnimations();
});

// Load hero slideshow with first 3 photos
function loadHeroSlideshow() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url('${photosPath}${photoList[index]}')`;
    });
}

// Load gallery gridfgg
function loadGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';

    const galleryQuotes = [
        "Every moment with you is a memory I treasure forever",
        "These are the days we'll laugh about for decades",
        "Life was meant for good friends and great memories",
        "Surrounded by love and laughter",
        "Making memories like we're going out of style",
        "Laughter is the best sound in the world",
        "Captured moments, infinite memories",
        "Friends who create memories together stay together",
        "These moments are what life is all about",
        "Quality time with the people who matter most",
        "Building a lifetime of beautiful memories",
        "Every photo tells a story of friendship",
        "Smiling because of you",
        "Creating memories that will last forever",
        "Together is my favorite place to be",
        "Life is full of these beautiful moments",
        "Our friendship is the best adventure",
        "These are the golden days",
        "Capturing life's beautiful moments",
        "Happiness is spending time with you",
        "Friends make the best memories",
        "Living for moments like these",
        "Every day with you is a gift",
        "Cheers to friendship and good times",
        "Making memories is the best investment",
        "These days will pass, but memories will last",
        "Grateful for these moments with you",
        "Life is beautiful with these people by my side",
        "Creating magic with my favorite people",
        "Smiling through all of life's moments",
        "Forever grateful for these memories",
        "These photos captured more than just faces",
        "Surrounded by the ones I love most",
        "Making unforgettable memories together",
        "This is what happiness looks like",
        "Our story is my favorite to tell",
        "Walking through life with my best friends",
        "Laughing at the best times together",
        "These moments are priceless",
        "Creating a lifetime of joy and laughter",
        "The best memories are made in company",
        "Cherishing these beautiful moments",
        "This is family, this is home",
        "Every smile tells a story",
        "We don't realize we're making memories",
        "These are the days worth remembering",
        "Forever young at heart with these people",
        "Life is a collection of these moments",
        "Thankful for these unforgettable experiences",
        "The best journey is together",
        "These faces mean everything to me",
        "Making life beautiful one memory at a time",
        "Holding onto these precious moments",
        "Friendship is the greatest treasure",
        "These photos capture our beautiful bond",
        "Forever grateful for you",
        "This is what true joy looks like",
        "Memories like these are timeless",
        "Lost in the right direction",
        "Just good vibes and great people",
        "Every picture has a story to tell",
        "No words needed, just memories",
        "A little bit of crazy, a little bit of loud",
        "We take photos as a return ticket to a moment otherwise gone",
        "So many memories, so little time",
        "Living for the moments you can't put into words"
    ];

    const galleryCaptions = [
        "These moments remind us why we cherish each other. From late nights to adventures, every photo holds a piece of our story together.",
        "Looking back at these times brings a smile to my face. It's the little things and the big adventures that make life so incredible.",
        "There's something magical about capturing a single moment in time. Whenever I see this, I'm right back there with everyone.",
        "We might not always remember the exact date or time, but the feeling we had when this was taken will stay with us forever.",
        "Surrounding yourself with people who bring out the best in you is the secret to a happy life. This photo is proof of that.",
        "It's not about where we were going, but who we were with. Every journey becomes an adventure with the right company.",
        "Some days are just meant to be remembered. This was one of those days where everything just felt perfect and right.",
        "The best part about making memories is getting to relive them. Here's to the moments that make us laugh until we cry.",
        "Sometimes you will never know the value of a moment until it becomes a memory. I'm glad we captured this one.",
        "Good times come and go, but the memories of those times stay with us forever, etched in our hearts and these photographs.",
        "Through all the ups and downs, having these moments to look back on makes it all worthwhile. Here's to us.",
        "A photograph is the pause button of life. It freezes time so we can appreciate the beauty of what we had and still have.",
        "Life is a series of thousands of tiny miracles. Notice them. This right here is one of those tiny miracles captured forever.",
        "We didn't know we were making memories, we just knew we were having fun. And those turn out to be the best memories.",
        "Here's to the nights that turned into mornings with the friends that turned into family. Never a dull moment."
    ];


    photoList.forEach((photo, index) => {
        const galleryCard = document.createElement('div');
        galleryCard.className = 'gallery-item-card';
        const quote = galleryQuotes[index % galleryQuotes.length];
        const caption = galleryCaptions[index % galleryCaptions.length];

        galleryCard.innerHTML = `
            <div class="gallery-photo" onclick="openLightbox('${photosPath}${photo}', 'Memory ${index + 1}')">
                <img src="${photosPath}${photo}" alt="Memory ${index + 1}" loading="lazy">
            </div>
            <div class="gallery-text">
                <p class="gallery-text-quote">"${quote}"</p>
                <p class="gallery-text-caption">${caption}</p>
                <p class="gallery-text-label">MEMORY #${index + 1}</p>
            </div>
        `;
        gallery.appendChild(galleryCard);
    });
}

// Load stories section
function loadStories() {
    const timeline = document.getElementById('storiesTimeline');
    timeline.innerHTML = '';

    memoryStories.forEach((story, index) => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <div class="story-image">
                <img src="${photosPath}${photoList[story.photoIndex]}" alt="${story.title}" loading="lazy">
            </div>
            <div class="story-content">
                <p class="story-date">${story.date}</p>
                <h3 class="story-title">${story.title}</h3>
                <p class="story-text">${story.text}</p>
            </div>
        `;
        timeline.appendChild(storyCard);
    });
}

// Setup quote carousel
function setupQuoteCarousel() {
    const quoteCards = document.querySelectorAll('.quote-card');
    const quoteDots = document.querySelector('.quote-dots');

    // Create dots
    quoteCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'quote-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => showQuote(index));
        quoteDots.appendChild(dot);
    });

    // Navigation buttons
    document.querySelector('.prev-quote').addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex - 1 + quoteCards.length) % quoteCards.length;
        showQuote(currentQuoteIndex);
    });

    document.querySelector('.next-quote').addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quoteCards.length;
        showQuote(currentQuoteIndex);
    });

    // Auto-advance quotes
    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quoteCards.length;
        showQuote(currentQuoteIndex);
    }, 8000);
}

function showQuote(index) {
    const quoteCards = document.querySelectorAll('.quote-card');
    const quoteDots = document.querySelectorAll('.quote-dot');

    quoteCards.forEach(card => card.classList.remove('active'));
    quoteDots.forEach(dot => dot.classList.remove('active'));

    quoteCards[index].classList.add('active');
    quoteDots[index].classList.add('active');
}

// Lightbox functionality
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    document.querySelector('.lightbox-image').src = imageSrc;
    document.querySelector('.lightbox-caption').textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Music toggle
function setupMusicToggle() {
    const musicBtn = document.getElementById('musicToggle');

    musicBtn.addEventListener('click', () => {
        musicPlaying = !musicPlaying;

        if (musicPlaying) {
            musicBtn.classList.add('playing');
            musicBtn.title = 'Music is playing';
            // In a real scenario, you would load and play actual background music
        } else {
            musicBtn.classList.remove('playing');
            musicBtn.title = 'Background Music';
        }
    });
}

// Scroll animations for elements
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    document.querySelectorAll('.gallery-photo').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Observe story cards
    document.querySelectorAll('.story-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
    });
}

// Smooth scroll for navigation (if added in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#0') {
            e.preventDefault();
        }
    });
});
