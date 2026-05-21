
        // 1. MOBILE RESPONSIVE NAV LIST TOGGLE
        const mobileMenuButton = document.getElementById('menu-toggle-btn');
        const mobileLinksContainer = document.getElementById('mobile-nav-links');

        mobileMenuButton.addEventListener('click', () => {
            mobileLinksContainer.classList.toggle('hidden');
        });

        // 2. RUNTIME HOUR COMPONENT BADGE CHECKER
        function updateStoreStatus() {
            const statusTextElement = document.getElementById('shop-status-badge');
            const currentHour = new Date().getHours();
            
            const openingTime = 7;  
            const closingTime = 18; 

            if (currentHour >= openingTime && currentHour < closingTime) {
                statusTextElement.textContent = "● Open Now — Step Inside";
                statusTextElement.style.color = "#16a34a"; 
            } else {
                statusTextElement.textContent = "○ Closed — Opens at 7 AM";
                statusTextElement.style.color = "#78716c"; 
            }
        }
        updateStoreStatus();

        // 3. SELECTION FILTER CONTROLLER INTERACTION
        const filterButtons = document.querySelectorAll('.filter-btn');
        const menuItemCards = document.querySelectorAll('.menu-item-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.className = "filter-btn px-5 py-2 rounded-full text-xs font-semibold bg-white/60 hover:bg-white text-stone-600 transition shadow-sm border border-white/60";
                });
                button.className = "filter-btn px-5 py-2 rounded-full text-xs font-semibold bg-amber-900 text-white transition shadow-sm";

                const selectedCategory = button.getAttribute('data-category');

                menuItemCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-item-type');
                    if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // 4. PREVENT REFRESH FORM DISPATCH PROCESSING
        const bookingForm = document.getElementById('table-booking-form');

        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const customerName = document.getElementById('client-name').value.trim();
            const customerEmail = document.getElementById('client-email').value.trim();

            if (customerName === "" || customerEmail === "") {
                alert("Please fill out remaining registration nodes.");
                return;
            }

            bookingForm.innerHTML = `
                <div class="bg-white/90 p-6 rounded-2xl border border-emerald-600/20 text-center shadow-inner">
                    <h3 class="text-sm font-bold text-emerald-800 mb-1">System Complete.</h3>
                    <p class="text-stone-500 text-[11px]">Table logged inside local state for <strong>${customerName}</strong>. Check inbox at ${customerEmail}.</p>
                </div>
            `;
        });