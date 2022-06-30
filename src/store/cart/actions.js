import { api } from "boot/axios";


export const getMe = async ({ commit }, token) => {
  return await api.post('/userprofile', { "token": token }).then(response => {
    commit('setMe', response.data);
    return response.data;
  })
}

export const getCartItems = ({ commit }) => {
  const token = localStorage.getItem('token');
  if (token) {
    api.post("/shop/get-cart-items", { token: token }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  }
}


export const addCartItem = ({ commit }, product) => {
  const token = localStorage.getItem('token');
  if (token) {
    api.post("/shop/update-cart", {
      product_id: product.id,
      token: token,
      action: "addToCart"
    }).then((response) => {
      commit('ADD_CART_ITEM', product);
    });
  }
}


export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_ITEM', product);
}

export const removeFromCartAt = ({ commit }, product) => {
  commit('REMOVE_ITEM_AT', product);
}

export const removeAllFromCart = ({ commit }) => {
  commit('CLEAR_CART');
}






