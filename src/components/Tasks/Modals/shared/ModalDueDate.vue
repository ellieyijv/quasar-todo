<template>
  <q-input
    outlined
    class="q-mb-md"
    type="date"
    :value="dueDate"
    @input="$emit('update:dueDate', $event)"
    hint="Task due date"
    lazy-rules
    :rules="[]"
  >
    <template v-slot:append>
      <q-icon name="close" @click="$emit('clearDueDateTime')" class="cursor-pointer" v-if="dueDate"/>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>
