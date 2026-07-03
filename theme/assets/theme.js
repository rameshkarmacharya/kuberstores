/* KuberStores Theme - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Theme loaded successfully');

  // Add to cart functionality
  const addToCartForms = document.querySelectorAll('.product-form');
  addToCartForms.forEach(form => {
    form.addEventListener('submit', handleAddToCart);
  });

  // Mobile navigation toggle (if needed)
  initializeMobileNav();
});

/**
 * Handle add to cart form submission
 */
function handleAddToCart(e) {
  e.preventDefault();
  
  const form = this;
  const quantity = form.querySelector('input[name="quantity"]').value;
  const variantId = form.querySelector('input[name="id"]').value;

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: quantity
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Item added to cart:', data);
    alert('Item added to cart!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to add item to cart');
  });
}

/**
 * Initialize mobile navigation
 */
function initializeMobileNav() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    const header = document.querySelector('.site-header');
    // Add mobile-specific functionality here if needed
  }
}

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
  initializeMobileNav();
});

/**
 * Format currency
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount / 100);
}
