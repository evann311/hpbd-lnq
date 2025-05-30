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

    // Create new spectacular effect containers
    const ringsContainer = document.createElement('div');
    ringsContainer.className = 'rings-container';
    document.body.appendChild(ringsContainer);

    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    document.body.appendChild(sparkleContainer);

    const rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple-container';
    document.body.appendChild(rippleContainer);

    const starburstContainer = document.createElement('div');
    starburstContainer.className = 'starburst-container';
    document.body.appendChild(starburstContainer);

    const colorWaveContainer = document.createElement('div');
    colorWaveContainer.className = 'color-wave-container';
    document.body.appendChild(colorWaveContainer);

    const magicContainer = document.createElement('div');
    magicContainer.className = 'magic-container';
    document.body.appendChild(magicContainer);

    const burstLinesContainer = document.createElement('div');
    burstLinesContainer.className = 'burst-lines-container';
    document.body.appendChild(burstLinesContainer);

    const glowPulseContainer = document.createElement('div');
    glowPulseContainer.className = 'glow-pulse-container';
    document.body.appendChild(glowPulseContainer);

    const lightningContainer = document.createElement('div');
    lightningContainer.className = 'lightning-container';
    document.body.appendChild(lightningContainer);

    const spiralContainer = document.createElement('div');
    spiralContainer.className = 'spiral-container';
    document.body.appendChild(spiralContainer);
    
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
        
        // Create expanding rings immediately
        createExpandingRings();
        
        // Create color waves
        setTimeout(() => createColorWaves(), 200);
        
        // Create massive confetti explosion
        createMegaConfetti();
        
        // Create enhanced mega fireworks
        setTimeout(() => createMegaFireworks(), 400);
        
        // Create sparkle effects
        setTimeout(() => createSparkleEffects(), 600);
        
        // Create heart particles
        setTimeout(() => createHeartParticles(), 800);
        
        // Create star burst effects
        setTimeout(() => createStarBurstEffects(), 1000);
        
        // Create particle explosion
        setTimeout(() => createParticleExplosion(), 1200);
        
        // Create magic particles (reduced)
        setTimeout(() => createMagicParticles(), 1400);
        
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
        
        // Create fewer waves of effects
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => createConfetti(), i * 1200);
            setTimeout(() => createExpandingRings(), i * 1000);
            setTimeout(() => createMegaFireworks(), i * 1500);
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
        const confettiCount = 60;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                createConfettiPiece(colors, shapes);
            }, i * 40);
        }
    }
    
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        const shapes = ['', 'star', 'triangle'];
        const confettiCount = 40;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                createConfettiPiece(colors, shapes);
            }, i * 50);
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
        const heartCount = 15;
        const hearts = ['💖', '💝', '💕', '💗', '❤️', '💙', '💚', '💛', '💜'];
        
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                createSingleHeart(hearts);
            }, i * 200);
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
        
        // Fewer screen flashes
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createScreenFlash(), i * 200);
        }
        
        // Reduced expanding rings cascade
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createExpandingRings(), i * 600);
        }
        
        // Reduced color wave tsunami
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createColorWaves(), i * 800);
        }
        
        // Reduced confetti storm
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createConfetti(), i * 600);
        }
        
        // Reduced mega fireworks
        for (let i = 0; i < 12; i++) {
            setTimeout(() => createMegaFireworks(), i * 700);
        }
        
        // Reduced sparkle galaxy explosion
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createSparkleEffects(), i * 650);
        }
        
        // Reduced star burst supernova
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createStarBurstEffects(), i * 900);
        }
        
        // Reduced magic particle storm
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createMagicParticles(), i * 700);
        }
        
        // Reduced hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createHeartParticles(), i * 800);
        }
        
        // Reduced particle explosions
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createParticleExplosion(), i * 900);
        }
        
        // Reduced sparkles
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createSpectacularSparkles(), i * 800);
        }
        
        // Create ultimate screen shake
        document.body.style.animation = 'ultraShake 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        // Create rainbow background pulse
        document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #a55eea, #ff9ff3)';
        document.body.style.backgroundSize = '600% 600%';
        document.body.style.animation = 'ultraBackground 3s ease infinite, ultraShake 2s ease-in-out';
        
        // Change button to ultimate legendary mode
        setTimeout(() => {
            birthdayBtn.textContent = '🌟👑 ULTRA LEGENDARY GLORY! 👑🌟';
            birthdayBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #a55eea, #ff9ff3)';
            birthdayBtn.style.backgroundSize = '600% 600%';
            birthdayBtn.style.animation = 'ultimateGradientShift 1.5s ease infinite, buttonPulse 2s ease-in-out infinite';
            birthdayBtn.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.6), 0 0 60px rgba(78, 205, 196, 0.4)';
            birthdayBtn.style.transform = 'scale(1.15)';
        }, 1500);
        
        // Reset background after celebration
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.animation = '';
        }, 10000);
    }
    
    // Add gradient animation CSS for ultimate button
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes ultimateGradientShift {
            0% { background-position: 0% 50%; }
            25% { background-position: 100% 25%; }
            50% { background-position: 0% 75%; }
            75% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes ultraBackground {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 100%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 0%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        
        @keyframes ultraShake {
            0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
            10% { transform: translateX(-15px) translateY(-10px) rotate(-2deg); }
            20% { transform: translateX(15px) translateY(10px) rotate(2deg); }
            30% { transform: translateX(-12px) translateY(15px) rotate(-1deg); }
            40% { transform: translateX(12px) translateY(-15px) rotate(1deg); }
            50% { transform: translateX(-8px) translateY(-8px) rotate(-1.5deg); }
            60% { transform: translateX(8px) translateY(8px) rotate(1.5deg); }
            70% { transform: translateX(-5px) translateY(12px) rotate(-0.5deg); }
            80% { transform: translateX(5px) translateY(-12px) rotate(0.5deg); }
            90% { transform: translateX(-3px) translateY(-3px) rotate(-0.2deg); }
        }
        
        @keyframes buttonPulse {
            0%, 100% { 
                transform: scale(1.2); 
                box-shadow: 0 0 50px rgba(255, 107, 107, 0.8), 0 0 100px rgba(78, 205, 196, 0.6);
            }
            50% { 
                transform: scale(1.3); 
                box-shadow: 0 0 80px rgba(255, 107, 107, 1), 0 0 150px rgba(78, 205, 196, 0.8);
            }
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

    // Expanding Rings Effect
    function createExpandingRings() {
        const ringCount = 5;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        
        for (let i = 0; i < ringCount; i++) {
            setTimeout(() => {
                const ring = document.createElement('div');
                ring.className = 'expanding-ring';
                ring.style.borderColor = colors[i % colors.length];
                ring.style.left = Math.random() * window.innerWidth + 'px';
                ring.style.top = Math.random() * window.innerHeight + 'px';
                
                ringsContainer.appendChild(ring);
                
                setTimeout(() => {
                    if (ring.parentNode) {
                        ring.parentNode.removeChild(ring);
                    }
                }, 2000);
            }, i * 300);
        }
    }

    // Enhanced Mega Fireworks
    function createMegaFireworks() {
        const fireworkCount = 8;
        
        for (let i = 0; i < fireworkCount; i++) {
            setTimeout(() => {
                createSingleMegaFirework();
            }, i * 200);
        }
    }

    function createSingleMegaFirework() {
        const centerX = Math.random() * window.innerWidth;
        const centerY = Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2);
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        const particleCount = 12;
        
        for (let i = 0; i < particleCount; i++) {
            const firework = document.createElement('div');
            firework.className = 'mega-firework';
            
            const angle = (i / particleCount) * 2 * Math.PI;
            const distance = 80 + Math.random() * 120;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            firework.style.left = centerX + 'px';
            firework.style.top = centerY + 'px';
            firework.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Animate to end position
            firework.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 2500);
        }
    }

    // Sparkle Effects
    function createSparkleEffects() {
        const sparkleCount = 20;
        const sparkleSymbols = ['✨', '⭐', '🌟', '💫', '🎇', '🎆'];
        const colors = ['#fff', '#ffed4e', '#ff6b6b', '#4ecdc4', '#45b7d1', '#a55eea'];
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.innerHTML = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
                sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                
                sparkleContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 2000);
            }, i * 100);
        }
    }

    // Ripple Effects
    function createRippleEffects() {
        const rippleCount = 6;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        
        for (let i = 0; i < rippleCount; i++) {
            setTimeout(() => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                ripple.style.borderColor = colors[i % colors.length];
                ripple.style.left = Math.random() * window.innerWidth + 'px';
                ripple.style.top = Math.random() * window.innerHeight + 'px';
                
                rippleContainer.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 1500);
            }, i * 250);
        }
    }

    // Star Burst Effects
    function createStarBurstEffects() {
        const starCount = 10;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3', '#54a0ff'];
        
        for (let i = 0; i < starCount; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'starburst';
                star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                star.style.left = Math.random() * window.innerWidth + 'px';
                star.style.top = Math.random() * window.innerHeight + 'px';
                
                starburstContainer.appendChild(star);
                
                setTimeout(() => {
                    if (star.parentNode) {
                        star.parentNode.removeChild(star);
                    }
                }, 1800);
            }, i * 180);
        }
    }

    // Color Wave Effects
    function createColorWaves() {
        const waveCount = 4;
        const gradients = [
            'radial-gradient(circle, transparent 30%, rgba(255, 107, 107, 0.3) 50%, transparent 70%)',
            'radial-gradient(circle, transparent 30%, rgba(78, 205, 196, 0.3) 50%, transparent 70%)',
            'radial-gradient(circle, transparent 30%, rgba(69, 183, 209, 0.3) 50%, transparent 70%)',
            'radial-gradient(circle, transparent 30%, rgba(249, 202, 36, 0.3) 50%, transparent 70%)'
        ];
        
        for (let i = 0; i < waveCount; i++) {
            setTimeout(() => {
                const wave = document.createElement('div');
                wave.className = 'color-wave';
                wave.style.background = gradients[i % gradients.length];
                
                colorWaveContainer.appendChild(wave);
                
                setTimeout(() => {
                    if (wave.parentNode) {
                        wave.parentNode.removeChild(wave);
                    }
                }, 3000);
            }, i * 400);
        }
    }

    // Magic Particles
    function createMagicParticles() {
        const particleCount = 15;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'magic-particle';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = Math.random() * window.innerHeight + 'px';
                
                magicContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 3000);
            }, i * 150);
        }
    }

    // Burst Lines Effect
    function createBurstLines() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const lineCount = 20;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        
        for (let i = 0; i < lineCount; i++) {
            const line = document.createElement('div');
            line.className = 'burst-line';
            line.style.color = colors[Math.floor(Math.random() * colors.length)];
            line.style.left = centerX + 'px';
            line.style.top = centerY + 'px';
            line.style.transform = `rotate(${(i / lineCount) * 360}deg)`;
            
            burstLinesContainer.appendChild(line);
            
            setTimeout(() => {
                if (line.parentNode) {
                    line.parentNode.removeChild(line);
                }
            }, 1500);
        }
    }

    // Glow Pulse Effects
    function createGlowPulseEffects() {
        const pulseCount = 8;
        
        for (let i = 0; i < pulseCount; i++) {
            setTimeout(() => {
                const pulse = document.createElement('div');
                pulse.className = 'glow-pulse';
                pulse.style.left = Math.random() * window.innerWidth + 'px';
                pulse.style.top = Math.random() * window.innerHeight + 'px';
                
                glowPulseContainer.appendChild(pulse);
                
                setTimeout(() => {
                    if (pulse.parentNode) {
                        pulse.parentNode.removeChild(pulse);
                    }
                }, 2000);
            }, i * 200);
        }
    }

    // Lightning Effects
    function createLightningEffects() {
        const lightningCount = 15;
        
        for (let i = 0; i < lightningCount; i++) {
            setTimeout(() => {
                const lightning = document.createElement('div');
                lightning.className = 'lightning';
                lightning.style.left = Math.random() * window.innerWidth + 'px';
                lightning.style.top = Math.random() * (window.innerHeight * 0.8) + 'px';
                lightning.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                lightningContainer.appendChild(lightning);
                
                setTimeout(() => {
                    if (lightning.parentNode) {
                        lightning.parentNode.removeChild(lightning);
                    }
                }, 300);
            }, i * 100);
        }
    }

    // Spiral Effects
    function createSpiralEffects() {
        const spiralCount = 20;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea', '#ff9ff3'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < spiralCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'spiral-particle';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                particle.style.animationDelay = (i * 50) + 'ms';
                particle.style.transform = `rotate(${i * 18}deg)`;
                
                spiralContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2500);
            }, i * 80);
        }
    }
}); 