import { useState, useEffect, useContext } from "react";
// import { WishlistContext } from "./WishlistContext";
import WishlistItems from "./WishlistItems";
import { Button, Modal, ModalTitle } from "react-bootstrap";

function WishlistPage({ onHide, showModal })  {
    const page = useContext(WishlistContext);

    const [show, setShow] = useState(showModal)

    useEffect(() => {
        setShow(showModal);
    }, [showModal, page]);

    const favoritos = async () => {
        await fetch('http://localhost:3000/favoritos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: page.items})
        }).then((response) => {
            return response.jason();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        });
}

    const productsCount = wishlistItems.items.reduce(
        (sum, product) => sum + product.quantity,
        0
      );


    return (
        <Modal show={show} inHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Favoritos</Modal.Title>
            </Modal.Header>
            <Modal.body>
                {productsCount > 0 ? (
                    <>
                    <p>Items en favoritos</p>
                    {WishlistItems.items.map((currentProduct, idx) => (
                        <WishlistItems
                        key={idx}
                        id={currentProduct.quantity}
                        ></WishlistItems>
                    ))}

                    </>
                ) : (
                    <h1>No tienes favoritos actualomente</h1>
                )}
            </Modal.body>
        </Modal>
    );   
}

export default WishlistPage;