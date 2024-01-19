import productsArray from "./lotocare.json";

function getProductData(productsArray) {
    console.log(productsArray);
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };


