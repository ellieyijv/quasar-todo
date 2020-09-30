<template>
  <q-input
    outlined
    class="q-mb-lg"
    :value="name"
    @input="$emit('update:name', $event)"
    label="Task name *"
    hint="Task name"
    ref="name"
    autofocus
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type the task name']"
  >
    <template v-slot:append>
      <q-icon name="close" @click="$emit('update:name', '')" class="cursor-pointer" v-if="name"/>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['name']
}
</script>
