document.addEventListener('DOMContentLoaded', function() {
    const birthdayBtn = document.getElementById('birthdayBtn');
    const birthdayImage = document.getElementById('birthdayImage');
    const confettiContainer = document.getElementById('confetti');
    
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    document.body.appendChild(heartContainer);
    
    const explosionContainer = document.createElement('div');
    explosionContainer.className = 'explosion-container';
    document.body.appendChild(explosionContainer);

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
    
    birthdayBtn.addEventListener('click', function() {
        startMegaCelebration();
    });
    
    function startMegaCelebration() {
        birthdayBtn.classList.add('clicked');
        
        birthdayBtn.textContent = '🎆 GLORY MAN U 🎆';
        birthdayBtn.style.background = 'linear-gradient(45deg, #ff9ff3, #f368e0)';
        
        birthdayBtn.disabled = true;
        birthdayBtn.style.opacity = '0.7';
        
        createScreenFlash();
        
        document.body.classList.add('party-mode');
        
        createExpandingRings();
        
        setTimeout(() => createColorWaves(), 200);
        
        createMegaConfetti();
        
        setTimeout(() => createMegaFireworks(), 400);
        
        setTimeout(() => createSparkleEffects(), 600);
        
        setTimeout(() => createHeartParticles(), 800);
        
        setTimeout(() => createStarBurstEffects(), 1000);
        
        setTimeout(() => createParticleExplosion(), 1200);
        
        setTimeout(() => createMagicParticles(), 1400);
        
        animateBalloonsParty();
        
        setTimeout(() => {
            const title = document.querySelector('.title');
            title.classList.add('rainbow');
        }, 300);
        
        setTimeout(() => {
            showBirthdayImageSpectacular();
        }, 800);
        
        
        setTimeout(() => {
            const mainContent = document.querySelector('.main-content');
            mainContent.classList.add('celebration');
        }, 500);
        
        
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => createConfetti(), i * 1200);
            setTimeout(() => createExpandingRings(), i * 1000);
            setTimeout(() => createMegaFireworks(), i * 1500);
        }
        
        setTimeout(() => {
            birthdayBtn.classList.remove('clicked');
        }, 800);
        
        setTimeout(() => {
            birthdayBtn.disabled = false;
            birthdayBtn.style.opacity = '1';
        }, 2000);
        
        setTimeout(() => {
            document.body.classList.remove('party-mode');
            const title = document.querySelector('.title');
            title.classList.remove('rainbow');
            const mainContent = document.querySelector('.main-content');
            mainContent.classList.remove('celebration');
        }, 8000);
    }
    
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
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape) confetti.classList.add(shape);
        
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
        
        
        if (!shape && Math.random() > 0.7) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, duration + delay);
    }
    
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
            
            firework.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 1500);
        }
    }
    
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
    
    function showBirthdayImageSpectacular() {
        birthdayImage.classList.remove('hidden');
        setTimeout(() => {
            birthdayImage.classList.add('show');
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
    
    birthdayBtn.addEventListener('click', function() {
        setTimeout(createSpectacularSparkles, 1500);
    });
    
    
    let clickCount = 0;
    let clickTimer = null;
    
    birthdayBtn.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 600);
        } else if (clickCount === 2) {
            
        } else if (clickCount === 3) {
            clearTimeout(clickTimer);
            clickCount = 0;
            createMegaUltraCelebration();
        }
    });
    
    function createMegaUltraCelebration() {
        console.log('🎉 MEGA ULTRA CELEBRATION ACTIVATED! 🎉');
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createScreenFlash(), i * 200);
        }
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createExpandingRings(), i * 600);
        }
        
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createColorWaves(), i * 800);
        }
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createConfetti(), i * 600);
        }
        
        for (let i = 0; i < 12; i++) {
            setTimeout(() => createMegaFireworks(), i * 700);
        }
        
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createSparkleEffects(), i * 650);
        }
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createStarBurstEffects(), i * 900);
        }
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createMagicParticles(), i * 700);
        }
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createHeartParticles(), i * 800);
        }
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createParticleExplosion(), i * 900);
        }
        
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createSpectacularSparkles(), i * 800);
        }
        
        
        document.body.style.animation = 'ultraShake 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        
        document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #a55eea, #ff9ff3)';
        document.body.style.backgroundSize = '600% 600%';
        document.body.style.animation = 'ultraBackground 3s ease infinite, ultraShake 2s ease-in-out';
        
        
        setTimeout(() => {
            birthdayBtn.textContent = '🌟👑 ULTRA LEGENDARY GLORY! 👑🌟';
            birthdayBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #a55eea, #ff9ff3)';
            birthdayBtn.style.backgroundSize = '600% 600%';
            birthdayBtn.style.animation = 'ultimateGradientShift 1.5s ease infinite, buttonPulse 2s ease-in-out infinite';
            birthdayBtn.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.6), 0 0 60px rgba(78, 205, 196, 0.4)';
            birthdayBtn.style.transform = 'scale(1.15)';
        }, 1500);
        
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.animation = '';
        }, 10000);
    }
    
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
    
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 3 seconds
            createSparkle(document.body, ['✨']);
        }
    }, 3000);
    
    birthdayBtn.addEventListener('mouseenter', function() {
        if (Math.random() < 0.3) { // 30% chance on hover
            createSparkle(document.body, ['🌟']);
        }
    });

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
            
            firework.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 2500);
        }
    }

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