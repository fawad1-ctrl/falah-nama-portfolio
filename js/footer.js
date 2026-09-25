/* ============================
   Falah Nama — Inject Footer
   Renders the shared <footer>
   into id="footer-root"
   ============================ */

(function () {
    const year = new Date().getFullYear();
    const html = `
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                            <span class="text-white font-bold text-xl">FN</span>
                        </div>
                        <div>
                            <span class="text-xl font-bold">Falah Nama</span>
                            <p class="text-xs text-gray-400 urdu">فالح نامہ</p>
                        </div>
                    </div>
                    <p class="text-gray-400 text-sm">Pakistan's leading digital growth agency. We help businesses succeed online with modern solutions.</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Services</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="index.html#services" class="hover:text-white transition">Web Development</a></li>
                        <li><a href="index.html#services" class="hover:text-white transition">Mobile Apps</a></li>
                        <li><a href="index.html#services" class="hover:text-white transition">SEO Services</a></li>
                        <li><a href="index.html#services" class="hover:text-white transition">Social Media</a></li>
                        <li><a href="index.html#services" class="hover:text-white transition">Google Ads</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Company</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="about.html"     class="hover:text-white transition">About Us</a></li>
                        <li><a href="portfolio.html" class="hover:text-white transition">Portfolio</a></li>
                        <li><a href="contact.html"   class="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Cities We Serve</h4>
                    <div class="flex flex-wrap gap-2">
                        ${['Lahore','Karachi','Islamabad','Rawalpindi','Faisalabad','Peshawar','Multan','All Pakistan']
                            .map(c => `<span class="bg-gray-800 px-3 py-1 rounded-full text-xs">${c}</span>`).join('')}
                    </div>
                    <div class="flex gap-4 mt-6">
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400 text-sm">&copy; ${year} Falah Nama. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

    const root = document.getElementById('footer-root');
    if (root) root.innerHTML = html;
})();
