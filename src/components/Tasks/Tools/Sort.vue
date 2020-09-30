<template>
  <q-select
    filled
    v-model="sortBy"
    :options="options"
    label="Sort by"
    emit-value
    map-options
    dense
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
          label: 'name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        }
      ]
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get () {
        return this.sort
      },
      set (value) {
        this.setSort(value)
      }
    }
  }
}
</script>
