var cartCount = 0; // Savatdagi mahsulotlar soni

function addToCart(event) {
  event.preventDefault();
  cartCount++;
  updateCartCount(cartCount);
}

function updateCartCount(count) {
  var cartBadge = document.querySelector('.cart span');
  cartBadge.textContent = count;
}

var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

updateCartCount(cartCount);
