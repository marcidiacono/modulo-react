import React, { useReducer } from 'react';
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

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.product];
        case "remove":
            const productIndex = state.findIndex(p => p.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const cart = [...state];
            cart.splice(productIndex, 1);
            return cart;
        default:
            return state;        
    }
}

// Esto, en la versión final, ya no hace falta. Porque estamos calculando el total a partir del contenido del carro en getTotal() (*)
/*
function totalReducer(state, action) {
    if (action.type === "add") {
        return state + action.price;
    } else {
        return state - action.price;
    }
}
*/
export default function Product() {

    // const [cart, setCart] = useSate([]);
    const [cart, setCart] = useReducer(cartReducer, []);

    // const [total, setTotal] = useState(0);
    // Por lo mismo en (*)
    // const [total, setTotal] = useReducer(totalReducer, 0);

    // Esto con useState
    /*
    function add(product) {
        setCart(current => [...current, product.name]);
        setTotal(current => current + product.price);
    }
    */
    function add(product) {
        // const { name, price } = product;
        setCart({ product, type: "add" });
        // setTotal({ price, type: "add" });
    }

    function remove(product) {
        // const { name, price } = product;
        setCart({ product, type: "remove" });
        // setTotal({ price, type: "remove" });
    }
 
    return(
        <div className="wrapper">
            <div>Carro: {cart.length} ítems en total.</div>
            <div>Total: $ {getTotal(cart)}</div>
            <div>
                {products.map((product) => (
                    <div key={product.name}>
                        <div className="product">
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                        </div>
                        <button onClick={() => add(product)}>Agregar</button> <button onClick={() => remove(product)}>Eliminar</button>
                    </div>    
                ))}
            </div>
        </div>
    );
}
