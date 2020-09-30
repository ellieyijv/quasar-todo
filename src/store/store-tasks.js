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
  tasks: [
    {
      id: 1,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 2,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 3,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 4,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 5,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 6,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 7,
      name: '',
      completed: false,
      dueDate: '',
    },    
    {
      id: 8,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 9,
      name: '',
      completed: false,
      dueDate: '',
    },    {
      id: 10,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 11,
      name: '',
      completed: false,
      dueDate: '',
    },    
    {
      id: 12,
      name: '',
      completed: false,
      dueDate: '',
    },
    {
      id: 13,
      name: '',
      completed: false,
      dueDate: '',
    },    {
      id: 14,
      name: '',
      completed: false,
      dueDate: '',
    }
  ],
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
