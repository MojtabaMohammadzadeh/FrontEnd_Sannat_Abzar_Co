import { api } from "boot/axios";


export const UPDATE_CART_ITEMS = (state, data) => {
  state.items = data.shop_cart.items;
  state.total_amount = data.shop_cart.total_amount;
  state.quantity = data.shop_cart.items.length;
}

export const ADD_CART_ITEM = (state, product) => {
  const item = state.items.find(item => item.id === product.id);
  if(item){
    state.items.find(item => item.id === product.id).quantity++;
  }else{
    state.items.push({
      ...product,
      quantity: 1
    });
  }
  state.total_amount += product.price;
}

export const REMOVE_ITEM = (state, product) => {
  const item = state.cart.find(item => item.id === product.id)

  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      state.cart.splice(state.cart.indexOf(item), 1)
    }
  }
}

export const REMOVE_ITEM_AT = (state, product) => {
  const index = state.cart.findIndex(item => item.id === product.id)
  state.cart.splice(index, 1)
}

export const CLEAR_CART = state => {
  state.cart = []
}
