import { uid } from 'quasar'
/* eslint-disable */
function sortBy(key) {
  return (a, b) => {
    if (a[key] > b[key]) {
      return 1
    }
    if (a[key] < b[key]) {
      return -1
    }
    return 0
  }
}

const state = {
  tasks: [],
  search: '',
  sort: null
}

const getters = {
  tasksSorted: (state) => {
    if (state.sort) {
      const sortedTasks = [...state.tasks]
      return sortedTasks.sort(sortBy(state.sort))
    }
    return state.tasks
  },
  tasksFiltered: (state, getters) => {
    const sortedTasks = getters.tasksSorted
    if (state.search) {
      return sortedTasks.filter((task) => task.name.toLowerCase().includes(state.search.toLowerCase()))
    }
    return sortedTasks
  },
  tasksTodo: (state, getters) => {
    return getters.tasksFiltered.filter((task) => task.completed === false)
  },
  tasksCompleted: (state, getters) => {
    return getters.tasksFiltered.filter((task) => task.completed)
  }
}

const mutations = {
  updateTask(state, payload) {
    state.tasks.filter((task) => {
      if (task.id === payload.id) {
        Object.assign(task, { ...payload.task })
      }
    })
  },
  deleteTask(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id)
  },
  addTask(state, task) {
    const id = uid()
    state.tasks.push({ ...task, id })
  },
  setSearch(state, searchField) {
    state.search = searchField
  },
  setSort(state, sortBy) {
    state.sort = sortBy
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },

  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },

  addTask({ commit }, task) {
    commit('addTask', task)
  },

  setSearch({ commit }, searchField) {
    commit('setSearch', searchField)
  },

  setSort({ commit }, sortBy) {
    commit('setSort', sortBy)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
