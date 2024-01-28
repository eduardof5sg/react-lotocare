import productsArray from "../../db.json";

function getProductData(id) {
    
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
       
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };


