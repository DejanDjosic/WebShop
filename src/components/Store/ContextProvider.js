import React,{useReducer} from 'react'
import Context from './context';


const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  
const addItemToCartHandler=()=>{}
const removeItemFromCartHandler=()=>{}


const cartReducer=()=>{

}


const ContextProvider = (props) => {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        category:'All',
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };
      return (
        <Context.Provider value={cartContext}>
          {props.children}
        </Context.Provider>
      );
}


export default ContextProvider