<template>
  <q-card-section class="row">
      <div class="text-h6"><slot></slot></div>
      <q-space />
      <q-btn
        v-close-popup
        dense
        round
        icon="close"
        flat
      >
      </q-btn>
    </q-card-section>
</template>
