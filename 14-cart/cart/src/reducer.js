const reducer = (state, action) => {
  //increase
  if (action.type === "INCREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  // decrease
  if (action.type === "DECREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    }).filter( (cartItem)=> cartItem.amount !== 0 ) ;
    return { ...state, cart: tempCart };
  }
  // remove item
  if(action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter( (cartItem)=> cartItem.id!==action.payload ) ;
    return {...state, cart: tempCart} ;
  }
  // get total
  if(action.type==="GET_TOTAL") {
    const initialTotal = {total: 0 , amount: 0} ;
    const {total, amount} = state.cart.reduce( (cartTotal, cartItem)=>{
       cartTotal.amount += cartItem.amount ;
       cartTotal.total += (cartItem.amount * cartItem.price) ;
       return cartTotal ;
    }, initialTotal)

    return {...state, amount: amount, total: parseFloat(total.toFixed(2)) }

  }
  // clear cart
  if(action.type==="CLEAR_CART") {
     return {...state, cart: [] };
  } 

};

export default reducer;
