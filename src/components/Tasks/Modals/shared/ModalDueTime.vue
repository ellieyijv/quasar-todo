<template>
   <q-input
    outlined
    class="q-mb-md"
    type="time"
    :value="dueTime"
    @input="$emit('update:dueTime', $event)"
    hint="Task due time"
  >
    <template v-slot:append>
      <q-icon name="close" @click="$emit('update:dueTime', '')" class="cursor-pointer" v-if="dueTime"/>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['dueTime']
}
</script>
