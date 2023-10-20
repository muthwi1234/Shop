// Sample product data (for simplicity)
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
    }
}

// Function to display the shopping cart
function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<h2>Shopping Cart</h2>';
    let total = 0;
    cart.forEach(product => {
        cartElement.innerHTML += `
            <p>${product.name} - $${product.price}</p>
        `;
        total += product.price;
    });
    cartElement.innerHTML += `<p>Total: $${total}</p>`;
}

// Display initial products and an empty cart
displayProducts();
displayCart();
