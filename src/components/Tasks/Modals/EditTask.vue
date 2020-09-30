<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
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
  props: ['editTask'],
  data () {
    return {
      task: {}
    }
  },
  mounted () {
    this.task = Object.assign({}, this.editTask)
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm () {
      this.$refs.modalName.$refs.name.validate()
      if (!this.$refs.modalName.$refs.name.hasError) {
        this.submitTask()
      }
    },

    submitTask () {
      this.updateTask({ id: this.task.id, task: this.task })
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
