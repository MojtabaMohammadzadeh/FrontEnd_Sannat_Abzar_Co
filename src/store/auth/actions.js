import {api} from 'boot/axios'

export const checkCode = async ({commit, dispatch}, payload) => {
  return api.post('/checkcode', payload).then(response => {
    const token = response.token;
    commit('setToken', token);
    dispatch('getMe', token);
    return response;
  })
};

export const sendCode = async ({commit, dispatch}, payload) => {
  return  api.post('/sendcode', payload).then(response => {
    return response.data;
  })
};

export const signOut = ({commit}) => {
  commit('removeToken')
}

export const getMe = async ({commit}, token) => {
  await api.post('/userprofile', token.access).then(response => {
    commit('setMe', response.data)
  })
}

export const init = async ({commit, dispatch}) => {
  const token = localStorage.getItem('token')
  if (token) {
    await commit('setToken', JSON.parse(token))
    api.defaults.headers.common.Authorization = 'JWT ' + JSON.parse(token).access
    dispatch('getMe', JSON.parse(token))
  } else {
    commit('removeToken')
  }
}
