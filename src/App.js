import React, {useState, useEffect} from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import "normalize.css"
import {Switch, Route} from 'react-router-dom'
import { About, Contact, NoMatch, Cart, Main, Checkout } from './routes';

import {commerce} from "./lib/commerce"


const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isFinished, setIsFinished] = useState(false)


    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);
    
        setCart(response.cart);
    };

    const handleUpdateCartQuantity= async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity });
    
        setCart(response.cart);
      };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {

        setOrder(newOrder);
        refreshCart();
    } catch (error) {
        setErrorMessage(error.data.error.message);
    }
    };  

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])
    
    return (
        <>
            <Header totalItems={cart.total_items} />
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Main products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQuantity={handleUpdateCartQuantity} />
                    </Route>
                    <Route path="/checkout" exact>
                        <Checkout isFinished={isFinished} setIsFinished={setIsFinished} cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} setSuccess={setSuccessMessage} success={successMessage} error={errorMessage} />
                    </Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                    <Route path="*" component={NoMatch}></Route>
                </Switch>
            </Layout>
            <Footer/>
        </>
    )
}

export default App
