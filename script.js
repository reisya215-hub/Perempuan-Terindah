// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling untuk Navbar Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form Submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const response = document.getElementById('messageResponse');
    response.textContent = '✨ Terima kasih! Pesan untuk Jihan telah terkirim.';
    response.classList.add('show');
    this.reset();

    setTimeout(() => {
        response.classList.remove('show');
    }, 5000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 30px rgba(232, 67, 147, 0.15)';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(248, 165, 194, 0.15)';
    }
});

// 🎵 YouTube Music Player - Aku Milikmu by Dewa 19
const musicBtn = document.getElementById('musicBtn');
const musicControls = document.querySelector('.music-controls');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volumeBtn');
const youtubePlayer = document.getElementById('youtubePlayer');
const musicTitle = document.getElementById('musicTitle');

// Toggle Music Controls
musicBtn.addEventListener('click', function() {
    musicControls.classList.toggle('active');
});

// Play/Pause YouTube Video (Audio)
let isPlaying = false;

playBtn.addEventListener('click', function() {
    if (isPlaying) {
        // Pause video
        youtubePlayer.src = youtubePlayer.src.replace('autoplay=1', 'autoplay=0');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
        musicTitle.textContent = '🎵 Aku Milikmu - Dewa 19 (Paused)';
    } else {
        // Play video with autoplay
        const currentSrc = youtubePlayer.src;
        if (currentSrc.includes('autoplay=0')) {
            youtubePlayer.src = currentSrc.replace('autoplay=0', 'autoplay=1');
        } else if (currentSrc.includes('autoplay=1')) {
            // Reload if already autoplay
            youtubePlayer.src = currentSrc;
        } else {
            youtubePlayer.src = youtubePlayer.src + '&autoplay=1';
        }
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
        musicTitle.textContent = '🎵 Aku Milikmu - Dewa 19 (Playing)';
    }
});

// Volume Control (Visual Only - YouTube iframe tidak bisa diatur volumenya via JS)
let volumeVisible = false;
const volumeSlider = document.createElement('div');
volumeSlider.className = 'volume-slider';
volumeSlider.innerHTML = `
    <div style="text-align:center; padding: 5px; font-size:12px; color:#888;">
        🔈 Volume (atur via YouTube)
    </div>
    <input type="range" min="0" max="1" step="0.1" value="0.5" disabled>
`;
document.querySelector('.music-player').appendChild(volumeSlider);

volumeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    volumeSlider.classList.toggle('active');
});

// Toggle volume slider saat klik di luar
document.addEventListener('click', function(e) {
    if (!e.target.closest('.volume-slider') && !e.target.closest('.volume-btn')) {
        volumeSlider.classList.remove('active');
    }
});

// Auto-play saat halaman dimuat (jika diizinkan browser)
document.addEventListener('DOMContentLoaded', function() {
    // Coba autoplay
    youtubePlayer.src = youtubePlayer.src + '&autoplay=1';
    // Catatan: banyak browser memblokir autoplay, user harus klik tombol play
});

// Update tombol jika video selesai (tidak bisa dideteksi langsung dari iframe)
// Tapi kita bisa memberi tahu user
console.log('🎵 Putar lagu "Aku Milikmu - Dewa 19" dengan klik tombol play!');