const addToDb =(id) =>{
    // Step1: Check & get if there is any stored data 
    const storedData = getStoredCart();

    /* 
    Step 2: If there is no data stored we will get an empty Object as we set it on the getStoredCart function. This step is tricky, we have to think in advance that how we will store data. 
    In this case I want to store data in an object, each id will be key and value will be quantity. For the first time click on an item there will be no stored data in the object, we know that but we have to pre-check this using code to avoid error. 
    */

    const quantity = storedData[id];
    if(!quantity){
        storedData[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        storedData[id] = newQuantity;
    }

    const newData = JSON.stringify(storedData);
    localStorage.setItem('stored-cart', newData)
}

const getStoredCart = () =>{
    let storedCart = {};

    const getCart = localStorage.getItem('stored-cart')
    if(getCart){
        storedCart = JSON.parse(getCart);
    }
    return storedCart;
}

export {addToDb, getStoredCart};