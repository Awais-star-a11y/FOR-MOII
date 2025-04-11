let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h2').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));

        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item
