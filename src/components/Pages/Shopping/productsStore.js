const productsArray = [
    {
        id: "price_1OZrXOHpcUDiH65mfSBVvq2k",
        title: "crema",
        price: 2
    },
    {
        id: "price_1OZrYuHpcUDiH65miTkrfPDk",
        title: "",
        price: 2
    },
    {
        id: " price_1OZrZSHpcUDiH65mvqQY2LDF",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    },
    {
        id: "",
        title: "",
        price: 2
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
