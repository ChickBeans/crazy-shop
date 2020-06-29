import React from 'react';
import {Message, Items} from './index';

const Main = (props) => {
    return(
        <main className="main">
            <div className="main__inner">
                <Message />
                <Items datas={props.datas} addCartItem={props.addCartItem} incCartItem={props.incCartItem} addedCart={props.addedCart}
                cartCount={props.cartCount} />
            </div>
        </main>
    )
}

export default Main;