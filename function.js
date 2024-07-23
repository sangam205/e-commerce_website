let cartItems;


onLoad(); 

function onLoad() {
  let cartItemsStr = localStorage.getItem('cartItems');
  cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
displayItemsOnPage();
displayCartIcon();
}


function addToCart(itemId) {
  cartItems.push(itemId);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  displayCartIcon();

}

function displayCartIcon() {
  let cartItemCountElement = document.querySelector('.cart-item-count');
  if (cartItems.length > 0) {
  cartItemCountElement.style.visibility = 'visible';
  cartItemCountElement.innerText = cartItems.length;
 } else {
  cartItemCountElement.style.visibility = 'hidden';
 }
}


function displayItemsOnPage() {
  let itemsContainerElement = document.querySelector('.items-container');

console.log("11"+itemsContainerElement);




  if (!itemsContainerElement) {
    console.log("khkh");
    return;
  }
  let innerHTML = '';
  items.forEach(item => {
    console.log("kh");
    innerHTML += `<div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
          ${item.rating.stars}  <i class="fa-solid fa-star star"></i> | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">₹ ${item.current_price}</span>
          <span class="original-price">₹ ${item.original_price}</span>
          <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart(${item.id})">Add to Cart</button>
       
    </div>`

    console.log("15");
  });
  
  itemsContainerElement.innerHTML = innerHTML;
}