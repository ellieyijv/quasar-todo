<template>
  <q-input label="Search" v-model="searchField" dense outlined>
    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('tasks', ['setSearch'])
  },
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get () {
        return this.search
      },
      set (value) {
        this.setSearch(value)
      }
    }
  }
}
</script>
