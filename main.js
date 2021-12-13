const itemWrapper = document.getElementById('item_wrapper');
const cartWrapper = document.getElementById('cart_wrapper');
const item = document.getElementsByClassName('item');
const cart = document.getElementsByClassName('cart');
const itemQuantity = document.getElementsByClassName('item-quantity');
const cartQuantity = document.getElementsByClassName('cart-quantity');
const addCart = document.getElementsByClassName('add-to-cart');
const removeCart = document.getElementsByClassName('remove-from-cart');
let totalPrice = document.getElementsByClassName('total-price')[0];
let itemPrice = document.getElementsByClassName('price');
let order = document.getElementsByClassName('order')[0];
let orderPlaced = document.getElementsByClassName('order-placed')[0];
let badgeNumber = document.getElementsByClassName('badge')[0];


// Gives add to cart button functionality \\
 for (let i = 0; i < addCart.length; i++) {

         addCart[i].addEventListener('click', (e) => {
                console.log(cart.length)
                e.target.disabled = 'true'
                addToCart(e)
                total()
                badgeNumber.attributes.value.nodeValue++
            })
        };
 
// Updates item quantity node value \\
for (let i = 0; i < itemQuantity.length; i++) {
   
    itemQuantity[i].addEventListener('click', () => {
        if(itemQuantity[i].value <= 0) {
            itemQuantity[i].value = 0
        } if(itemQuantity[i].value >= 0) {
            itemQuantity[i].attributes.value.nodeValue = itemQuantity[i].value
        }
            
    })
};

// Gives remove cart button functionality \\
 cartWrapper.addEventListener('mouseover', () => {

    if (cartQuantity.length >= 0) {

        for (let i = 0; i < removeCart.length; i++) {
            removeCart[i].addEventListener('click', (e) => {
                removeFromCart(e)
                
                })
        }

    }
});

// Add to cart function. Clones item element, changes classes as needed \\
function addToCart(e) {
    if (e.target.parentNode.children[3].value > 0) {

        let cloneItem = e.target.parentNode.cloneNode(true);
        cloneItem.classList.add('cart');
        cloneItem.classList.remove('item');
        cloneItem.children[4].classList.remove('add-to-cart');
        cloneItem.children[4].classList.add('remove-from-cart');
        cloneItem.children[4].innerHTML = 'Remove';
        cloneItem.children[3].classList.remove('item-quantity');
        cloneItem.children[3].classList.add('cart-quantity');
        cloneItem.children[3].setAttribute('readonly', true);
        cloneItem.children[4].removeAttribute('disabled')
        cloneItem.children[3].setAttribute('type', 'text');
        cloneItem.children[3].value = e.target.parentNode.children[3].value;
        cartWrapper.appendChild(cloneItem);
    
    }

};

// Remove cart function. Removes cart item, enables add to cart functionality \\
function removeFromCart(e) {
    let removeClone = e.target.parentNode.remove(true);
    if (e.target.parentNode.children[0].innerText == 'Item One') {
        itemWrapper.children[0].children[4].removeAttribute('disabled')
    }

    if (e.target.parentNode.children[0].innerText == 'Item Two') {
        itemWrapper.children[1].children[4].removeAttribute('disabled')
    }

    if (e.target.parentNode.children[0].innerText == 'Item Three') {
        itemWrapper.children[2].children[4].removeAttribute('disabled')
    }

    if (e.target.parentNode.children[0].innerText == 'Item Four') {
        itemWrapper.children[3].children[4].removeAttribute('disabled')
    }

    removeClone;
};

//Updates total as needed \\
function total() {
    
    if (cart.length == 1 ) {

        let tempItemPrice = parseFloat(cart[0].children[1].innerText.replace('$', '')) * parseInt(cart[0].children[3].value, 10)
        let priceFixed = tempItemPrice.toFixed(2)
        totalPrice.innerHTML = '$' + (parseFloat(priceFixed)).toFixed(2)
    
    }
    
    if (cart.length == 2) {

        let tempItemPrice = parseFloat(cart[0].children[1].innerText.replace('$', '')) * parseInt(cart[0].children[3].value, 10)
        let priceFixed = tempItemPrice.toFixed(2)
        let tempItemPrice2 = parseFloat(cart[1].children[1].innerText.replace('$', '')) * parseInt(cart[1].children[3].value, 10)
        let priceFixed2 = tempItemPrice2.toFixed(2);
        let anotherPrice = parseFloat(priceFixed) + parseFloat(priceFixed2)
        totalPrice.innerHTML = '$' + anotherPrice.toFixed(2)
    
    }

    if (cart.length == 3) {

        let tempItemPrice = parseFloat(cart[0].children[1].innerText.replace('$', '')) * parseInt(cart[0].children[3].value, 10)
        let priceFixed = tempItemPrice.toFixed(2)
        let tempItemPrice2 = parseFloat(cart[1].children[1].innerText.replace('$', '')) * parseInt(cart[1].children[3].value, 10)
        let priceFixed2 = tempItemPrice2.toFixed(2);
        let tempItemPrice3 = parseFloat(cart[2].children[1].innerText.replace('$', '')) * parseInt(cart[2].children[3].value, 10)
        let priceFixed3 = tempItemPrice3.toFixed(2)
        let anotherPrice = parseFloat(priceFixed) + parseFloat(priceFixed2) + parseFloat(priceFixed3)
        totalPrice.innerHTML = '$' + anotherPrice.toFixed(2)
    
    }

    if (cart.length == 4) {

        let tempItemPrice = parseFloat(cart[0].children[1].innerText.replace('$', '')) * parseInt(cart[0].children[3].value, 10)
        let priceFixed = tempItemPrice.toFixed(2)
        let tempItemPrice2 = parseFloat(cart[1].children[1].innerText.replace('$', '')) * parseInt(cart[1].children[3].value, 10)
        let priceFixed2 = tempItemPrice2.toFixed(2);
        let tempItemPrice3 = parseFloat(cart[2].children[1].innerText.replace('$', '')) * parseInt(cart[2].children[3].value, 10)
        let priceFixed3 = tempItemPrice3.toFixed(2)
        let tempItemPrice4 = parseFloat(cart[3].children[1].innerText.replace('$', '')) * parseInt(cart[3].children[3].value, 10)
        let priceFixed4 = tempItemPrice4.toFixed(2)
        let anotherPrice = parseFloat(priceFixed) + parseFloat(priceFixed2) + parseFloat(priceFixed3) + parseFloat(priceFixed4)
        totalPrice.innerHTML = '$' + anotherPrice.toFixed(2)

    }

};

// Updates total if cart item is removed \\    
cartWrapper.addEventListener('click', (e) => {
    if (e.target == e.target.parentNode.children[4] && e.target.parentNode.children[0].innerHTML == 'Item One') {

        newTotal = parseFloat(totalPrice.innerText.replace('$', ''))
        itemPrice = parseFloat(e.target.parentNode.children[1].innerText.replace('$', '')) * parseInt(e.target.parentNode.children[3].value, 10)
        totalPrice.innerHTML = '$' + (newTotal - itemPrice).toFixed(2)
        badgeNumber.attributes.value.nodeValue--

    }

    if (e.target == e.target.parentNode.children[4] && e.target.parentNode.children[0].innerHTML == 'Item Two') {

        newTotal = parseFloat(totalPrice.innerText.replace('$', ''))
        itemPrice = parseFloat(e.target.parentNode.children[1].innerText.replace('$', '')) * parseInt(e.target.parentNode.children[3].value, 10)
        totalPrice.innerHTML = '$' + (newTotal - itemPrice).toFixed(2)
        badgeNumber.attributes.value.nodeValue--

    }

    if (e.target == e.target.parentNode.children[4] && e.target.parentNode.children[0].innerHTML == 'Item Three') {

        newTotal = parseFloat(totalPrice.innerText.replace('$', ''))
        itemPrice = parseFloat(e.target.parentNode.children[1].innerText.replace('$', '')) * parseInt(e.target.parentNode.children[3].value, 10)
        totalPrice.innerHTML = '$' + (newTotal - itemPrice).toFixed(2)
        badgeNumber.attributes.value.nodeValue--

    }

    if (e.target == e.target.parentNode.children[4] && e.target.parentNode.children[0].innerHTML == 'Item Four') {

        newTotal = parseFloat(totalPrice.innerText.replace('$', ''))
        itemPrice = parseFloat(e.target.parentNode.children[1].innerText.replace('$', '')) * parseInt(e.target.parentNode.children[3].value, 10)
        totalPrice.innerHTML = '$' + (newTotal - itemPrice).toFixed(2)
        badgeNumber.attributes.value.nodeValue--

    }
});
            
// Place order functionality \\
order.addEventListener('click', () => {
    if (totalPrice.innerText == '$0.00') {
        return;
    } else {
        orderPlaced.style.display = 'block'
        cartWrapper.style.display = 'none'
        order.disabled = 'true'
        itemWrapper.children[0].children[4].disabled = 'true'
        itemWrapper.children[1].children[4].disabled = 'true'
        itemWrapper.children[2].children[4].disabled = 'true'
        itemWrapper.children[3].children[4].disabled = 'true'

    }
})






