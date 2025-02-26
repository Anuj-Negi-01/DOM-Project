let productsIncart = []

function addToCart(name, price){
    const isAlreadyExits = productsIncart.find(product => product.name === name)
    if(isAlreadyExits){
        isAlreadyExits.quantity++
    } else {
        productsIncart.push({
            name,
            price,
            quantity: 1
        })
    }
    updateCart()
}

function removeFromCart(name){
    productsIncart = productsIncart.filter(product => product.name !== name)
    updateCart()
}

function changeQuantity(name, change){
    const product = productsIncart.find(product => product.name === name)
    product.quantity += change;
    if(product.quantity === 0) return removeFromCart(name) 
    updateCart()
}

function updateCart(){
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''    
    if(!productsIncart.length){
        cartItems.innerHTML = `<div class="empty-cart">Cart is empty</div>`
    } else{
        productsIncart.forEach((product) => {
            const wrapperDiv = document.createElement('div')
            wrapperDiv.classList.add('cart-item')
            wrapperDiv.innerHTML = `
                <p>${product.name}</p>
                <div>
                    <button onclick="changeQuantity('${product.name}', -1)">-</button>
                    <span>${product.quantity}</span>
                    <button onclick="changeQuantity('${product.name}', 1)">+</button>
                    <span>${(product.price * product.quantity).toFixed(2)}</span>
                    <button onclick="removeFromCart('${product.name}')")">Remove</button>
                </div> `
            cartItems.appendChild(wrapperDiv)
        })

    }
    const totalBill = productsIncart.reduce((sum, curr) => sum + (curr.price * curr.quantity), 0)
    cartTotal.textContent = `Total: $${(totalBill.toFixed(2))}`
}

updateCart()