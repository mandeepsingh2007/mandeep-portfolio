/**
 * Portfolio Real MP3 Audio & Voice Engine
 * Handles browser autoplay unlock gracefully
 */

class PortfolioVoiceEngine {
    constructor() {
        this.soundEnabled = true;
        this.introSpoken = false;
        this.outroSpoken = false;

        // Preload Audio Objects
        this.introAudio = new Audio('audio/intro.mp3?v=6.0');
        this.outroAudio = new Audio('audio/outro.mp3?v=6.0');

        this.introAudio.preload = 'auto';
        this.outroAudio.preload = 'auto';

        // Auto unlock audio on very first user click/touch anywhere if scroll was blocked
        this.initAutoplayUnlock();
    }

    initAutoplayUnlock() {
        const unlock = () => {
            if (!this.introSpoken && this.soundEnabled) {
                this.playIntro();
            }
            window.removeEventListener('click', unlock);
            window.removeEventListener('touchstart', unlock);
        };
        window.addEventListener('click', unlock, { passive: true });
        window.addEventListener('touchstart', unlock, { passive: true });
    }

    // Play "Sat Shri Akaal" (Intro)
    playIntro(force = false) {
        if (!this.soundEnabled) return;
        if (this.introSpoken && !force) return;

        this.playAudioFile(this.introAudio, () => {
            this.introSpoken = true;
        });
    }

    // Play "Dhanwaad Ji" (Outro at bottom)
    playOutro(force = false) {
        if (!this.soundEnabled) return;
        if (this.outroSpoken && !force) return;

        this.playAudioFile(this.outroAudio, () => {
            this.outroSpoken = true;
        });
    }

    // Play MP3 file safely
    playAudioFile(audioObj, onSuccess) {
        if (!this.soundEnabled) return;

        try {
            this.introAudio.pause();
            this.outroAudio.pause();

            audioObj.currentTime = 0;
            const playPromise = audioObj.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    if (onSuccess) onSuccess();
                }).catch((err) => {
                    console.log('[Audio Engine] Waiting for user click to enable sound...');
                });
            }
        } catch (e) {
            console.warn('[Audio Engine] Audio play error:', e);
        }
    }

    // Toggle Sound On/Off
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        if (!this.soundEnabled) {
            this.introAudio.pause();
            this.outroAudio.pause();
        }
        return this.soundEnabled;
    }
}

// Global instance
const audioEngine = new PortfolioVoiceEngine();
