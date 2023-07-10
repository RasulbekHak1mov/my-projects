var cart = [];

var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

function addToCart(event) {
  event.preventDefault();

  var productBox = event.target.parentNode;
  var productName = productBox.querySelector('h3').textContent;
  var productDescription = productBox.querySelector('p').textContent;

  var product = {
    name: productName,
    description: productDescription
  };

  cart.push(product);
  console.log('Mahsulot savatga qo\'shildi:', product);

  updateCartCount(cart.length);

  // Savatga qo'shilgandan so'ng savat.html sahifasiga o'tish
  window.location.href = 'savat.html';
}

function updateCartCount(count) {
  var cartCount = document.querySelector('.count');
  if (cartCount) {
    cartCount.textContent = count;
  }
}

updateCartCount(cart.length);
