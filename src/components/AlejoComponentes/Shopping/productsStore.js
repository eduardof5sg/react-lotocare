import productsArray from "C:/Users/Alejandro Vargas/Documents/GitHub/React/react-lotocare-e-commerce/src/db.json";

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
