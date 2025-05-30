document.addEventListener('DOMContentLoaded', function() {
    const birthdayBtn = document.getElementById('birthdayBtn');
    const birthdayImage = document.getElementById('birthdayImage');
    const confettiContainer = document.getElementById('confetti');
    
    // Create additional effect containers
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'fireworks-container';
    document.body.appendChild(fireworksContainer);
    
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    document.body.appendChild(heartContainer);
    
    const explosionContainer = document.createElement('div');
    explosionContainer.className = 'explosion-container';
    document.body.appendChild(explosionContainer);
    
    // Button click event with enhanced effects
    birthdayBtn.addEventListener('click', function() {
        // Start the mega celebration sequence
        startMegaCelebration();
    });
    
    function startMegaCelebration() {
        // Add clicked animation to button
        birthdayBtn.classList.add('clicked');
        
        // Update button text and effects IMMEDIATELY
        birthdayBtn.textContent = '🎆 GLORY MAN U 🎆';
        birthdayBtn.style.background = 'linear-gradient(45deg, #ff9ff3, #f368e0)';
        
        // Disable button temporarily
        birthdayBtn.disabled = true;
        birthdayBtn.style.opacity = '0.7';
        
        // Create screen flash
        createScreenFlash();
        
        // Start background party mode
        document.body.classList.add('party-mode');
        
        // Create massive confetti explosion
        createMegaConfetti();
        
        // Create fireworks display
        setTimeout(() => createFireworks(), 200);
        
        // Create heart particles
        setTimeout(() => createHeartParticles(), 400);
        
        // Create particle explosion
        setTimeout(() => createParticleExplosion(), 600);
        
        // Animate balloons
        animateBalloonsParty();
        
        // Rainbow title effect
        setTimeout(() => {
            const title = document.querySelector('.title');
            title.classList.add('rainbow');
        }, 300);
        
        // Show birthday image with enhanced animation
        setTimeout(() => {
            showBirthdayImageSpectacular();
        }, 800);
        
        // Main content celebration animation
        setTimeout(() => {
            const mainContent = document.querySelector('.main-content');
            mainContent.classList.add('celebration');
        }, 500);
        
        // Create multiple confetti waves
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => createConfetti(), i * 800);
        }
        
        // Create additional fireworks bursts
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => createFireworks(), i * 1200);
        }
        
        // Remove clicked class after animation
        setTimeout(() => {
            birthdayBtn.classList.remove('clicked');
        }, 800);
        
        // Re-enable button after celebration
        setTimeout(() => {
            birthdayBtn.disabled = false;
            birthdayBtn.style.opacity = '1';
        }, 2000);
        
        // Clean up effects after celebration
        setTimeout(() => {
            document.body.classList.remove('party-mode');
            const title = document.querySelector('.title');
            title.classList.remove('rainbow');
            const mainContent = document.querySelector('.main-content');
            mainContent.classList.remove('celebration');
        }, 8000);
    }
    
    // Screen flash effect
    function createScreenFlash() {
        const flash = document.createElement('div');
        flash.className = 'screen-flash';
        document.body.appendChild(flash);
        
        setTimeout(() => {
            if (flash.parentNode) {
                flash.parentNode.removeChild(flash);
            }
        }, 300);
    }
    
    // Enhanced confetti with different shapes
    function createMegaConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3', '#54a0ff'];
        const shapes = ['', 'star', 'triangle'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                createConfettiPiece(colors, shapes);
            }, i * 30);
        }
    }
    
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        const shapes = ['', 'star', 'triangle'];
        const confettiCount = 60;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                createConfettiPiece(colors, shapes);
            }, i * 40);
        }
    }
    
    function createConfettiPiece(colors, shapes = ['']) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        // Add random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape) confetti.classList.add(shape);
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startPositionX = Math.random() * window.innerWidth;
        const delay = Math.random() * 1000;
        const duration = 2500 + Math.random() * 2000;
        const size = 8 + Math.random() * 8;
        
        confetti.style.backgroundColor = color;
        confetti.style.left = startPositionX + 'px';
        confetti.style.animationDelay = delay + 'ms';
        confetti.style.animationDuration = duration + 'ms';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random shapes for non-clipped confetti
        if (!shape && Math.random() > 0.7) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti piece after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, duration + delay);
    }
    
    // Fireworks effect
    function createFireworks() {
        const fireworkCount = 8;
        
        for (let i = 0; i < fireworkCount; i++) {
            setTimeout(() => {
                createSingleFirework();
            }, i * 200);
        }
    }
    
    function createSingleFirework() {
        const centerX = Math.random() * window.innerWidth;
        const centerY = Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2);
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        const particleCount = 12;
        
        for (let i = 0; i < particleCount; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            
            const angle = (i / particleCount) * 2 * Math.PI;
            const distance = 50 + Math.random() * 100;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            firework.style.left = centerX + 'px';
            firework.style.top = centerY + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Animate to end position
            firework.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 1500);
        }
    }
    
    // Heart particles effect
    function createHeartParticles() {
        const heartCount = 25;
        const hearts = ['💖', '💝', '💕', '💗', '❤️', '💙', '💚', '💛', '💜'];
        
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                createSingleHeart(hearts);
            }, i * 150);
        }
    }
    
    function createSingleHeart(hearts) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = (15 + Math.random() * 15) + 'px';
        
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
    
    // Particle explosion effect
    function createParticleExplosion() {
        const explosionCount = 50;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        
        for (let i = 0; i < explosionCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'explosion-particle';
            
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 200;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Animate outward
            setTimeout(() => {
                particle.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
            }, 10);
            
            explosionContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }
    
    // Animate balloons for party mode
    function animateBalloonsParty() {
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach((balloon, index) => {
            setTimeout(() => {
                balloon.classList.add('party-balloon');
                setTimeout(() => {
                    balloon.classList.remove('party-balloon');
                }, 1000);
            }, index * 200);
        });
    }
    
    // Enhanced birthday image reveal
    function showBirthdayImageSpectacular() {
        birthdayImage.classList.remove('hidden');
        setTimeout(() => {
            birthdayImage.classList.add('show');
            // Add party mode to image
            const image = birthdayImage.querySelector('.birthday-image');
            const message = birthdayImage.querySelector('.birthday-message');
            
            setTimeout(() => {
                image.classList.add('party-mode');
                message.classList.add('party-text');
            }, 500);
            
            setTimeout(() => {
                image.classList.remove('party-mode');
                message.classList.remove('party-text');
            }, 2500);
        }, 100);
    }
    
    // Add spectacular sparkle effects
    function createSpectacularSparkles() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.style.position = 'fixed';
        sparkleContainer.style.top = '0';
        sparkleContainer.style.left = '0';
        sparkleContainer.style.width = '100%';
        sparkleContainer.style.height = '100%';
        sparkleContainer.style.pointerEvents = 'none';
        sparkleContainer.style.zIndex = '7000';
        
        document.body.appendChild(sparkleContainer);
        
        const sparkleTypes = ['✨', '🌟', '⭐', '💫', '🎇', '🎆'];
        
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createSparkle(sparkleContainer, sparkleTypes);
            }, i * 100);
        }
        
        // Remove sparkle container after animations
        setTimeout(() => {
            if (sparkleContainer.parentNode) {
                sparkleContainer.parentNode.removeChild(sparkleContainer);
            }
        }, 8000);
    }
    
    function createSparkle(container, sparkleTypes) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = (15 + Math.random() * 20) + 'px';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animation = 'sparkleAnimation 2s ease-out forwards';
        sparkle.style.zIndex = '7001';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
    
    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnimation {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1.5) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // Add sparkles to the celebration
    birthdayBtn.addEventListener('click', function() {
        setTimeout(createSpectacularSparkles, 1500);
    });
    
    // Ultimate easter egg: triple click for MEGA celebration
    let clickCount = 0;
    let clickTimer = null;
    
    birthdayBtn.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 600);
        } else if (clickCount === 2) {
            // Continue counting for potential triple click
        } else if (clickCount === 3) {
            clearTimeout(clickTimer);
            clickCount = 0;
            // MEGA ULTRA CELEBRATION
            createMegaUltraCelebration();
        }
    });
    
    function createMegaUltraCelebration() {
        // Create the ultimate celebration experience
        console.log('🎉 MEGA ULTRA CELEBRATION ACTIVATED! 🎉');
        
        // Multiple screen flashes
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createScreenFlash(), i * 200);
        }
        
        // Continuous confetti for 10 seconds
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createConfetti(), i * 500);
        }
        
        // Continuous fireworks
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createFireworks(), i * 700);
        }
        
        // Continuous hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createHeartParticles(), i * 800);
        }
        
        // Multiple particle explosions
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createParticleExplosion(), i * 600);
        }
        
        // Continuous sparkles
        for (let i = 0; i < 12; i++) {
            setTimeout(() => createSpectacularSparkles(), i * 900);
        }
        
        // Shake the entire screen
        document.body.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
        
        // Change button to ultimate mode
        setTimeout(() => {
            birthdayBtn.textContent = '🌟 LEGENDARY! 🌟';
            birthdayBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #a55eea, #ff9ff3)';
            birthdayBtn.style.backgroundSize = '600% 600%';
            birthdayBtn.style.animation = 'gradientShift 2s ease infinite';
        }, 2000);
    }
    
    // Add gradient animation CSS for ultimate button
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(gradientStyle);
    
    // Add some random surprise effects that happen occasionally
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 3 seconds
            createSparkle(document.body, ['✨']);
        }
    }, 3000);
    
    // Add hover effects to make everything more interactive
    birthdayBtn.addEventListener('mouseenter', function() {
        if (Math.random() < 0.3) { // 30% chance on hover
            createSparkle(document.body, ['🌟']);
        }
    });
}); 