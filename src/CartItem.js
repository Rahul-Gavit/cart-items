import React from "react";

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

    // testing () {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout (() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    //     promise.then(() => {
    //         this.setState({qty:100});

    //         console.log('state', this.state);
    //     })
    // }

    increaseQuantity = () => {
        // // this.state.qty += 1;
        // console.log('this.state', this.state);

        // //setState form 1
        // this.setState({
        //     qty: this.state.qty +1
        // });

        //setState form 2 -> if prevState required use this
        this.setState ((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty == 0){
            return;
        }
        this.setState ((prevState) => {
            return {
                    qty: prevState.qty -1
            }
        });
    }
    render() {
        const {price, title, qty} = this.state;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                    onClick={this.increaseQuantity} 
                     />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
                    onClick={this.decreaseQuantity} 
                    />
                    <img 
                    alt="delete" 
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/565/565491.png" 
                     />
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