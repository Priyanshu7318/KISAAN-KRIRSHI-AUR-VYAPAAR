const charts = {
    priceAction: {
        ctx: document.getElementById('priceActionChart').getContext('2d'),
        config: {
            type: 'line',
            data: {
                labels: Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`), // 15 days
                datasets: [{
                    label: 'Price',
                    data: Array.from({ length: 15 }, () => Math.random() * 1000 + 3000), // 15 days of data
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        }
    },
    volume: {
        ctx: document.getElementById('volumeChart').getContext('2d'),
        config: {
            type: 'bar',
            data: {
                labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // 7 days
                datasets: [{
                    label: 'Volume',
                    data: Array.from({ length: 7 }, () => Math.random() * 1000 + 1000), // 7 days of data
                    backgroundColor: '#2196F3'
                }]
            }
        }
    },
    marketDepth: {
        ctx: document.getElementById('marketDepthChart').getContext('2d'),
        config: {
            type: 'line',
            data: {
                labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // 7 days
                datasets: [{
                    label: 'Supply',
                    data: Array.from({ length: 7 }, () => Math.random() * 100), // 7 days of data
                    borderColor: '#4CAF50',
                    fill: true
                }, {
                    label: 'Demand',
                    data: Array.from({ length: 7 }, () => Math.random() * 100), // 7 days of data
                    borderColor: '#f44336',
                    fill: true
                }]
            }
        }
    },
    priceDistribution: {
        ctx: document.getElementById('priceDistributionChart').getContext('2d'),
        config: {
            type: 'bar',
            data: {
                labels: ['2800-3000', '3000-3200', '3200-3400', '3400-3600', '3600-3800'],
                datasets: [{
                    label: 'Trade Count',
                    data: [15, 30, 45, 25, 10],
                    backgroundColor: '#9C27B0'
                }]
            }
        }
    }
};

// Create all charts
Object.values(charts).forEach(chart => {
    new Chart(chart.ctx, chart.config);
});

// Simulate live updates
setInterval(() => {
    Object.values(charts).forEach(chart => {
        chart.config.data.datasets[0].data =
            chart.config.data.datasets[0].data.map(() => Math.random() * 1000 + 3000);
        new Chart(chart.ctx, chart.config);
    });
}, 5000);

// Enhanced filtering with smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const commodityRows = document.querySelectorAll('.commodity-type');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            commodityRows.forEach(row => {
                if (category === 'all' || row.classList.contains(category)) {
                    row.style.display = '';
                    row.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
});


function updatePrices() {
    const rows = document.querySelectorAll('.commodity-type:not([style*="display: none"])');
    rows.forEach(row => {
        const priceChange = (Math.random() * 4 - 2).toFixed(1);
        const currentPrice = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace(/[^0-9.]/g, ''));
        const newPrice = currentPrice * (1 + priceChange / 100);

        const priceCell = row.querySelector('td:nth-child(2)');
        priceCell.style.animation = 'priceUpdate 0.5s ease-out';
        priceCell.textContent = `₹${newPrice.toFixed(2)}/quintal`;

        const trendCell = row.querySelector('td:nth-child(3)');
        trendCell.textContent = `${priceChange > 0 ? '+' : ''}${priceChange}% ${priceChange > 0 ? '↑' : '↓'}`;
        trendCell.className = priceChange > 0 ? 'trend-up' : 'trend-down';
    });
}


setInterval(updatePrices, 5000);

// Sticky header functionality
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        navItems.forEach(item => item.classList.remove('active'));

        const targetSection = document.getElementById(sectionId);
        const targetNav = document.querySelector(`[data-section="${sectionId}"]`);

        if (targetSection && targetNav) {
            targetSection.classList.add('active');
            targetNav.classList.add('active');
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.dataset.section;
            showSection(sectionId);
        });
    });

    const timeFilters = document.querySelectorAll('.time-filter');
    timeFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            timeFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            updatePriceChart(filter.dataset.period);
        });
    });

    showSection('price-action');
});

function updatePriceChart(period) {
    console.log(`Updating chart for period: ${period}`);
}

// State-based price handling
const mspStates = ['punjab', 'haryana', 'madhyaPradesh', 'bihar', 'uttarPradesh', 'rajasthan', 'chhattisgarh'];
const stateSelector = document.getElementById('stateSelector');
const priceTypeLabel = document.getElementById('priceTypeLabel');
const priceTable = document.querySelector('.price-table tbody');

// MSP rates for different commodities (2023-24 rates)
const mspRates = {
    'Rice (Basmati)': 2300,
    'Wheat': 2425,
    'Baajra': 2625,
    'Maize': 2225,
    'Soyabean': 4892,
    'Paddy': 2320,
};

let originalPrices = {};

// Store original prices when page loads
document.addEventListener('DOMContentLoaded', () => {
    const rows = priceTable.getElementsByTagName('tr');
    for (let row of rows) {
        const commodityNameElement = row.querySelector('.commodity-name');
        if (!commodityNameElement) continue;
        
        const commodityName = commodityNameElement.textContent;
        const priceCell = row.querySelector('td:nth-child(2)');
        originalPrices[commodityName] = priceCell.textContent;
    }
});

stateSelector.addEventListener('change', function() {
    const selectedState = this.value;
    if (!selectedState) {
        priceTypeLabel.textContent = 'Select a state to view prices';
        priceTypeLabel.className = 'price-type-label';
        // Reset to original prices
        resetToOriginalPrices();
        return;
    }

    const isMspState = mspStates.includes(selectedState);
    
    // Update price type indicator
    priceTypeLabel.textContent = isMspState ? 
        `${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} - MSP Rates Applied` :
        `${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} - Market Rates Applied`;
    priceTypeLabel.className = `price-type-label ${isMspState ? 'msp' : 'market'}`;

    // Update prices in the table
    const rows = priceTable.getElementsByTagName('tr');
    for (let row of rows) {
        const commodityNameElement = row.querySelector('.commodity-name');
        if (!commodityNameElement) continue;

        const commodityName = commodityNameElement.textContent;
        const priceCell = row.querySelector('td:nth-child(2)');
        const trendCell = row.querySelector('td:nth-child(3)');
        
        if (isMspState && mspRates[commodityName]) {
            // Apply MSP rate if available
            const mspRate = mspRates[commodityName];
            const originalPrice = parseFloat(originalPrices[commodityName].replace(/[^0-9.]/g, ''));
            const priceDiff = ((mspRate - originalPrice) / originalPrice * 100).toFixed(1);
            
            priceCell.textContent = `₹${mspRate}/quintal`;
            priceCell.style.color = '#2196F3';
            
            // Update trend indicator
            trendCell.textContent = `${priceDiff > 0 ? '+' : ''}${priceDiff}% ${priceDiff > 0 ? '↑' : '↓'}`;
            trendCell.className = priceDiff > 0 ? 'trend-up' : 'trend-down';
            
            // Add animation
            priceCell.style.animation = 'priceUpdate 1s ease-out';
        } else {
            // Reset to original market rate
            priceCell.textContent = originalPrices[commodityName];
            priceCell.style.color = '';
            // Reset animation
            priceCell.style.animation = '';
        }
    }
});

function resetToOriginalPrices() {
    const rows = priceTable.getElementsByTagName('tr');
    for (let row of rows) {
        const commodityNameElement = row.querySelector('.commodity-name');
        if (!commodityNameElement) continue;
        
        const commodityName = commodityNameElement.textContent;
        const priceCell = row.querySelector('td:nth-child(2)');
        
        priceCell.textContent = originalPrices[commodityName];
        priceCell.style.color = '';
        priceCell.style.animation = '';
    }
}