<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
  >
    <div
      :class="{'q-mt-lg': !settings.listFormat}"
      v-if="tasks && tasks.length"
    >
      <q-banner
        dense
        rounded
        class="text-white text-center"
        :class="bg"
        v-if="!settings.listFormat"
      >
        <span class="text-bold text-subtitle1"><slot></slot></span>
      </q-banner>
      <q-list bordered separator>
        <Task v-for="task in tasks" :key="task.id" :task="task"></Task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import Task from './Task'
import { mapState } from 'vuex'

export default {
  props: ['tasks', 'bg'],
  components: { Task },
  computed: {
    ...mapState('settings', ['settings'])
  }
}
</script>
