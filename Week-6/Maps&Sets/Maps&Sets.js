let productViews = new WeakMap();

let cartItems = new WeakSet();

function incrementProductViews(productID)
{
    if(productViews.get(productID))
    {
        const views=productViews.get(productID);
        productViews.set(productID, views+1);
    }
    else{
        productViews.set(productID, 1);
    }
}

function addTocart(productID)
{
    if(!cartItems.has(productID))
    {
        cartItems.add(productID)
        return "Product added in cart";
    }
    return "Product already added in cart";

}

//Begining of map and set
console.log(productViews);
console.log(cartItems);

productViews(123);
console.log(productViews);

productViews(123);
productViews(123);
console.log(productViews);

console.log(addToCart(123)); 
console.log(addToCart(123));