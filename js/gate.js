/**
 * 3D Gate Animation & Overlay Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        init3DGateAnimation();
    }
});

function init3DGateAnimation() {
    const gateLeft = document.getElementById('gateLeft');
    const gateRight = document.getElementById('gateRight');
    const gateCenterContent = document.getElementById('gateCenterContent');
    const closingGateCenterContent = document.getElementById('closingGateCenterContent');
    const portfolioContent = document.getElementById('portfolioContent');

    if (!gateLeft || !gateRight || !gateCenterContent || !closingGateCenterContent) return;

    // Timeline 1: Open Gate on Scroll Down from Top
    const openTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#gateWrapper',
            start: 'top top',
            end: '+=900',
            scrub: 1.2,
            onUpdate: (self) => {
                const opacityVal = 1 - (self.progress * 2.5);
                const currentOpacity = Math.max(0, opacityVal);
                gsap.to(gateCenterContent, { 
                    opacity: currentOpacity, 
                    scale: 1 - (self.progress * 0.15), 
                    duration: 0.1, 
                    overwrite: 'auto' 
                });

                // When gate is opening or open, disable pointer events completely so cards underneath receive clicks instantly
                if (self.progress > 0.02) {
                    gateCenterContent.style.pointerEvents = 'none';
                    gateLeft.style.pointerEvents = 'none';
                    gateRight.style.pointerEvents = 'none';
                } else {
                    gateCenterContent.style.pointerEvents = 'auto';
                    gateLeft.style.pointerEvents = 'auto';
                    gateRight.style.pointerEvents = 'auto';
                }

                // When user begins scrolling from the top, play intro voice once if not already played
                if (self.progress > 0.05 && typeof audioEngine !== 'undefined' && !audioEngine.introSpoken) {
                    audioEngine.playIntro();
                }
            }
        }
    });

    // 3D Door Swing Opening
    openTimeline
        .to(gateLeft, {
            rotateY: -105,
            xPercent: -40,
            opacity: 0.15,
            ease: 'power3.inOut'
        }, 0)
        .to(gateRight, {
            rotateY: 105,
            xPercent: 40,
            opacity: 0.15,
            ease: 'power3.inOut'
        }, 0)
        .fromTo(portfolioContent, {
            scale: 0.94,
            opacity: 0.5
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power2.out'
        }, 0);


    // Timeline 2: Automatic Gate Closing & Farewell Voice Trigger at Bottom
    ScrollTrigger.create({
        trigger: '#closingBanner',
        start: 'top 80%',
        end: 'bottom bottom',
        onEnter: () => {
            // 1. Close doors back shut
            gsap.to(gateLeft, { rotateY: 0, xPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
            gsap.to(gateRight, { rotateY: 0, xPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
            gateLeft.style.pointerEvents = 'auto';
            gateRight.style.pointerEvents = 'auto';

            // 2. Fade IN the "Dhanwaad Ji" overlay card right on the closed gate
            gsap.to(closingGateCenterContent, { 
                opacity: 1, 
                scale: 1, 
                duration: 0.6, 
                delay: 0.2,
                ease: 'back.out(1.2)',
                onStart: () => {
                    closingGateCenterContent.style.pointerEvents = 'auto';
                    closingGateCenterContent.classList.remove('pointer-events-none');
                }
            });

            // 3. Speak farewell voice ONLY ONCE at the end
            if (typeof audioEngine !== 'undefined') {
                audioEngine.playOutro();
            }
        },
        onLeaveBack: () => {
            // Fade OUT closing card & re-open doors when scrolling back up
            closingGateCenterContent.style.pointerEvents = 'none';
            gateLeft.style.pointerEvents = 'none';
            gateRight.style.pointerEvents = 'none';

            gsap.to(closingGateCenterContent, { 
                opacity: 0, 
                scale: 0.95, 
                duration: 0.3,
                onComplete: () => {
                    closingGateCenterContent.classList.add('pointer-events-none');
                }
            });

            gsap.to(gateLeft, { rotateY: -105, xPercent: -40, opacity: 0.15, duration: 0.8, ease: 'power3.out' });
            gsap.to(gateRight, { rotateY: 105, xPercent: 40, opacity: 0.15, duration: 0.8, ease: 'power3.out' });
            // Outro voice stays marked as spoken - NO repeat when scrolling back up or down
        }
    });
}
