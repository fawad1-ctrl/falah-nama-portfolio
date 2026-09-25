/* ============================
   Falah Nama — Inject Nav
   Renders the shared <nav> into
   any element with id="nav-root"
   ============================ */

(function () {
    const html = `
    <nav id="navbar" class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="flex items-center gap-2">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                        <span class="text-white font-bold text-xl">FN</span>
                    </div>
                    <div>
                        <span class="text-xl font-bold gradient-text">Falah Nama</span>
                        <p class="text-xs text-gray-500 urdu">فالح نامہ</p>
                    </div>
                </a>
                <div class="hidden md:flex items-center space-x-6">
                    <a href="index.html#services"     class="text-gray-700 hover:text-emerald-600 transition">Services</a>
                    <a href="index.html#demos"        class="text-gray-700 hover:text-emerald-600 transition">Demos</a>
                    <a href="portfolio.html"          class="text-gray-700 hover:text-emerald-600 transition">Portfolio</a>
                    <a href="index.html#pricing"      class="text-gray-700 hover:text-emerald-600 transition">Pricing</a>
                    <a href="index.html#testimonials" class="text-gray-700 hover:text-emerald-600 transition">Reviews</a>
                    <a href="contact.html" class="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition">Get Started</a>
                </div>
                <button id="mobileMenuBtn" class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="index.html#services"     class="block text-gray-700 hover:text-emerald-600">Services</a>
                <a href="index.html#demos"        class="block text-gray-700 hover:text-emerald-600">Demos</a>
                <a href="portfolio.html"          class="block text-gray-700 hover:text-emerald-600">Portfolio</a>
                <a href="index.html#pricing"      class="block text-gray-700 hover:text-emerald-600">Pricing</a>
                <a href="index.html#testimonials" class="block text-gray-700 hover:text-emerald-600">Reviews</a>
                <a href="contact.html" class="block gradient-bg text-white px-5 py-2 rounded-full text-center">Get Started</a>
            </div>
        </div>
    </nav>`;

    const root = document.getElementById('nav-root');
    if (root) root.innerHTML = html;
})();
