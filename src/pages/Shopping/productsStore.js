import productsArray from "../../db.json";

function getProductData(id) {
    console.log(productsArray);
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("El id del producto no existe: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };


