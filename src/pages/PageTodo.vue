<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height page-container">
      <div class="row q-pa-md">
        <sort class="col-5 fixed-height" />
        <search class="col-7 q-pl-sm fixed-height" />
      </div>
      <p v-if="!tasksTodo.length && search">No search results</p>
      <!-- <q-scroll-area class="scroll-area"> -->
      <section class="scroll-area">
        <no-tasks v-if="!tasksTodo.length && !search && !settings.listFormat" @addTask="showAddTask = true"></no-tasks>
        <Tasks  :tasks="tasksTodo" bg='bg-orange-4'> Todo</Tasks>
        <Tasks :tasks="tasksCompleted" bg="bg-green-4" class="q-mb-md"> Completed </Tasks>
      </section>
      <!-- </q-scroll-area> -->
      <div class="absolute-bottom text-center q-mb-xs no-pointer-events">
        <q-btn
          size="24px"
          round
          color="primary"
          class="all-pointer-events"
          icon="add"
          @click="showAddTask = true"
        />
      </div>
    </div>
    <!-- q-scroll-area is not supported on ios  -->
    <q-dialog v-model="showAddTask" >
      <AddTaskModal @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Tasks from '../components/Tasks/Tasks'
import AddTaskModal from '../components/Tasks/Modals/AddTask'
import NoTasks from '../components/Tasks/NoTasks'
import Search from '../components/Tasks/Tools/Search'
import Sort from '../components/Tasks/Tools/Sort'

export default {
  name: 'PageIndex',
  components: { Tasks, AddTaskModal, NoTasks, Search, Sort },
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapState('tasks', ['search']),
    ...mapState('settings', ['settings'])
  }
}
</script>

<style lang="scss">
  .text-strikethrough {
    text-decoration: line-through;
  }
  .page-container {
    display: flex;
    flex-direction: column;
  }
  .scroll-area {
    overflow-y: auto;
    max-height: 70vh;
  }
  .fixed-height {
    height: 3rem !important;
  }
</style>
