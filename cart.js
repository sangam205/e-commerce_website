const CONVENIENCE_FEES = 99;

let cartItemObjects;

onLoad();

function onLoad() {
  loadCartItemObjects();
  displayCartItems();
 displayCartSummary();
}

function displayCartSummary() {
  let cartSummaryElement = document.querySelector('.cart-summary');

  let totalItem = cartItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
 

  cartItemObjects.forEach(cartItem => {
    totalMRP += cartItem.original_price;
    totalDiscount += cartItem.original_price - cartItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  cartSummaryElement.innerHTML = ` <div class="cart-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem} Items)</div>
      <div class="price-item">
        <span class="price-item-tag">Total M.R.P</span>
        <span class="price-item-value">₹ ${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on M.R.P</span>
        <span class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ 99</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>`;
}


function loadCartItemObjects() {
  console.log(cartItems);

  cartItemObjects = cartItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  // console.log(cartItemObjects);
}


function displayCartItems() {

  let containerElement = document.querySelector('.cart-items-container');
  console.log("qqq.."+containerElement);
  let innerHTML = '';
  console.log("888"+JSON.stringify(cartItemObjects));
  cartItemObjects.forEach(cartItem => {
    console.log("888gg"+JSON.stringify(cartItem));
    innerHTML += generateItemHTML(cartItem); 
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromCart(itemId) {
 cartItems = cartItems.filter(cartItemId => cartItemId != itemId);
 localStorage.setItem('cartItems', JSON.stringify(cartItems));
 loadCartItemObjects();
 displayCartIcon();
 displayCartItems();
 displayCartSummary();
}

function generateItemHTML(item) {
  console.log("vvv"+JSON.stringify(item));
  return `<div class="cart-item-container">
        <div class="item-left-part">
          <img class="cart-item-image" src="${item.image}">
        </div>
        <div class="item-right-part">
          <div class="company">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price-container">
            <span class="current-price">₹ ${item.current_price}</span>
            <span class="original-price" style="text-decoration: line-through">₹ ${item. original_price}</span>
            <span class="discount">(${item.discount}% OFF)</span>
          </div>
          <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span>
          return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
      
      <div class="remove-from-cart" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash trash"></i></div>
    </div>` ;

}

let pop_up = document.getElementById("pop_up");

function open_Popup() {
  popup.classList.add("open-popup");
}

  function close_Popup() {
    popup.classList.remove("open-popup");

}











