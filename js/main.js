/**
 * Main Application Logic & Event Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
    setupButtons();
});

function setupButtons() {
    const enterGateBtn = document.getElementById('enterGateBtn');
    const replayVoiceBtn = document.getElementById('replayVoiceBtn');
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const soundIcon = document.getElementById('soundIcon');
    const closingReopenBtn = document.getElementById('closingReopenBtn');

    // 1. Enter Gate Button Click (Plays Sat Shri Akaal intro once & scrolls inside)
    if (enterGateBtn) {
        enterGateBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof audioEngine !== 'undefined') {
                audioEngine.playIntro(true);
            }
            window.scrollTo({
                top: 900,
                behavior: 'smooth'
            });
        });
    }

    // 2. Top Bar "Voice Greeting" Button Click (Manual Replay)
    if (replayVoiceBtn) {
        replayVoiceBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof audioEngine !== 'undefined') {
                audioEngine.playIntro(true); // force replay
            }
        });
    }

    // 3. Toggle Sound Effects
    if (soundToggleBtn && soundIcon) {
        soundToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof audioEngine !== 'undefined') {
                const isEnabled = audioEngine.toggleSound();
                if (isEnabled) {
                    soundIcon.className = 'fa-solid fa-volume-high text-base';
                    soundToggleBtn.classList.remove('opacity-50');
                } else {
                    soundIcon.className = 'fa-solid fa-volume-xmark text-base';
                    soundToggleBtn.classList.add('opacity-50');
                }
            }
        });
    }

    // 4. Closing Banner Re-open Button (Back to top)
    if (closingReopenBtn) {
        closingReopenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
