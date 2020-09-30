<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-ma-md">
        <modal-task-name :name.sync="task.name" ref="modalName"></modal-task-name>
        <modal-due-date :dueDate.sync="task.dueDate" @clearDueDateTime="clearDueDateTime"></modal-due-date>
        <modal-due-time :dueTime.sync="task.dueTime" v-if="task.dueDate" />
      </q-card-section>
      <modal-button />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalHeader from './shared/ModalHeader'
import ModalTaskName from './shared/ModalTaskName'
import ModalDueDate from './shared/ModalDueDate'
import ModalDueTime from './shared/ModalDueTime'
import ModalButton from './shared/ModalButtons'

export default {
  components: { ModalHeader, ModalTaskName, ModalDueDate, ModalDueTime, ModalButton },
  data () {
    return {
      task: {
        id: null,
        name: '',
        completed: false,
        dueDate: '',
        dueTime: ''
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      this.$refs.modalName.$refs.name.validate()
      if (!this.$refs.modalName.$refs.name.hasError) {
        this.submitTask()
      }
    },

    submitTask () {
      this.addTask(this.task)
      this.$emit('close')
    },

    clearDueDateTime () {
      this.task.dueDate = ''
      this.task.dueTime = ''
    }
  }
}
</script>

<style lang="scss">
  .q-card {
    width: 26rem
  }
</style>
