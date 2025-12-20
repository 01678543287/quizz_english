// Enhanced User Experience JavaScript
// Thêm file này vào các trang để cải thiện UX

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add ripple effect to buttons
    addRippleEffect();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Add loading state
    improveButtonFeedback();
    
    // Add toast notifications
    createToastContainer();
});

// Ripple effect for buttons
function addRippleEffect() {
    // Disable ripple effect for option buttons to prevent flickering
    const buttons = document.querySelectorAll('.reset-btn, .subject-btn, .pagination button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Keyboard navigation
function addKeyboardNavigation() {
    const options = document.querySelectorAll('.option-btn');
    
    if (options.length > 0) {
        document.addEventListener('keydown', function(e) {
            // Press 1-4 to select options
            if (e.key >= '1' && e.key <= '4') {
                const index = parseInt(e.key) - 1;
                if (options[index] && !options[index].disabled) {
                    options[index].click();
                }
            }
            
            // Press Enter to go to next question
            if (e.key === 'Enter') {
                const nextBtn = document.querySelector('.pagination button:last-child');
                if (nextBtn && !nextBtn.disabled) {
                    nextBtn.click();
                }
            }
            
            // Press Backspace to go to previous question
            if (e.key === 'Backspace' && !e.target.matches('input')) {
                e.preventDefault();
                const prevBtn = document.querySelector('.pagination button:first-child');
                if (prevBtn && !prevBtn.disabled) {
                    prevBtn.click();
                }
            }
        });
    }
}

// Improve button feedback
function improveButtonFeedback() {
    const buttons = document.querySelectorAll('button:not(.option-btn)');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add haptic feedback simulation
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    });
}

// Toast notification system
function createToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }
}

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#2563eb'
    };
    
    toast.style.cssText = `
        background: ${colors[type] || colors.info};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        font-size: 1rem;
        pointer-events: auto;
        animation: slideInRight 0.3s ease-out, fadeOut 0.3s ease-out ${duration - 300}ms forwards;
        max-width: 300px;
    `;
    
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => toast.remove(), duration);
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        #toast-container {
            top: 10px;
            right: 10px;
            left: 10px;
        }
        
        #toast-container > div {
            max-width: 100%;
        }
    }
`;
document.head.appendChild(style);

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showToast };
}
