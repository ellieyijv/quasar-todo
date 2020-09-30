<template>
  <q-item
    clickable
    v-ripple
    @click="updateTaskStatus(task)"
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section side>
      <q-checkbox :value="task.completed" class="no-pointer-events"/>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough' : task.completed }">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon name="event" size="18px"/>
      <q-item-label caption>{{task.dueDate}}</q-item-label>
      <q-item-label caption><small>{{settings.timeFormat ? formatTime : task.dueTime}}</small></q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn flat round color="primary" icon="edit" @click.stop="showEditTask = !showEditTask"/>
        <q-btn flat round color="red" icon="delete" @click.stop="promptToDelete(task.id)"/>
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask" >
      <EditTaskModal @close="showEditTask = false" :editTask="task"/>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EditTaskModal from './Modals/EditTask'
import { date } from 'quasar'

export default {
  props: ['task'],
  data () {
    return {
      showEditTask: false
    }
  },
  components: { EditTaskModal },
  computed: {
    ...mapState('settings', ['settings']),
    formatTime () {
      if (this.task.dueTime) {
        const dateObj = date.extractDate(`${this.task.dueDate} ${this.task.dueTime}`, 'YYYY-MM-DD HH:mm')
        return date.formatDate(dateObj, 'h:ma')
      }
      return ''
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    updateTaskStatus (task) {
      this.updateTask({ id: task.id, task: { ...task, completed: !task.completed } })
    },
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
