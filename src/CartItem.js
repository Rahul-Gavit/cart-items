import React from "react";

const CartItem = (props) => {

        const {price, title, qty} = props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onHandleDeleteProduct} = props;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color : 'red'}}>Rs {price}</div>
                    <div style={{color : 'red'}}>Qty {qty}</div>
                    <div className="cart-item-actions">
                    {/* buttons */}
                    <img 
                    alt="increase" 
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                    onClick={ () => {
                        onIncreaseQuantity(product)
                    }} 
                     />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
                    onClick={ () => {
                        onDecreaseQuantity(product)
                    }} 
                    />
                    <img 
                    alt="delete" 
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
                    onClick={ () => {
                        onHandleDeleteProduct(product.id)
                    }} 
                     />
                    </div>
                </div>
            </div>

        );
    }

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#777'
    }
}

export default CartItem;