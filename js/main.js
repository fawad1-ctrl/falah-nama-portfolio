/* ============================
   Falah Nama — Shared JS
   ============================ */

/* ── Mobile menu toggle ── */
document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }

    /* Close mobile menu when any nav link is clicked */
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
    });

    /* ── Smooth scroll for in-page anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ── Animate counters when they scroll into view ── */
    const counters = document.querySelectorAll('.counter');
    if (counters.length) {
        const animateCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = Math.floor(current) + (el.dataset.suffix || '+');
            }, 16);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));
    }

    /* ── Contact form submission ── */
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = '✅ Message Sent!';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
});

/* ── WhatsApp popup toggle ── */
function toggleWhatsApp() {
    const popup = document.getElementById('whatsappPopup');
    if (popup) popup.classList.toggle('hidden');
}

/* ── Demo modal ── */
function openDemo(type) {
    const demoContent = {
        ecommerce: {
            title: '🛒 E-Commerce Website Demo',
            content: `<div class="space-y-4">
                <p class="text-gray-600">Full-featured online store with product listings, cart, and checkout.</p>
                <ul class="space-y-2 text-sm text-gray-700">
                    <li>✅ Product catalogue with filters</li>
                    <li>✅ Secure online payments (JazzCash / EasyPaisa)</li>
                    <li>✅ Order management dashboard</li>
                    <li>✅ Mobile-first design</li>
                </ul>
                <a href="https://demo.falahnama.pk/ecommerce" target="_blank" class="block w-full text-center gradient-bg text-white py-3 rounded-xl font-semibold">View Live Demo</a>
            </div>`
        },
        restaurant: {
            title: '🍽️ Restaurant Website Demo',
            content: `<div class="space-y-4">
                <p class="text-gray-600">Online menu, table booking, and WhatsApp ordering integration.</p>
                <ul class="space-y-2 text-sm text-gray-700">
                    <li>✅ Digital menu with categories</li>
                    <li>✅ WhatsApp order button</li>
                    <li>✅ Table reservation form</li>
                    <li>✅ Google Maps embed</li>
                </ul>
                <a href="https://demo.falahnama.pk/restaurant" target="_blank" class="block w-full text-center gradient-bg text-white py-3 rounded-xl font-semibold">View Live Demo</a>
            </div>`
        },
        realestate: {
            title: '🏠 Real Estate Portal Demo',
            content: `<div class="space-y-4">
                <p class="text-gray-600">Property listings with search filters, photo galleries, and lead forms.</p>
                <ul class="space-y-2 text-sm text-gray-700">
                    <li>✅ Property search & filters</li>
                    <li>✅ Photo galleries per listing</li>
                    <li>✅ Agent contact forms</li>
                    <li>✅ Map-based property view</li>
                </ul>
                <a href="https://demo.falahnama.pk/realestate" target="_blank" class="block w-full text-center gradient-bg text-white py-3 rounded-xl font-semibold">View Live Demo</a>
            </div>`
        },
        whatsapp: {
            title: '💬 WhatsApp Automation Demo',
            content: `<div class="space-y-4">
                <p class="text-gray-600">Automated order confirmations, delivery updates, and 24/7 customer support bot.</p>
                <ul class="space-y-2 text-sm text-gray-700">
                    <li>✅ Auto order confirmations</li>
                    <li>✅ Delivery tracking updates</li>
                    <li>✅ Customer support chatbot</li>
                    <li>✅ Broadcast messages</li>
                </ul>
                <a href="https://wa.me/923001234567?text=Demo%20Request" target="_blank" class="block w-full text-center bg-green-500 text-white py-3 rounded-xl font-semibold"><i class="fab fa-whatsapp mr-2"></i>Try Live Demo</a>
            </div>`
        },
        uiux: {
            title: '🎨 UI/UX Design Portfolio',
            content: `<div class="space-y-4">
                <p class="text-gray-600">Mobile app and website designs delivered for clients across Pakistan.</p>
                <ul class="space-y-2 text-sm text-gray-700">
                    <li>✅ Mobile app designs (iOS & Android)</li>
                    <li>✅ Website UI/UX</li>
                    <li>✅ Dashboard designs</li>
                    <li>✅ Brand identity packages</li>
                </ul>
                <a href="https://design-portfolio.falahnama.pk" target="_blank" class="block w-full text-center bg-purple-500 text-white py-3 rounded-xl font-semibold"><i class="fas fa-palette mr-2"></i>View Full Portfolio</a>
            </div>`
        }
    };

    const modal = document.getElementById('demoModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    const item = demoContent[type];
    if (item && modal) {
        title.textContent = item.title;
        content.innerHTML = item.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDemo() {
    const modal = document.getElementById('demoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('demoModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeDemo();
        });
    }
});
