import { LocalStorage } from 'quasar'

/* eslint-disable */
const state = {
  settings: {
    timeFormat: false,
    listFormat: false
  }
}

const getters = {
}

const mutations = {
  setTimeFormat(state, timeFormat) {
    state.settings.timeFormat = timeFormat
  },
  setListFormat(state, listFormat) {
    state.settings.listFormat = listFormat
  },
  setSettings(state, settings) {
    state.settings = settings
  }
}

const actions = {
  setTimeFormat({ commit, dispatch }, timeFormat) {
    commit('setTimeFormat', timeFormat)
    dispatch('setLocalStorageSettings')
  },
  setListFormat({ commit, dispatch }, listFormat) {
    commit('setListFormat', listFormat)
    dispatch('setLocalStorageSettings')
  },
  setLocalStorageSettings({ state }) {
    LocalStorage.set('settings', state.settings)
  },
  getLocalStorageSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
