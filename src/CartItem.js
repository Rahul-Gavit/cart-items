import React from "react";

class CartItem extends React.Component{
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>phone</div>
                    <div style={{color : 'red'}}>Rs 999</div>
                    <div style={{color : 'red'}}>Qty 1</div>
                    <div className="cart-item-actions">

                    </div>
                </div>
            </div>

        );
    }
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