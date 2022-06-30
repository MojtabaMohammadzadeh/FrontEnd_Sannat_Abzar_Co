import {api} from 'boot/axios'

export const checkCode = async ({commit, dispatch}, payload) => {
  return api.post('/checkcode', payload).then(response => {
    const token = response.data.token;
    commit('setToken', token);
    dispatch('getMe', token);
    return response.data;
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
  return await api.post('/userprofile', {"token" : token}).then(response => {
    commit('setMe', response.data);
    return response.data;
  })
}

export const init = async ({commit, dispatch}) => {
  const token = localStorage.getItem('token')
  if (token) {
    await commit('setToken', token)
    api.defaults.headers.common.Authorization = 'JWT ' + token
    dispatch('getMe', token)
  } else {
    commit('removeToken')
  }
}
