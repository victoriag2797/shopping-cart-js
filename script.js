let shoppingCart = []; //Create array for shopping cart
let appleButton = document.querySelector('#add-apple'); //gets apple button
let pearButton = document.querySelector('#add-pear'); //gets pear button
let orangeButton = document.querySelector('#add-orange'); //gets orange button
let cartList = document.querySelector('#cart-items'); //gets cart items


appleButton.addEventListener("click", () =>{
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple";
    cartList.appendChild(li);
});

pearButton.addEventListener("click", () =>{
    shoppingCart.push("Pear");
    let li = document.createElement("li");
    li.textContent = "Pear";
    cartList.appendChild(li);
});

orangeButton.addEventListener("click", () =>{
    shoppingCart.push("Orange");
    let li = document.createElement("li");
    li.textContent = "Orange";
    cartList.appendChild(li);
});
