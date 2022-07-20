import React, { Component } from 'react';
import './Product.css';

const products = [
    {
        emoji: "🎟",
        name: "entrada",
        price: 800,
    },
    {
        emoji: "🍿",
        name: "pochoclo",
        price: 600,
    },
    {
        emoji: "🍬",
        name: "golosinas",
        price: 200,
    },
];

export default class Product extends Component {

    state = {
        cart: [],
        total: 0,
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions);
    }

    add = (product) => {
        this.setState((state) => ({
            cart: [...state.cart, product],
        }))
    }

    remove = (product) => {
        this.setState((state) => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex((p) => p.name === product.name);
            if (productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1);
            return ({
                cart,
            })
        })
    }

    render() {
        return(
            <div className="wrapper">
                <div>Carro: {this.state.cart.length} ítems en total.</div>
                <div>Total: $ {this.getTotal()}</div>
                <div>
                    {products.map((product) => (
                        <div key={product.name}>
                            <div className="product">
                                <span role="img" aria-label={product.name}>{product.emoji}</span>
                            </div>
                            <button onClick={() => this.add(product)}>Agregar</button> <button onClick={() => this.remove(product)}>Eliminar</button>
                        </div>    
                    ))}
                </div>
            </div>
        );
    }
}