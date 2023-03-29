const setToLocalStorage = (id) => {
    let shoppingCart = getLocalStorageData();
    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem("storedCart", JSON.stringify(shoppingCart));
}

const getLocalStorageData = () =>{
    let storedCart = {};
    const getStoredCart = localStorage.getItem("storedCart");
    if(getStoredCart){
        storedCart = JSON.parse(getStoredCart);
    }
    return storedCart;
}

export { setToLocalStorage, getLocalStorageData };